import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";

export default async function GetFilePage({
    params,...props
}: {
    params: Promise<{ fileId: string }>
}) {

    const fileId = (await params).fileId;
    const bucketName = process.env.STRATUS_BUCKET_NAME!;

    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());
    const app = catalyst.initialize({ headers:reqHeaders });

    try{
        const fileResp = await app.zcql().executeZCQLQuery(`SELECT * FROM Files WHERE ID='${fileId}'`);
        
        if(fileResp.length === 0){
            return <div>File not found</div>
        }
        
        const fileDetails = fileResp[0]?.Files;
        const objectKey = `${fileDetails?.ID}/${fileDetails?.FILE_NAME}`;
      
        const objectMeta = await app.stratus().bucket(bucketName).object(objectKey).getDetails();
        console.log(objectMeta)

        return <div>


        <h1>File Details</h1>

        <p>Name: {fileDetails?.FILE_NAME}</p>
        <p>Size: {objectMeta.size}</p>

        <a href={`${objectMeta.object_url}?responseContentDisposition=attachment;filename="${fileDetails?.FILE_NAME}"`} download style={{color:"blue"}}>Download</a>
    </div>
    }catch(e){

    }
}