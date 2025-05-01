import { menuItems } from "@/data"
import Link from "next/link"

export const Menu = () => {
    
    return (
        <div>
            <ul className="flex gap-x-4 tex text-black">
                {menuItems.map(item => (
                    <li key={item.id}><Link href={item.link} className="">{item.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}