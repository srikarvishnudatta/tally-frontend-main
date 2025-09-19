import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

function Hero(){
    return (
        <section className="px-2 md:px-0 flex flex-col gap-4 h-screen justify-center items-center">
        <h1 className="animate-slide-in font-bold text-5xl md:text-7xl">Introducing</h1>
        <h1 className="animate-slide-in-1 font-bold text-5xl md:text-7xl tally">Tally</h1>
        <p className="text-foreground text-center text-sm md:text-md font-light text-blue-700">The easiest way to split bills with friends and family. Keep track
            of shared expenses and balances.</p>
        <button className="button">
            <Link to={"/auth/signup"}>
            Get Started Today 
            </Link>
            <ChevronRight />
        </button>
        </section>
    )
}
export default Hero