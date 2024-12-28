import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  type: 'bot',
  content: "Hello! I'm your medical assistant. I can help you with general health questions, but remember I'm not a substitute for professional medical advice. How can I help you today?",
  timestamp: new Date()
};

export function MedicalChatbot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        content: generateBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('emergency') || input.includes('severe pain')) {
      return "If you're experiencing a medical emergency, please call emergency services immediately (911 in the US) or visit the nearest emergency room.";
    }
    
    if (input.includes('headache')) {
      return "Common causes of headaches include stress, dehydration, or lack of sleep. Try drinking water and resting in a quiet, dark room. If the headache is severe or persistent, please consult a healthcare provider.";
    }
    
    if (input.includes('cold') || input.includes('flu')) {
      return "For cold and flu symptoms, rest well, stay hydrated, and consider over-the-counter medications for symptom relief. If symptoms worsen or persist, consult your healthcare provider.";
    }
    
    return "I understand you have a health concern. While I can provide general information, it's best to consult with a healthcare provider for personalized medical advice.";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Medical Assistant</h2>
        </div>
      </div>

      <Alert variant="destructive" className="m-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          This is an AI assistant and not a substitute for professional medical advice. 
          For medical emergencies, call emergency services immediately.
        </AlertDescription>
      </Alert>

      <ScrollArea className="h-[400px] p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your health question..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}