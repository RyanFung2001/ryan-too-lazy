
import React from "react";
import { cn } from "@/lib/utils";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

const Message = ({ role, content, isLoading = false }: MessageProps) => {
  const isUser = role === "user";

  return (
    <div className={cn(
      "mb-6",
      isUser ? "flex flex-row-reverse" : "flex"
    )}>
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser 
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-6">
            <div className="dot-flashing"></div>
          </div>
        ) : (
          <div className="prose prose-sm">
            {content.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
