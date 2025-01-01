import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, BookMarked, Award, ChevronRight } from "lucide-react";

const featuredContent = [
  {
    title: "Understanding Nutrition Basics",
    description: "Learn about essential nutrients and balanced diet principles",
    progress: 65,
    type: "Course",
    icon: BookOpen,
  },
  {
    title: "Mental Health Awareness",
    description: "Comprehensive guide to mental wellness and self-care",
    progress: 30,
    type: "Video Series",
    icon: Video,
  },
  {
    title: "Chronic Disease Management",
    description: "Expert insights on managing long-term health conditions",
    progress: 45,
    type: "Interactive Guide",
    icon: BookMarked,
  },
];

const categories = [
  { name: "Nutrition", count: 24 },
  { name: "Mental Health", count: 18 },
  { name: "Physical Fitness", count: 32 },
  { name: "Chronic Diseases", count: 15 },
  { name: "Preventive Care", count: 21 },
];

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Health Education Center"
          subtitle="Explore our comprehensive collection of health and wellness resources to enhance your knowledge and well-being."
        />
        
        <main className="container mx-auto px-4 py-8 space-y-8">
          <SearchBar />
          
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full max-w-[400px] grid-cols-3">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="library">Library</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {featuredContent.map((content, index) => (
                  <Card key={index} className="relative group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <content.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm text-gray-500">{content.type}</span>
                      </div>
                      <CardTitle className="mt-4">{content.title}</CardTitle>
                      <CardDescription>{content.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{content.progress}%</span>
                        </div>
                        <Progress value={content.progress} className="h-2" />
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Continue Learning
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {categories.map((category, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{category.name}</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Your Achievements</CardTitle>
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((_, index) => (
                          <div key={index} className="text-center p-4 rounded-lg bg-primary/5">
                            <div className="font-semibold text-2xl text-primary mb-1">
                              {index === 0 ? "5" : index === 1 ? "12" : "3"}
                            </div>
                            <div className="text-sm text-gray-600">
                              {index === 0 ? "Courses Completed" : index === 1 ? "Hours Learned" : "Certificates Earned"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">Health Course {index + 1}</CardTitle>
                      <CardDescription>
                        Comprehensive guide to understanding various health topics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="library">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">Health Article {index + 1}</CardTitle>
                      <CardDescription>
                        In-depth article about important health topics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" className="px-0">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  );
}