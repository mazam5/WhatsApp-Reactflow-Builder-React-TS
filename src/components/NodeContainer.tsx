import { Handle, Position } from "@xyflow/react"; // Handles for connecting nodes
import { X } from "lucide-react"; // Close/Delete icon
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { ReactNode } from "react";
import React from "react";

// Props for the NodeContainer component
const NodeContainer = ({
  data, // Data for the current node
  color, // Color identifier for styling
  handleDeleteNode, // Function to delete this node
}: {
  icon: ReactNode;
  data: string;
  color: string;
  handleDeleteNode: () => void;
}) => {
  const [hover, setHover] = React.useState(false); // Track hover state to show delete button

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-52 gap-0 rounded-lg border-2 bg-white p-1 shadow-md`}
    >
      {/* Output and input handles for node connection */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
      />

      {/* Card Header - includes optional delete button and icon */}
      <CardHeader className="flex flex-col items-center justify-center">
        {/* Show delete button only when hovered */}
        {hover && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDeleteNode}
            className="absolute top-2 right-2 bg-red-500 p-0 text-white hover:bg-red-600 hover:text-white"
          >
            <X size={14} />
          </Button>
        )}

        {/* Icon display with background based on color prop */}
        <div className={`bg-${color}`}>{}</div>

        {/* Node title with text color based on color prop */}
        <CardTitle
          className={`text-center text-sm font-semibold text-${color}`}
        >
          {data}
        </CardTitle>
      </CardHeader>

      {/* Card content displays relevant data based on node type */}
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-1">
          {/* Display lead source email */}

          {/* Display wait delay information */}
          {/* {label === "Wait Delay" && <p className="text-xs text-gray-500"></p>} */}
        </div>
      </CardContent>
    </Card>
  );
};

export default NodeContainer;
