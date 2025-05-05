
import React, { useState } from "react";
import { ArrowUp, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  onSubmit: (text: string, options: { useDeepSearch?: boolean; useThink?: boolean }) => void;
  disabled: boolean;
}

const ChatInput = ({ input, setInput, onSubmit, disabled }: ChatInputProps) => {
  const [useDeepSearch, setUseDeepSearch] = useState(false);
  const [useThink, setUseThink] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!input.trim() && !disabled) return;
    onSubmit(input, { useDeepSearch, useThink });
  };

  // Mock prompts - in a real app, these would come from your prompt library
  const prompts = [
    { id: "1", name: "General Transcription" },
    { id: "2", name: "Meeting Summary" },
    { id: "3", name: "Action Items" },
    { id: "4", name: "Technical Documentation" }
  ];

  return (
    <div className="sticky bottom-0 bg-gray-50 pb-4">
      <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm">
        <textarea
          className="min-h-[60px] w-full resize-none border-0 bg-transparent px-4 py-3 pr-12 text-base focus:outline-none focus:ring-0"
          placeholder="Type a message or press the Record button..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={disabled}
          style={{ maxHeight: "200px" }}
        />
        <div className="absolute bottom-1 right-2">
          <Button 
            size="icon" 
            className="rounded-full" 
            onClick={handleSubmit}
            disabled={disabled || !input.trim()}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 px-1">
        <div className="flex items-center space-x-2">
          <Button 
            variant={useDeepSearch ? "secondary" : "ghost"} 
            size="sm"
            className="text-xs"
            onClick={() => setUseDeepSearch(!useDeepSearch)}
          >
            <Search className="h-3 w-3 mr-1" />
            DeepSearch
          </Button>
          
          <Button 
            variant={useThink ? "secondary" : "ghost"}
            size="sm"
            className="text-xs"
            onClick={() => setUseThink(!useThink)}
          >
            <Check className="h-3 w-3 mr-1" />
            Think
          </Button>
        </div>

        <div className="flex-shrink-0">
          <Select onValueChange={(value) => setSelectedPrompt(value)}>
            <SelectTrigger className="w-[180px] h-8 text-xs">
              <SelectValue placeholder="Select Prompt" />
            </SelectTrigger>
            <SelectContent>
              {prompts.map(prompt => (
                <SelectItem key={prompt.id} value={prompt.id}>
                  {prompt.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-center mt-2">
        <Button 
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200 text-red-500 mr-2"
        >
          Record
        </Button>
        <Button 
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200 text-gray-500"
          disabled={true}
        >
          Stop
        </Button>
        <Button 
          variant="outline"
          size="sm"
          className="rounded-full bg-white hover:bg-gray-100 border-gray-200 text-gray-500 ml-2"
          onClick={() => setInput("")}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
