
import React, { useState, useRef } from "react";
import { Settings, Minimize, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Greeting from "@/components/Greeting";
import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import ToolBar from "@/components/ToolBar";

interface MessageType {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (text: string, options: { useDeepSearch?: boolean, useThink?: boolean } = {}) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: MessageType = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // In a real app, you would call your API here
    // For demo, we'll simulate a response after a delay
    setTimeout(() => {
      const assistantMessage: MessageType = { 
        role: "assistant", 
        content: `This is a simulated response to: "${text}". In a real implementation, this would come from your RTL core module using LangGraph.` 
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 py-8">
        {messages.length === 0 ? (
          <Greeting onSubmit={handleSubmit} />
        ) : (
          <div className="flex-1 overflow-auto mb-6">
            {messages.map((message, index) => (
              <Message 
                key={index} 
                role={message.role} 
                content={message.content} 
              />
            ))}
            {isLoading && (
              <Message 
                role="assistant" 
                content="..." 
                isLoading={true} 
              />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <ChatInput 
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          disabled={isLoading}
        />
        
        <ToolBar />
      </main>
    </div>
  );
};

export default Index;
