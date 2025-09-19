import logo from "@/assets/apple-icon.svg"
export default function AppleButton(){
    return <button className="button-secondary justify-center font-bold gap-1 w-full text-white" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/>
        Apple
    </button>
}