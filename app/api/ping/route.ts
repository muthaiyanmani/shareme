
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import catalyst from "zcatalyst-sdk-node";
import { RefreshTokenCredential } from "zcatalyst-sdk-node/lib/utils/credential";

async function GET(req: NextRequest) {
    console.log('Request strartew234d');
//   const command = req.nextUrl?.searchParams?.get("query");
try {

    /*const projectDomain = new URL(process.env['X_ZOHO_CATALYST_CONSOLE_URL']!);
    const catalystHeaders = {
        "x-zc-admin-cred-type": "token",
        "x-zc-user-cred-token": "1001.45fd5bdd9e2ed88e187a2057e0672440.93b2045e4ccadef59868361ef82b064f",
        "x-zc-admin-cred-token": "1001.45fd5bdd9e2ed88e187a2057e0672440.93b2045e4ccadef59868361ef82b064f",
        // "x-zc-user-id": "4939000000004004",
        // "host": "shareme-60026071286.development.catalystserverless.in",
        "x-zc-project-key": "50024743074",
        "x-zc-environment": "Development",
        // "x-zc-project-secret-key": "2355a5b4a0d2d168e3754917b102531f0c0265d8d95285adb5b39082611d41ea",
        "x-zc-user-cred-type": "cookie",
        "x-zc-user-type": "user",
        "x-zc-project-domain": projectDomain.hostname,
        "x-zc-projectid": process.env['ZC_PROJECT_ID']!,
    };

    const catReq = {
        headers: {'x-zc-cookie': req.headers.get('cookie'), ...catalystHeaders }
    };
  
    const credential = new RefreshTokenCredential({
        client_id: process.env['ZC_CLIENT_ID']!,
        client_secret:process.env['ZC_CLIENT_SECRET']!,
        refresh_token: process.env['ZC_REFRESH_TOKEN']!,
    });

    const appOptions = {
        project_id: process.env['ZC_PROJECT_ID']!,
        project_key: process.env['ZC_PROJECT_KEY']!,
        environment: process.env['ZC_ENVIRONMENT']!,
        credential
    }*/

        const headers = Object.fromEntries(req.headers.entries());
  // for(let header of req.headers){
        //     console.log(header);
        // }
//    console.log(typeof req.headers);

  const app = catalyst.initialize({headers} as any);
   const user = await app.userManagement().getCurrentUser();

   console.log("user : ", user);

   // const app = catalyst.initializeApp(appOptions, 'stratus-upload-app');
   // const user = await app.userManagement().getAllUsers();
  //  console.log("user : ", user);

    return new NextResponse(JSON.stringify({message: "success" }), {
        status: 200
    });
  } catch (error: unknown) {
    console.log("error: ", error);
    return new NextResponse(JSON.stringify({message: "" }), {
        status: 500
    });
  }
 
}

export { GET };