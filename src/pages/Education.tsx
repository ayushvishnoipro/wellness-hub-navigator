import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Calendar, Calculator } from "lucide-react";

const educationalResources = [
  {
    title: "Understanding Common Health Issues",
    type: "Article Collection",
    description: "Comprehensive guides about various health conditions and preventive care.",
    icon: BookOpen,
    link: "/resources/articles",
  },
  {
    title: "Health & Wellness Videos",
    type: "Video Library",
    description: "Expert-led videos covering various health topics and wellness practices.",
    icon: Video,
    link: "/resources/videos",
  },
  {
    title: "Upcoming Health Webinars",
    type: "Live Sessions",
    description: "Interactive sessions with healthcare professionals and wellness experts.",
    icon: Calendar,
    link: "/resources/webinars",
  },
  {
    title: "Health Calculators & Tools",
    type: "Interactive Tools",
    description: "BMI calculator, calorie counter, and other useful health tools.",
    icon: Calculator,
    link: "/resources/tools",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Health Education Center"
          subtitle="Explore our comprehensive collection of health and wellness resources."
        />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6">
            {educationalResources.map((resource) => (
              <Card key={resource.title} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">{resource.type}</p>
                    <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                    <Button variant="outline" asChild>
                      <a href={resource.link}>Explore Resources</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-6">
                  <h3 className="font-semibold mb-2">Health Tips & Best Practices</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn about daily habits that can improve your overall health and well-being.
                  </p>
                  <Button variant="link" className="px-0">
                    Read More →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}