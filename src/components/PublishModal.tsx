
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Save } from "lucide-react";
import { toast } from "sonner";

interface PublishModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPublish: (flowName: string) => void;
}

const PublishModal = ({ open, onOpenChange, onPublish }: PublishModalProps) => {
  const [flowName, setFlowName] = useState("");

  const handleSave = () => {
    if (!flowName.trim()) {
      toast.error("Please enter a flow name");
      return;
    }

    onPublish(flowName);
    setFlowName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border border-gray-100 shadow-lg rounded-lg w-full max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            <FileText className="h-5 w-5 text-[#9E77ED]" />
            Publish Workflow
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <label htmlFor="flow-name" className="block text-sm font-medium text-gray-700 mb-2">
            Flow Name
          </label>
          <Input
            id="flow-name"
            value={flowName}
            onChange={(e) => setFlowName(e.target.value)}
            placeholder="Enter flow name..."
            className="border-gray-200 focus:border-[#9E77ED] focus:ring-[#9E77ED]"
            autoFocus
          />
        </div>

        <DialogFooter className="flex gap-3 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFlowName("");
              onOpenChange(false);
            }}
            className="bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            className="bg-[#9E77ED] hover:bg-[#8B5CF6] text-white border-none"
          >
            <Save className="h-4 w-4 mr-2" />
            Save & Publish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PublishModal;
