import { Heart, MessageSquare, MapPin, BookOpen, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Symptom Checker",
    description: "AI-powered analysis to help understand your symptoms and get personalized recommendations.",
    color: "text-red-500",
  },
  {
    icon: MessageSquare,
    title: "Community Support",
    description: "Connect with others, share experiences, and get support from people who understand.",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Resource Locator",
    description: "Find nearby health services, specialists, and wellness centers with ease.",
    color: "text-green-500",
  },
  {
    icon: BookOpen,
    title: "Health Education",
    description: "Access comprehensive health resources and stay informed with expert content.",
    color: "text-purple-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay on top of your health with personalized reminders and alerts.",
    color: "text-yellow-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Health Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your health and wellness journey in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className={`${feature.color} p-3 rounded-lg bg-white`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}