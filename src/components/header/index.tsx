import { Logo, Menu } from "./components"


export const Header = () => {
    return (
        <div className="bg-white">
            <div className="container_">
                <Logo />
                <Menu />
            </div>
        </div>
    )
}