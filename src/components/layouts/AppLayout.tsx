import { Outlet } from "react-router-dom";
import SidebarNew from "@/features/home/SidebarNew";

function AppLayout() {
  return (
    <main className={`h-screen`}>
      <SidebarNew />
      <section className="flex-1 p-3">
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
