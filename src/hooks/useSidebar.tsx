import SidebarContext from "@/context/SidebarContext";
import { useContext } from "react";

export default function useSidebar(){
    return useContext(SidebarContext)
}