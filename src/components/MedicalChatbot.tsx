import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { getGeminiResponse, initializeGemini } from "@/lib/gemini";

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  type: 'bot',
  content: "Hello! I'm your medical assistant powered by Google's Gemini AI. I can help you with general health questions, but remember I'm not a substitute for professional medical advice. How can I help you today?",
  timestamp: new Date()
};

export function MedicalChatbot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const init = async () => {
      try {
        await initializeGemini();
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to initialize Gemini AI. Please try again later.",
        });
      } finally {
        setIsInitializing(false);
      }
    };
    init();
  }, [toast]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await getGeminiResponse(input);
      
      const botResponse: Message = {
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);

      // Check for emergency keywords in the response
      const emergencyKeywords = ['emergency', 'immediate medical attention', '911', 'urgent care'];
      if (emergencyKeywords.some(keyword => response.toLowerCase().includes(keyword))) {
        toast({
          variant: "destructive",
          title: "Emergency Alert",
          description: "Please seek immediate medical attention or call emergency services.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response. Please try again later.",
      });
      
      const errorMessage: Message = {
        type: 'bot',
        content: "I apologize, but I'm having trouble connecting to my AI service right now. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (isInitializing) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg p-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-lg">Initializing AI Assistant...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Medical Assistant (Powered by Gemini)</h2>
        </div>
      </div>

      <Alert variant="destructive" className="m-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          This is an AI assistant and not a substitute for professional medical advice. 
          For medical emergencies, call emergency services immediately.
        </AlertDescription>
      </Alert>

      <ScrollArea className="h-[400px] p-4 md:h-[500px]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              Assistant is typing...
            </div>
          )}
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
            disabled={isTyping}
          />
          <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}