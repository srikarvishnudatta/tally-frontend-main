import { Outlet } from "react-router-dom";
import Navbar from "@/features/dashboard/Navbar";

function AppLayout() {
  return (
    <main className={`h-screen content-size px-4`}>
      <Navbar />
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
