import Image from "next/image";

export const PromotionModal = () => {
  return (
    <div className="fixed z-50 w-full h-full flex items-center justify-center backdrop-blur-md">
      <div className="relative w-[320px] md:w-[640px] h-[400px] grid grid-cols-1 md:grid-cols-2 text-black">
        <button className="absolute right-0 py-2 px-4">X</button>
        <div className="hidden md:block"><Image src="/collection/bottom_1.jpg" alt="promotion" width={350} height={400} className="w-full h-full bg-no-repeat object-center object-cover select-none"/></div>
        <div className="w-full bg-white text-center p-8 flex flex-col items-center justify-center gap-y-4">
            <p>Enter your email to unlock</p>
            <h3 className="text-2xl font-bold ">15% off your first order</h3>
            <p>Plus, get insider access to promotions, launches, events and more.</p>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full py-3 px-4 border border-[#D3D4D5]"
                />
              <button className="w-fit py-3 px-5 bg-black text-white">
                Unlock Access
              </button>
        </div>
      </div>
    </div>
  );
};
