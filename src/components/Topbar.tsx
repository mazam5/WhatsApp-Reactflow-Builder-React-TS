import { Save } from "lucide-react";
import { ModeToggle } from "./theme/mode-toggle";
import { Button } from "./ui/button";

const Topbar = () => {
  return (
    <div
      id="topbar"
      className="flex items-center justify-end border bg-white/5 p-2"
    >
      <Button variant="outline" className="mr-2">
        <Save /> Save Changes
      </Button>
      <ModeToggle />
    </div>
  );
};
export default Topbar;
