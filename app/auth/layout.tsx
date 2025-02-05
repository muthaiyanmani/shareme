"use client";

import Header from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <div className="md:max-w-7xl max-w-sm mx-auto">
      <Header />
      <br />
      <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
        {children}
      </div>
    </div>
  </>
}