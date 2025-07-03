import { Save } from "lucide-react";
import { ModeToggle } from "./theme/mode-toggle";
import { Button } from "./ui/button";
import type { useApp } from "@/useApp";

const Topbar = ({ handleSaveValidate }: ReturnType<typeof useApp>) => {
  return (
    <div
      id="topbar"
      className="flex items-center justify-end border bg-white/5 p-2"
    >
      <Button variant="outline" className="mr-2" onClick={handleSaveValidate}>
        <Save /> Save Changes
      </Button>
      <ModeToggle />
    </div>
  );
};
export default Topbar;
