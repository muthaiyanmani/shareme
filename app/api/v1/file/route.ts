
import { NextRequest, NextResponse } from "next/server";
import catalyst from "zcatalyst-sdk-node";
import { v4 as uuid } from "uuid";


async function POST(req: NextRequest) {

    const fileData = await req.arrayBuffer();

    if (!fileData || fileData.byteLength === 0) {
        return NextResponse.json(
            { status: "failure", data: { message: 'Invalid file.', code: "INVALID_FILE" } },
            { status: 400 }
        );
    }

    try {
        const bucketName = process.env.STRATUS_BUCKET_NAME!;
        const tableId = process.env.FILE_META_TABLE_ID!;
        const objectTtl = process.env.UNAUTH_OBJECT_TTL || 60 * 60 * 24;

        const headers = Object.fromEntries(req.headers.entries());
        const fileName = req.headers.get('x-file-name') || `file-${Date.now()}.zip`;
        const keyPrefix = uuid();
        const objectKey = `${keyPrefix}/${fileName}`;


        const objectOptions = { ttl: objectTtl as string };

        const app = catalyst.initialize({ headers });
        const fileDetails = await app.datastore().table(tableId).insertRow({ ID: keyPrefix, FILE_NAME: fileName, IS_UPLOADED: true });
        await app.stratus().bucket(bucketName).putObject(objectKey, Buffer.from(fileData), objectOptions);
        const responseData = { key: keyPrefix, file_name: fileName, ttl: objectTtl, uploaded_at: fileDetails?.CREATEDTIME };

        return new Response(JSON.stringify({
            status: "success",
            data: responseData,
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            status: "failure",
            data: {
                message: "unable to upload file",
                code: "UPLOAD_FAILED"
            }
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }


}

export { POST };