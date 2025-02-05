"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
// import "../../../public/assets/js/catalyst-sdk.js";

// Extend the Window interface to include the catalyst property
declare global {
    interface Window {
        catalyst: unknown;
    }
}

export default function SignInPage() {

    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
    const zaid = process.env.NEXT_PUBLIC_ZAID!;
    const orgId = process.env.NEXT_PUBLIC_ORG_ID;
    const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN;

    useEffect(() => {
        (window.catalyst as any).initApp({
            project_Id: projectId,
            zaid,
            auth_domain: authDomain,
            is_appsail: "true",
            api_domain: ""
        }, {
            org_id: orgId
        });

        (window.catalyst as any).auth.signIn("signin-frame", {});
    }, [projectId, zaid, orgId, authDomain]);

    return <div className={cn("flex flex-col gap-6")}>
        <Script src="/assets/js/catalyst-sdk.js" strategy="beforeInteractive" />
        <Card className="md:w-96 w-full">
            <CardHeader>
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                    Sign to access your files and start sharing.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-80" id="signin-frame"></div>
                <div className="mt-4 text-center text-sm">
                            Create an account?{" "}
                            <Link href={"/auth/signup"} className="underline underline-offset-4 cursor-pointer ml-1">
                                Sign Up
                            </Link>
                        </div>
            </CardContent>
        </Card>

    </div>
}