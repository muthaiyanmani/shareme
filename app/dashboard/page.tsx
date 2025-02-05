import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";
import { redirect } from 'next/navigation'

export default async function DashboardHome() {
    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());

    const app = catalyst.initialize({ headers: reqHeaders });
    const user = await app.userManagement().getCurrentUser();

    if (!user) {
        redirect(`/auth/signin?redirect=/dashboard`);
        return;
    }

    return <p>Hello World</p>
}