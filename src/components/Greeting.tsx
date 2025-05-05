
import React from "react";
import { Button } from "@/components/ui/button";

interface GreetingProps {
  onSubmit: (text: string) => void;
}

const Greeting = ({ onSubmit }: GreetingProps) => {
  // Get current time to determine greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  
  // Get user name - in a real app, this would come from authentication
  const userName = "User";
  
  const examplePrompts = [
    "Transcribe this meeting for me",
    "Summarize what we just discussed",
    "Extract action items from this call",
    "Translate this conversation to Spanish"
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center pb-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
        {getGreeting()}, {userName}.
      </h1>
      <p className="text-xl text-gray-500 mb-10 text-center">
        Speak or type to transcribe with smart prompts
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        {examplePrompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-left h-auto py-3 justify-start"
            onClick={() => onSubmit(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Greeting;
