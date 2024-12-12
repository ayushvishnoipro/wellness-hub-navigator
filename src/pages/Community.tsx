import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Users, Search } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const categories = [
  { name: "Mental Health", icon: Users, count: 245 },
  { name: "Chronic Conditions", icon: MessageSquare, count: 189 },
  { name: "Wellness Tips", icon: MessageSquare, count: 324 },
];

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Community Support"
        subtitle="Connect, share, and learn with a supportive community."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-10"
              placeholder="Search discussions..."
              type="search"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} discussions</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Discussion Title {i}</h3>
                      <p className="text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <span>15 replies</span>
                        <span>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}