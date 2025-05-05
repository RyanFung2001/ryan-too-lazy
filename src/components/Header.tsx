
import React from "react";
import { Settings, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-medium text-gray-700">
            <span className="inline-flex items-center">
              <svg 
                viewBox="0 0 24 24" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Lazy Voice Scribe
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Minimize className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
