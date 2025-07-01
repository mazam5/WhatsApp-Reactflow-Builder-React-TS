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
import { MessageCircleMore, Save } from "lucide-react";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <div className="flex justify-end border bg-white/20 p-3">
          <Button variant="outline">
            <Save /> Save Changes
          </Button>
        </div>
        <div className="flex">
          <div className="h-screen w-4/5">
            <ReactFlow
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
          <div className="p-2">
            <p className="text-bold my-2 text-2xl uppercase">Nodes Panel</p>
            <Button variant="outline" size="lg" className="flex flex-col">
              <MessageCircleMore />
              <p className="">Message</p>
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
