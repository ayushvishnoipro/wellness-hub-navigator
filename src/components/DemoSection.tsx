import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our quick demo to see how our app helps you manage your health journey.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <img
            src="/placeholder.svg"
            alt="Demo video thumbnail"
            className="w-full aspect-video object-cover"
          />
          <Button
            size="lg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Play className="mr-2 h-6 w-6" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}