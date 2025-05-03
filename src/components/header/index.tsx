import { Icons } from "@/icons";
import { Actions, Logo, Menu } from "./components";

export const Header = () => {
  return (
    <div className="bg-white text-black">
      <div className="container_ grid grid-cols-3  md:flex items-center justify-between py-6">
        <div className="flex gap-x-4">
          <div className="hidden md:block">
            <Logo />
          </div>
          <Menu />
          <button className="block md:hidden">
            <Icons.burger width={24} height={24} />
          </button>
        </div>
        <div className="flex justify-center md:hidden">
          <Logo />
        </div>
        <Actions />
      </div>
    </div>
  );
};
