import { headers } from "next/headers";
import catalyst from "zcatalyst-sdk-node";

export default async function FilesPage() {
    const nextHeaders = await headers();
    const reqHeaders = Object.fromEntries(nextHeaders.entries());
    const fileMetaTableId = process.env.FILE_META_TABLE_ID!;

    const app = catalyst.initialize({ headers: reqHeaders });
    const files = await app.datastore().table(fileMetaTableId).getPagedRows();
    console.log(files);
    return <h1>Files</h1>
}