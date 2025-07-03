import { Button } from "@/components/ui/button";
import { useApp } from "@/useApp";
import {
  ArrowLeft,
  Check,
  MessageCircleMore,
  Scissors,
  Split,
} from "lucide-react";

const SidebarNodesPanel = ({
  setNodeData,
  showSettings,
  addNode,
  nodeData,
  showSettingsForAddNode,
}: ReturnType<typeof useApp>) => {
  return (
    <div id="sidebar" className="w-1/5 border-l">
      {!showSettings ? (
        <div className="flex flex-col justify-between gap-6 p-2">
          <div id="actions">
            <p className="text-bold my-2 text-xl uppercase">Actions</p>
            <div className="grid grid-cols-2">
              <Button
                size="lg"
                variant="outline"
                className="flex flex-col hover:cursor-pointer"
                onClick={() => showSettingsForAddNode()}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData(
                    "application/node-type",
                    "messageNode",
                  );
                }}
              >
                <MessageCircleMore />
                <p className="">Message</p>
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
      ) : (
        <div className="w-full border">
          <div className="flex items-center justify-between">
            <Button
              variant="link"
              className="w-10 p-4 hover:border"
              onClick={() => showSettingsForAddNode()}
            >
              <ArrowLeft />
            </Button>
            <p></p>
            <div></div>
          </div>
          <div className="border p-3">
            <div className="flex justify-between">
              <p className="capitalize">Message</p>
              {nodeData !== "" ? (
                <Button
                  className="w-10 hover:cursor-pointer"
                  variant="link"
                  onClick={() => setNodeData("")}
                >
                  clear
                </Button>
              ) : null}
            </div>
            <textarea
              className="my-2 w-full rounded-2xl border p-2"
              placeholder="Type your message here..."
              autoFocus
              required
              value={nodeData}
              onChange={(e) => setNodeData(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                disabled={nodeData.trim() === ""}
                className="w-10 hover:cursor-pointer"
                onClick={() =>
                  nodeData.trim() !== "" && addNode(nodeData, "messageNode")
                }
              >
                <Check />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SidebarNodesPanel;
