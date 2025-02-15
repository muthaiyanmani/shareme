"use client"

import UploadFile from "@/components/upload-file";
import { AnimatedBackground } from "@/components/animated-background";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      <AnimatedBackground type={"space"}>
        <div className="md:max-w-7xl max-w-sm mx-auto flex flex-col">
          <Header />
          <div className="flex items-center flex-wrap justify-between py-10 lg:py-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left p-2">
              <div className="text-xl md:text-3xl lg:text-5xl space-y-3 font-bold">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-800 "> Drop your files</h1>
                <h1> Share it in lightning fast</h1>
              </div>
              <br />
              <h4 className=" text-gray-400">Store and share of any files of any size, with an instant access whenever you need it.</h4>
              <br /> <br />
              <Link href={"/auth/signup"}>
                <Button variant={"outline"} className="font-semibold px-8 py-5 text-gray-200">Sign Up</Button>
              </Link>
            </div>
            <div className="flex-1 flex p-2">
              <UploadFile />
            </div>
          </div>
          <br />
          <br />
          <Footer />
        </div>
      </AnimatedBackground>
    </>
  );
}
