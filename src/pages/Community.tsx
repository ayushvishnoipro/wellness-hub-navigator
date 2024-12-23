import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Users, Search, Star, Heart } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const categories = [
  { name: "Mental Health", icon: Users, count: 245, description: "Support and discussions about mental well-being" },
  { name: "Chronic Conditions", icon: MessageSquare, count: 189, description: "Connect with others managing chronic health conditions" },
  { name: "Wellness Tips", icon: Heart, count: 324, description: "Share and learn daily wellness practices" },
];

const discussions = [
  {
    id: 1,
    title: "Managing Anxiety During Difficult Times",
    author: "Sarah J.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    category: "Mental Health",
    replies: 15,
    likes: 32,
    timeAgo: "2 hours ago",
    preview: "I've been dealing with increased anxiety lately and wanted to share some coping strategies that have helped me...",
  },
  {
    id: 2,
    title: "Daily Meditation Practice Tips",
    author: "Michael R.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    category: "Wellness Tips",
    replies: 8,
    likes: 24,
    timeAgo: "4 hours ago",
    preview: "Here's my morning meditation routine that has helped me stay centered and focused throughout the day...",
  },
  {
    id: 3,
    title: "Living with Type 2 Diabetes",
    author: "Emma L.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    category: "Chronic Conditions",
    replies: 21,
    likes: 45,
    timeAgo: "6 hours ago",
    preview: "I was diagnosed with Type 2 Diabetes last year and wanted to share my journey and what I've learned...",
  },
];

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="mt-6">
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{discussion.title}</h3>
                            <p className="text-sm text-gray-500">
                              Posted by {discussion.author} in {discussion.category} • {discussion.timeAgo}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Follow
                          </Button>
                        </div>
                        <p className="mt-2 text-gray-600">{discussion.preview}</p>
                        <div className="flex items-center gap-6 mt-4">
                          <div className="flex items-center gap-2 text-gray-500">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Heart className="w-4 h-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="categories" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                        <p className="text-sm text-gray-500 mt-2">{category.count} discussions</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="members" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Member${i}`}
                        alt={`Member ${i}`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Community Member {i}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>Top Contributor</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}