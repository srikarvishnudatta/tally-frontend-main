import logo from "@/assets/tally.svg"
import { cn } from "@/lib/utils"
function Logo({className}: {className?:string}){
    return (
        <img src={logo} alt="tally-logo" className={cn(className)}/>
    )
}
export default Logo