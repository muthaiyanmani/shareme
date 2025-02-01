import UploadFile from "@/components/upload-file";
import { LoginForm } from "@/components/login-form";
import { ModeToggle } from "@/components/mode-toggle";
import { GalleryVerticalEnd, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-4 md:p-6 ">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Share2 className="size-4" />
              </div>
              <h2 className="font-bold">ShareMe</h2>
            </Link>
          </div>
          <div className="relative  md:h-[600px] lg:h-[720px]  block">
            <UploadFile />
          </div>
        </div>

        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>

      </div>

      <footer>
        <p>Built with love by</p>
      </footer>
    </>
  );
}
