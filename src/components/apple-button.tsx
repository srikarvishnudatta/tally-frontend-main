import logo from "@/assets/apple-icon.svg"
import { Button } from "./ui/button"
export default function AppleButton(){
    return <Button variant="secondary" className="flex w-full" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/>
        Apple
    </Button>
}