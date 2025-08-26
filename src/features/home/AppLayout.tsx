import useMediaQuery from "@/hooks/useMediaQuery"
import { Outlet } from "react-router-dom"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"


function AppLayout() {
  const isMobile =  useMediaQuery()
  return (
    <main className={`flex ${isMobile && "flex-col"} h-screen`}>
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        <section className="flex-1 p-3">
            <Outlet />
        </section>
    </main>
  )
}

export default AppLayout