import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Node,
  type Edge,
  type OnConnect,
  type NodeTypes,
} from "@xyflow/react";
import React from "react";
import { toast } from "sonner";

export const useApp = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [id, setId] = React.useState(0);
  const [showSettings, setShowSettings] = React.useState(false);
  const [nodeData, setNodeData] = React.useState<string>("");
  const onConnect: OnConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  const nodeTypes: NodeTypes = {};

  const addNode = (data: string) => {
    const { newNode, newEdge } = createNodeAndEdge(id, nodes, data);
    setId((prev) => prev + 1);
    setNodes((prev) => [...prev, newNode]);
    if (newEdge) setEdges((prev) => [...prev, newEdge]);
    toast.success(`Node added successfully!`);
    setNodeData("");
    setShowSettings(false);
  };

  const showSettingsForAddNode = () => {
    setNodeData("");
    setShowSettings(!showSettings);
  };
  return {
    nodeData,
    addNode,
    onConnect,
    edges,
    nodes,
    onNodesChange,
    onEdgesChange,
    showSettingsForAddNode,

    showSettings,
    nodeTypes,
    setNodeData,
  };
};
export const createNodeAndEdge = (
  id: number,
  nodes: Node[],
  data: string,
): { newNode: Node; newEdge?: Edge } => {
  const newNodeId = `node_${id}`;
  const position = { x: 700, y: nodes.length * 50 };

  const newNode: Node = {
    id: newNodeId,
    position,
    data: { label: data },
  };

  let newEdge: Edge | undefined;
  if (nodes.length > 0) {
    const lastNode = nodes[nodes.length - 1];
    newEdge = {
      id: crypto.randomUUID(),
      source: lastNode.id,
      target: newNodeId,
      animated: true,
      style: { stroke: "#888" },
    };
  }

  return { newNode, newEdge };
};
