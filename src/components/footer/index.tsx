import { footerItems } from "@/data";
import { FooterMenu } from "./components";

export const Footer = () => {
  return (
    <div className="bg-[#F5F4F4] text-black">
      <div className="container_ ">
        <div className="flex flex-col lg:flex-row justify-between py-20 gap-y-12">
          <div className="md:w-[576px] flex flex-col md:flex-row gap-x-6 ">
            {footerItems.map((item) => (
              <FooterMenu key={item.id} title={item.title} data={item.data} />
            ))}
          </div>
          <div className="sm:w-[490px] flex flex-col gap-y-6 lg:px-6">
            <h3 className="text-2xl">Get the latest new from us</h3>
            <div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full py-3 px-4 border border-[#D3D4D5]"
                />
                <p className="py-1">
                  Bu signing up, you agree to our{" "}
                  <a href="#" className="underline underline-offset-4">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-4">
                    Terms of Service.
                  </a>
                </p>
              </div>
              <button className="w-fit py-3 px-5 bg-black text-white">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#565656] pb-11 text-center md:text-left">&copy;CEIN</p>
      </div>
    </div>
  );
};
