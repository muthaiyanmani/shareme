import { Unlink } from "lucide-react";
import Link from "next/link";

export default function FileNotFound() {
    return <div className="text-white flex h-[400px] md:h-[700px] justify-center items-center flex-col space-y-4">

        <div className="flex items-center space-x-2">
            <Unlink className="w-8 h-8" />
            <p>The link may be broken </p>
        </div>

<br />

        <h2>Upload and share your file for free</h2>

        <Link href="/" className="bg-white text-blue-950 p-2 rounded-xl text-sm ring-2 px-4">Start Now </Link>
    </div>
}