import { ThemeProvider } from "@/components/theme/theme-provider";
import MainReactflow from "./components/MainReactflow";
import SidebarNodesPanel from "./components/SidebarNodesPanel";
import Topbar from "./components/Topbar";
import { useApp } from "./useApp";

function App() {
  const appState = useApp();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Topbar />
      <div id="main" className="flex h-full w-full">
        <MainReactflow {...appState} />
        <SidebarNodesPanel {...appState} />
      </div>
    </ThemeProvider>
  );
}

export default App;
