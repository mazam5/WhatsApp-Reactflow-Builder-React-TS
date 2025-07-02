import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handle, Position } from "@xyflow/react";
import { MessageCircleMore } from "lucide-react";

const MessageNode = ({ data }: { data: { message: string } }) => {
  return (
    <Card className="relative h-[50px] w-[180px] rounded-2xl border border-black p-0">
      <CardHeader className="w-full rounded-t-2xl bg-green-200 px-2">
        <div className="flex w-full items-center justify-between pt-1">
          <div className="flex items-center gap-1">
            <MessageCircleMore size={12} />
            <CardTitle className="text-xs">Send Message</CardTitle>
          </div>
          <img
            src="/images/whatsapp-logo.png"
            alt="WhatsApp Logo"
            className="h-3 w-3"
          />
        </div>
      </CardHeader>
      <CardContent className="absolute top-[60%] left-[5%] p-0">
        <p className="p-0 text-xs">{data.message}</p>
      </CardContent>
      <Handle
        type="source"
        position={Position.Left}
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </Card>
  );
};
export default MessageNode;
