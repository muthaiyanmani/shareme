import {  Share2, Star } from "lucide-react";
import Link from "next/link";


export default function Header() {
    return <div className="flex justify-between items-center py-4 text-slate-200">
        <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md ">
                <Share2 className="size-5" />
            </div>
            <h2 className="font-bold  md:text-lg">ShareMe</h2>
        </Link>

        <a href="https://github.com/muthaiyanmani/shareme" target="_blank" className="hidden md:flex items-center gap-2">Github <Star className="w-4 h-4"/></a>
    </div>
}