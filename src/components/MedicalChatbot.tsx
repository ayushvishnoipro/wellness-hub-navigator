import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

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
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        content: generateBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Show toast for emergency responses
      if (botResponse.content.includes('emergency')) {
        toast({
          variant: "destructive",
          title: "Emergency Alert",
          description: "Please seek immediate medical attention or call emergency services.",
        });
      }
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('emergency') || input.includes('severe pain') || input.includes('chest pain')) {
      return "🚨 This sounds like a medical emergency. Please call emergency services immediately (911 in the US) or visit the nearest emergency room.";
    }
    
    if (input.includes('headache')) {
      return "Common causes of headaches include stress, dehydration, or lack of sleep. Try these steps:\n1. Drink water\n2. Rest in a quiet, dark room\n3. Try over-the-counter pain relievers\n\nIf the headache is severe or persistent, please consult a healthcare provider.";
    }
    
    if (input.includes('cold') || input.includes('flu')) {
      return "For cold and flu symptoms:\n1. Get plenty of rest\n2. Stay hydrated\n3. Consider over-the-counter medications for symptom relief\n4. Use a humidifier\n\nIf symptoms worsen or persist beyond a week, consult your healthcare provider.";
    }

    if (input.includes('anxiety') || input.includes('stress')) {
      return "Here are some stress management techniques:\n1. Deep breathing exercises\n2. Regular physical activity\n3. Adequate sleep\n4. Mindfulness or meditation\n\nIf anxiety is affecting your daily life, consider speaking with a mental health professional.";
    }
    
    return "I understand you have a health concern. While I can provide general information, for personalized medical advice, please consult with a qualified healthcare provider. Can you tell me more about your symptoms?";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
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