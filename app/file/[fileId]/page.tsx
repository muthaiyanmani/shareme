import FileNotFound from "@/components/file-not-found";
import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";
import { FileIcon, defaultStyles, DefaultExtensionType } from "react-file-icon";
import { formatFileSize } from "@/lib/format-size";
import { Download } from "lucide-react";

export default async function GetFilePage({
    params, ...props
}: {
    params: Promise<{ fileId: string }>
}) {

    const fileId = (await params).fileId;
    const bucketName = process.env.STRATUS_BUCKET_NAME!;

    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());
    const app = catalyst.initialize({ headers: reqHeaders });

    try {
        const fileResp = await app.zcql().executeZCQLQuery(`SELECT * FROM Files WHERE ID='${fileId}'`);

        if (fileResp.length === 0) {
            return <FileNotFound />
        }

        const fileDetails = fileResp[0]?.Files;
        const objectKey = `${fileDetails?.ID}/${fileDetails?.FILE_NAME}`;

        const objectMeta = await app.stratus().bucket(bucketName).object(objectKey).getDetails();
        const fileExtension = objectKey.split('.').pop() || 'txt';
        console.log(objectMeta)

        return <div  className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-slate-200">
            <div className="w-12 h-12 md:w-16 md:h-16">
                <FileIcon extension={fileExtension} {...defaultStyles[fileExtension as keyof typeof defaultStyles]} />
            </div>
            <br />
            <p className="my-2 md:my-4"> {fileDetails?.FILE_NAME}</p>

            <p className="text-xs text-gray-400">{formatFileSize(objectMeta.size)}</p>
            <br />
            <a href={`${objectMeta.object_url}?responseContentDisposition=attachment;filename="${fileDetails?.FILE_NAME}"`} download className="text-yellow-500 flex item gap-2"> <Download /> Download</a>
        </div>
    } catch (e) {

    }
}