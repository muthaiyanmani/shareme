import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

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
        className={`${lato.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
