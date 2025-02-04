import { NextRequest } from "next/server";
import catalyst from "zcatalyst-sdk-node";
import { v4 as uuid } from "uuid";

async function POST(req: NextRequest) {
    const fileName = req.nextUrl.searchParams?.get('file');

    if (!fileName) {
        return new Response(JSON.stringify({
            status: "failure",
            data:{message: 'Invalid input value', code: "INVALID_INPUT" }
        }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const bucketName = process.env.STRATUS_BUCKET_NAME!;
        const tableId = process.env.FILE_META_TABLE_ID!;
        const MAX_REQ_PER_MIN = 1;
    
        const headers = Object.fromEntries(req.headers.entries());
        const ip = req.headers.get('x-forwarded-for')!;
        const keyPrefix = uuid();
        const objectKey =`${keyPrefix}/${fileName}`;
    
        const app = catalyst.initialize({ headers }, {scope:"admin"});

        // Since sdk is not supported in the middleware, we are applying the rate limiting logic here
        const cache =  app.cache().segment('4939000000055710');
        const count = await cache.getValue(ip);
        const lastAccessedTime = parseInt(count);

        // Catalyst cache is not supported ttl in minutes, so we are storing the last accessed time in milliseconds
        const isReqReached = lastAccessedTime ? (Date.now() - lastAccessedTime) < MAX_REQ_PER_MIN * 60 * 1000 : false;
        if(isReqReached) {
            return new Response(JSON.stringify({
                status: "failure",
                data:{ message: "This ip has reached the rate limit", code: "RATE_LIMIT_EXCEEDED" }
            }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }else{
            console.log("putting the value in cache");
            await cache.put(ip,`${Date.now()}`);
        }

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
            data:{message: "unable to get the signed url", code:"SIGNED_URL_FAILED"}
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export { POST };