import { NextRequest } from "next/server";
import catalyst from "zcatalyst-sdk-node";
import { v4 as uuid } from "uuid";

async function POST(req: NextRequest) {
    const fileName = req.nextUrl.searchParams?.get('file');

    if (!fileName) {
        return new Response(JSON.stringify({
            status: "failure",
            message: 'invalid input value',
        }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const bucketName = process.env.STRATUS_BUCKET_NAME!;
        const tableId = process.env.FILE_META_TABLE_ID!;
    
        const headers = Object.fromEntries(req.headers.entries());
        const keyPrefix = uuid();
        const objectKey =`${keyPrefix}/${fileName}`;
    
        const app = catalyst.initialize({ headers }, {scope:"admin"});
        await app.datastore().table(tableId).insertRow({ ID: keyPrefix, FILE_NAME: fileName,IS_UPLOADED:false });
        const signedUrl:Record<string, string> = await app.stratus().bucket(bucketName).generatePreSignedUrl(objectKey,"PUT",{ expiryIn: `${5*60}` });
        const responseData = {key: keyPrefix, file_name: fileName, signed_url: signedUrl?.signature};

        return new Response(JSON.stringify({
            status: "success",
            data: responseData,
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            status: "failure",
            message: "unable to get the signed url",
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
   

}

export { POST };