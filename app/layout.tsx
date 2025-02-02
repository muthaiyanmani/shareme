import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "ShareMe",
  description: "A simple file hosting and sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased relative min-h-screen bg-[url('/background.svg')] bg-cover bg-no-repeat bg-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
         <div className="md:max-w-7xl max-w-sm mx-auto flex flex-col">
         <Header />
         <main className="flex-grow w-full">{children}</main>
        
         </div>
         <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
