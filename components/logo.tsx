import { cn } from "@/lib/utils";
import { Share2 } from "lucide-react";
import Link from "next/link";

export default function BrandLogo({
    className,
}: Readonly<{
    className?: string;
}> = {}) {
    return <Link href="/" className={cn("flex items-center gap-2 font-medium ", className)}>
        <div className="flex h-6 w-6 items-center justify-center rounded-md">
            <Share2 className="h-5 w-5" />
        </div>
        <h2 className="font-bold text-base md:text-xl">DropIt</h2>
    </Link>
}