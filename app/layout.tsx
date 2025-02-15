import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "DropIt",
  description: "A simple file hosting and sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsSecretKey = process.env.NEXT_PUBLIC_ANALYTICS_ID || "";
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased relative flex flex-col min-h-screen`}
      >
        <Script defer src="https://cloud.umami.is/script.js" data-website-id={analyticsSecretKey}></Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="flex-grow">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
