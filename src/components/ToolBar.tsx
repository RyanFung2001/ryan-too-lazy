
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Save, Share, Plus, Minus } from "lucide-react";

const ToolBar = () => {
  return (
    <div className="flex justify-center py-4 mt-2">
      <div className="flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200"
        >
          <Save className="h-4 w-4 mr-1" />
          <span className="text-xs">Save</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200"
        >
          <Check className="h-4 w-4 mr-1" />
          <span className="text-xs">Copy Text</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200"
        >
          <Share className="h-4 w-4 mr-1" />
          <span className="text-xs">Share</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span className="text-xs">Feedback</span>
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
