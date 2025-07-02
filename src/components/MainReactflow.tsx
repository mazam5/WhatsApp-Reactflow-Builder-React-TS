import { useApp } from "@/useApp";
import { Background, BackgroundVariant, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const MainReactflow = ({
  nodes,
  edges,
  onConnect,
  onNodesChange,
  onEdgesChange,
  nodeTypes,
}: ReturnType<typeof useApp>) => {
  return (
    <div className="h-[90vh] w-4/5">
      <ReactFlow
        colorMode={"light"}
        className="border"
        id="reactflow"
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodeOrigin={[0.5, 0]}
        // panOnScroll
        // zoomOnScroll={false}
        // panOnDrag={false}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
export default MainReactflow;
