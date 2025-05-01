import { Icons } from "@/icons"
import Link from "next/link"

export const Actions = () => {
    return(
        <div className="flex gap-x-5">
            <button><Icons.search width={20} height={20} /></button>
            <Link href="#stores">Stores</Link>
            <button><Icons.user width={20} height={20} /></button>
            <button className="flex items-center gap-x-1"><Icons.heart width={20} height={20} />0</button>
            <button className="flex items-center gap-x-1"><Icons.bag width={20} height={20} />2</button>
        </div>
    )
}