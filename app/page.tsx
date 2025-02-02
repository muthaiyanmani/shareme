import UploadFile from "@/components/upload-file";
import { LoginForm } from "@/components/login-form";
import { ModeToggle } from "@/components/mode-toggle";
import { GalleryVerticalEnd, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      <div className="flex items-center flex-wrap justify-center py-10 lg:py-20">
        <div className="flex-1 lg:mr-40 flex p-2">
          <UploadFile />
        </div>
        <div className="hidden md:block">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
