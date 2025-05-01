export const Banner = () => {
    return (
        <div className="h-[712px] bg-[url(/banner/banner.jpg)] bg-cover bg-center">
            <div className="container_ py-16 px-8 h-full flex flex-col justify-end gap-y-5">
                <div  className="text-2xl">
                <p>Elevate Your Style</p>
                <p>Timeless Fashion, Sustainable</p>
                <p>Choices</p>
                </div>
                <button className="w-fit py-3 px-5 bg-white text-black">Shop Now</button>
                </div>
        </div>
    )
}