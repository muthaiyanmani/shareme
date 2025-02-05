"use client"

import UploadFile from "@/components/upload-file";
import Script from "next/script";
import { AnimatedBackground, BackgroundType } from "@/components/animated-background";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function HomePage() {
  const [background, setBackground] = useState<BackgroundType>('space');
  return (
    <>
      <AnimatedBackground
        type={background}
        onChangeBackground={setBackground}
      >
        <div className="md:max-w-7xl max-w-sm mx-auto flex flex-col">
          <Header />
       
        <Script src="https://static.zohocdn.com/catalyst/sdk/js/4.4.0/catalystWebSDK.js" />

        <div className="flex items-center flex-wrap justify-between py-10 lg:py-16">
          <div className="w-full lg:w-1/2">
            <div className="lg:text-6xl space-y-3 font-bold">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-800 "> Drop your files</h1>
              <h1> Share it in lighting fast</h1>
            </div>
            <br />
            <h4 className="text-base text-gray-400">Store and share of any files of any size, with an instant access whenever you need it.</h4>
          </div>
          <div className="flex-1 flex p-2">
            <UploadFile />
          </div>
        </div>
        <Footer />
        </div>
      </AnimatedBackground>
    </>
  );
}
