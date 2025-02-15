import FileNotFound from "@/components/file-not-found";
import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";
import { FileIcon, defaultStyles } from "react-file-icon";
import { formatFileSize } from "@/lib/format-size";
import { Download } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function GetFilePage({
    params
}: {
    params: Promise<{ fileId: string }>
}) {

    const fileId = (await params).fileId;
    const bucketName = process.env.STRATUS_BUCKET_NAME!;

    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());
    const app = catalyst.initialize({ headers: reqHeaders }, { scope: "admin" });

    try {
        const fileResp = await app.zcql().executeZCQLQuery(`SELECT * FROM Files WHERE ID='${fileId}'`);

        if (fileResp.length === 0) {
            return <FileNotFound />
        }

        const fileDetails = fileResp[0]?.Files;
        const objectKey = `${fileDetails?.ID}/${fileDetails?.FILE_NAME}`;

        const stratusBucket = app.stratus().bucket(bucketName);
        const objectMeta = await stratusBucket.object(objectKey).getDetails();
        const signatureUrl: Record<string, string> = await stratusBucket.generatePreSignedUrl(`${objectKey}`, "GET", { expiryIn: `${60 * 60 * 5}` });
        const downloadUrl = signatureUrl?.signature;
        const fileExtension = objectKey.split('.').pop() || 'txt';

        return <AnimatedBackground type={"space"}>
            <div className="md:max-w-7xl max-w-sm mx-auto flex flex-col">
                <Header />
                <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-slate-200">
                    <div className="w-12 h-12 md:w-16 md:h-16">
                        <FileIcon extension={fileExtension} {...defaultStyles[fileExtension as keyof typeof defaultStyles]} />
                    </div>
                    <br />
                    <p className="my-2 md:my-4"> {fileDetails?.FILE_NAME}</p>

                    <p className="text-xs text-gray-400">{formatFileSize(objectMeta.size)}</p>
                    <br />
                    <a href={`${downloadUrl}`} download className="text-yellow-500 hover:text-yellow-600 flex item gap-2"> <Download /> Download</a>
                </div>
                <Footer/>
            </div>
        </AnimatedBackground>
    } catch (e) {
        console.error(e);
        return <FileNotFound />
    }
}