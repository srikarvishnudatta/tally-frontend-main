import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import Logo from "@/components/logo"
function Navbar(){
    return <header className="fixed rounded-sm px-1 py-2 top-0 left-0 w-full">
        <nav className="flex justify-between mx-2 align-middle bg-white/10 backdrop-blur-md rounded-xl border border-white/25 px-2">
        <h2 className="flex items-center gap-1 font-bold text-xl">
            <Logo />
            Tally
        </h2>
        <ul className="hidden md:flex justify-between items-center gap-2">
            <li>Features</li>
            <li>Help</li>
        </ul>
        <div className="space-x-2">
            <Button asChild>
                <Link to={"/auth/login"}>
                    Login
                </Link>
            </Button>
             <Button asChild variant={"secondary"}>
                <Link to={"/auth/signup"}>
                    Signup
                </Link>
            </Button>
        </div>
         </nav>
    </header>
}
export default Navbar