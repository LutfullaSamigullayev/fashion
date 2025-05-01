import { Actions, Logo, Menu } from "./components"


export const Header = () => {
    return (
        <div className="bg-white text-black">
            <div className="container_ flex justify-between py-6">
                <div className="flex gap-x-4">
                <Logo />
                <Menu />

                </div>
                <Actions />
            </div>
        </div>
    )
}