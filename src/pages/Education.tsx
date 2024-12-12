import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Calculator } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const articles = [
  {
    title: "Understanding Nutrition Basics",
    category: "Nutrition",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/400x300?healthy+food",
  },
  {
    title: "Beginner's Guide to Exercise",
    category: "Exercise",
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/400x300?exercise",
  },
  {
    title: "Mental Health Awareness",
    category: "Mental Health",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/400x300?meditation",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Health Education"
        subtitle="Learn more about health and wellness from trusted resources."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.title} className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="text-sm text-primary font-medium">
                        {article.category}
                      </div>
                      <h3 className="font-semibold mt-2">{article.title}</h3>
                      <div className="flex items-center mt-4 text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <Video className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold mt-4">Video Title {i}</h3>
                    <p className="text-sm text-gray-500 mt-2">10:30 mins</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "BMI Calculator",
                  "Calorie Counter",
                  "Sleep Tracker",
                ].map((tool) => (
                  <Card key={tool} className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calculator className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{tool}</h3>
                        <p className="text-sm text-gray-500">Track your progress</p>
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