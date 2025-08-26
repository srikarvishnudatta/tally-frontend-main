import { createContext } from "react";

const SidebarContext = createContext<{expanded:boolean}>({
    expanded: true
});
export default SidebarContext