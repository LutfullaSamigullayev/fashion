import { FooterMenuType } from "@/types";
import Link from "next/link";

export const FooterMenu = ({title, data}: FooterMenuType) => {
  return (
    <div className="min-w-48 flex flex-col gap-y-5">
      <h3 className="text-[#565656]">{title}</h3>
      <ul>
        {data.map(item => (
            <li key={item.id} className="pb-1">
                <Link href={item.link}>{item.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};
