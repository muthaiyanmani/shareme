'use server'
import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";

export async function createUser(prevState: unknown, formData: FormData) {

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;

    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());
    const senderMail = process.env.AUTH_SENDER_EMAIL;
    const clientPortalOrgId = process.env.CLIENT_PORTAL_ORG_ID!;

    const signupConfig = {
        platform_type: 'web', template_details: {
            'senders_mail': senderMail,
            'subject': 'Welcome to %APP_NAME% ',
            'message': '<p>Hello ,</p> <p>Follow this link to join in %APP_NAME% .</p> <p><a href=\'%LINK%\'>%LINK%</a></p> <p>If you didn’t ask to join the application, you can ignore this email.</p> <p>Thanks,</p> <p>Your %APP_NAME% team</p>'
        }
    };

    const userConfig = {
        first_name: firstName,
        last_name: lastName || "",
        email_id: email,
        org_id: clientPortalOrgId
    }

    const app = catalyst.initialize({ headers: reqHeaders });
    await app.userManagement().addUserToOrg(signupConfig, userConfig);

    return { ...(prevState as Record<string, unknown>), loading: false }
}