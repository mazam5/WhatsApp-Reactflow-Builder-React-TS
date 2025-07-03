import MainReactflow from "@/components/MainReactflow";
import SidebarNodesPanel from "@/components/SidebarNodesPanel";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Topbar from "@/components/Topbar";
import { Toaster } from "sonner";

import { useApp } from "./useApp";

function App() {
  const appState = useApp();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Topbar {...appState} />
      <div id="main" className="flex h-full w-full">
        <MainReactflow {...appState} />
        <SidebarNodesPanel {...appState} />
        <Toaster richColors position="top-center" />
      </div>
    </ThemeProvider>
  );
}

export default App;
