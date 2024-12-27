import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Calculator, Search, Play, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { BMICalculator } from "@/components/tools/BMICalculator";
import { CalorieCounter } from "@/components/tools/CalorieCounter";
import { SleepTracker } from "@/components/tools/SleepTracker";

const articles = [
  {
    title: "Understanding Nutrition Basics",
    category: "Nutrition",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/400x300?healthy+food",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
  },
  {
    title: "Beginner's Guide to Exercise",
    category: "Exercise",
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/400x300?exercise",
    author: "Mike Thompson",
    date: "March 14, 2024",
  },
  {
    title: "Mental Health Awareness",
    category: "Mental Health",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/400x300?meditation",
    author: "Dr. Emily Chen",
    date: "March 13, 2024",
  },
];

const videos = [
  {
    title: "30-Minute Home Workout",
    duration: "30:15",
    thumbnail: "https://source.unsplash.com/random/400x300?workout",
    instructor: "Alex Fitness",
    views: "15K",
  },
  {
    title: "Healthy Meal Prep Basics",
    duration: "15:45",
    thumbnail: "https://source.unsplash.com/random/400x300?meal-prep",
    instructor: "Chef Maria",
    views: "12K",
  },
  {
    title: "Stress Management Techniques",
    duration: "20:30",
    thumbnail: "https://source.unsplash.com/random/400x300?stress-relief",
    instructor: "Dr. James Wilson",
    views: "18K",
  },
];

const tools = [
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    component: BMICalculator,
  },
  {
    name: "Calorie Counter",
    description: "Track your daily calorie intake",
    component: CalorieCounter,
  },
  {
    name: "Sleep Tracker",
    description: "Monitor your sleep patterns",
    component: SleepTracker,
  },
];

export default function Education() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Health Education"
        subtitle="Learn more about health and wellness from trusted resources."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-10"
              placeholder="Search articles, videos, and tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.title} className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
                        {article.readTime}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-primary font-medium">
                        {article.category}
                      </div>
                      <h3 className="font-semibold mt-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.title} className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <span>{video.instructor}</span>
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <tool.component key={tool.name} />
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
