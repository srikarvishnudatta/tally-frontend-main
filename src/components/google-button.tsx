import logo from "@/assets/google-icon.svg"
import { Button } from "./ui/button"
export default function GoogleButton(){
    return <Button  variant="secondary" className="flex w-full" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/>
        Google
    </Button>
}