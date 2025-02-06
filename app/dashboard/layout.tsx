import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProvider } from "@/context/user";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import catalyst from "zcatalyst-sdk-node";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());

    const app = catalyst.initialize({ headers: reqHeaders });
    const user = await app.userManagement().getCurrentUser();

    if (!user) {
        redirect(`/auth/signin?redirect=/dashboard`);
    }

    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                                DropIt
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Dashboard</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <UserProvider app={user}>{children}</UserProvider>
            </div>
        </SidebarInset>
    </SidebarProvider>
}