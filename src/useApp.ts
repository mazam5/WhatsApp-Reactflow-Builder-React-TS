import { addEdge, useEdgesState, useNodesState } from "@xyflow/react";
import type { Node, Edge, OnConnect, NodeTypes } from "@xyflow/react";
import React from "react";
import { toast } from "sonner";
import MessageNode from "./components/MessageNode";

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
  React.useEffect(() => {
    console.log(nodes);
    console.log(edges);
  }, [nodes, edges]);

  const nodeTypes: NodeTypes = {
    messageNode: MessageNode,
  };

  const addNode = (data: string, type: string) => {
    console.log("Adding node with data:", data);
    const { newNode, newEdge } = createNodeAndEdge(id, nodes, data, type);
    console.log("New Node created:", newNode);

    setId((prev) => prev + 1);
    setNodes((prev) => [...prev, newNode]);
    if (newEdge) setEdges((prev) => [...prev, newEdge]);
    toast.success(`Node of type "${type}" added successfully!`);
    setNodeData("");
    setShowSettings(false);
  };

  const showSettingsForAddNode = () => {
    setNodeData("");
    setShowSettings(!showSettings);
  };
  const handleSaveValidate = () => {
    if (nodes.length === 0) {
      toast.warning("No nodes found in the flow.");
      return;
    }

    if (edges.length === 0) {
      toast.error("Cannot save: No edges present.");
      return;
    }

    const connectedNodeIds = new Set<string>();

    edges.forEach((edge) => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });

    const disconnectedNodes = nodes.filter(
      (node) => !connectedNodeIds.has(node.id),
    );

    if (disconnectedNodes.length > 0) {
      toast.error(
        `Disconnected nodes found: ${disconnectedNodes.map((n) => n.id).join(", ")}`,
      );
    } else {
      toast.success("All nodes are connected. Flow saved successfully!");
    }
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
    handleSaveValidate,
  };
};
export const createNodeAndEdge = (
  id: number,
  nodes: Node[],
  data: string,
  type: string,
): { newNode: Node; newEdge?: Edge } => {
  const newNodeId = `node_${id}`;
  const position = { x: 100, y: nodes.length * 50 };

  const newNode: Node = {
    id: newNodeId,
    type,
    position,
    data: { message: data },
  };

  return { newNode };
};
