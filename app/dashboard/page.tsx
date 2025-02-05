import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";
import { redirect } from 'next/navigation'
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default async function DashboardHome() {
  

    return <h1>Dashboard</h1>
}