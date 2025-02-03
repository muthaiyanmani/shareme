import { NextRequest, NextResponse } from "next/server";
import catalyst from "zcatalyst-sdk-node";

export const config = {
    matcher: ["/api/v1/file/signed-url"]
};

export async function middleware(req: NextRequest) {

    /* const MAX_REQ_PER_MIN = 1;
    const ip = req.headers.get('x-forwarded-for')!;
    const headers = Object.fromEntries(req.headers.entries());

    const app = catalyst.initialize({ headers }, {scope:"admin"});
    const cache =  app.cache().segment('RateLimiting');

    const count = await cache.get(ip);
    console.log(count);
    if(count && count.value >= MAX_REQ_PER_MIN) {
        return new Response(JSON.stringify({
            status: "failure",
            message: "Rate Limit Exceeded",
        }), { status: 429, headers: { 'Content-Type': 'application/json' } });
    }else{
        await cache.put(ip,++count,60);
    } */
   
    return NextResponse.next();
}
    