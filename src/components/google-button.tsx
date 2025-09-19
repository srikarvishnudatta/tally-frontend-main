import logo from "@/assets/google-icon.svg"
export default function GoogleButton(){
    return <button className="button-secondary justify-center items-center font-bold gap-2 w-full text-white" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/>
        Google
    </button>
}