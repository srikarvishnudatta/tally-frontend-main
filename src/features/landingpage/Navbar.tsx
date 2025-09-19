import {Link} from "react-router-dom"
import LogoHeader from "@/components/logo-header"
function Navbar(){
    
    return <header className="fixed rounded-sm px-1 py-2 top-0 left-0 w-full ">
        <nav className="flex justify-between mx-2 align-middle p-2 glass-effect">
        <LogoHeader />
        <div className="flex items-center gap-2">
            <button className="button">
                <Link to={"/auth/login"}>Login</Link>
            </button>
            <button className="button-secondary">
                <Link to={"/auth/signup"}>Signup</Link>
            </button>
        </div>
        </nav>
    </header>
}
export default Navbar