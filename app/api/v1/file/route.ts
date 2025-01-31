import { File } from "buffer";
import { NextRequest, NextResponse } from "next/server";
import catalyst from "zcatalyst-sdk-node";
import mimeType from "mime-types";
import { v4 as uuid } from "uuid";


async function GET(req: NextRequest) {

}

async function POST(req: NextRequest) {

    const fileData = await req.arrayBuffer();

    if (!fileData || fileData.byteLength === 0) {
        return NextResponse.json(
            { status: "failure", message: 'Invalid file.' },
            { status: 400 }
        );
    }

    try {
        const bucketName = process.env.STRATUS_BUCKET_NAME!;
        const objectTtl = process.env.UNAUTH_OBJECT_TTL || 60 * 60 * 24;

        const headers = Object.fromEntries(req.headers.entries());
        const fileName = req.headers.get('x-file-name') || `file-${Date.now()}.zip`;
        const filenameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
        const sanitizedFilename = filenameWithoutExtension.replace(/\./g, '_');
        const fileExtension = fileName.split('.').pop() as string;
        const objectKey = `${uuid()}.${fileExtension}`;
        const objectOptions = { ttl: objectTtl as string, metaData: { name: sanitizedFilename } };

        console.log(objectOptions)
        const app = catalyst.initialize({ headers });
        await app.stratus().bucket(bucketName).putObject(objectKey, Buffer.from(fileData), objectOptions);

        return new Response(JSON.stringify({
            status: "success",
            data: "file uploaded successfully",
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            status: "failure",
            message: "unable to upload file",
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }


}

export { GET, POST };