import logo from "@/assets/google-icon.svg"
export default function GoogleButton(){
    return <button className="btn btn-secondary flex w-full text-white" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/>
        Google
    </button>
}