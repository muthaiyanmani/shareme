import UploadFile from "@/components/upload-file";
import { LoginForm } from "@/components/login-form";
import Script from "next/script";


export default function HomePage() {
  return (
    <>
     <Script src="https://static.zohocdn.com/catalyst/sdk/js/4.4.0/catalystWebSDK.js" />
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
