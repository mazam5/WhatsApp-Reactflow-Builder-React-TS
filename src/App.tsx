import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import {
  MessageCircleMore,
  Paperclip,
  Save,
  Scissors,
  Split,
  Timer,
} from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <div
          id="topbar"
          className="flex items-center justify-end border bg-white/5 p-2"
        >
          <Button variant="outline" className="mr-2">
            <Save /> Save Changes
          </Button>
          <ModeToggle />
        </div>
        <div id="main" className="flex">
          <div className="h-screen w-4/5">
            <ReactFlow
              id="reactflow"
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              // onConnect={(params) => addEdge(params, [])}
              // fitView
              // attributionPosition="top-right"
            >
              {/* <Controls /> */}
              {/* <MiniMap /> */}
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
          <div id="sidebar" className="border-l p-2">
            <div className="flex flex-col justify-between gap-6">
              <div id="actions">
                <p className="text-bold my-2 text-xl uppercase">Actions</p>
                <div className="grid grid-cols-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex flex-col hover:cursor-pointer"
                  >
                    <MessageCircleMore />
                    <p className="">Message</p>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex flex-col hover:cursor-pointer"
                  >
                    <Paperclip />
                    <p className="">Attachment</p>
                  </Button>
                </div>
              </div>
              <div id="control-flow" className="border-t">
                <p className="text-bold my-2 text-xl uppercase">Control Flow</p>
                <div className="grid grid-cols-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex flex-col hover:cursor-not-allowed"
                  >
                    <Scissors />
                    <p className="">Split</p>
                  </Button>
                </div>
              </div>
              <div id="conditions" className="border-t">
                <p className="text-bold my-2 text-xl uppercase">Conditions</p>
                <div className="grid grid-cols-2 gap-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex flex-col hover:cursor-not-allowed"
                  >
                    <Split />
                    <p>Conditonal Split</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
