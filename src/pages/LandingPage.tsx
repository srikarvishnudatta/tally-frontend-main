import Hero from "../features/landingpage/Hero"
import Navbar from "../features/landingpage/Navbar"

function LandingPage() {
  return (
    <main className="grid-background">
      <section className="content-size">
        <Navbar />
        <Hero />
      </section>
    </main>
  )
}
export default LandingPage;
