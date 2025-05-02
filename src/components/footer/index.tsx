import { footerItems } from "@/data";
import { FooterMenu } from "./components";

export const Footer = () => {
  return (
    <div className="bg-[#F5F4F4] text-black">
      <div className="container_ flex justify-between">
        <div className="w-[576px] flex gap-x-6 py-20">
          {footerItems.map(item => (
            <FooterMenu key={item.id} title={item.title} data={item.data} />
          ))}
         
        </div>
        <div className="w-[490px]">
          
        </div>
      </div>
    </div>
  );
};
