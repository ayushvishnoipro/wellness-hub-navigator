import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Health Education"
          subtitle="Learn and understand more about your health."
        />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
          <p className="text-gray-600 mb-4">
            Explore a variety of resources to enhance your understanding of health and wellness.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="/resources/articles" className="text-primary hover:underline">
                Articles on Health Topics
              </a>
            </li>
            <li>
              <a href="/resources/videos" className="text-primary hover:underline">
                Informative Videos
              </a>
            </li>
            <li>
              <a href="/resources/webinars" className="text-primary hover:underline">
                Upcoming Webinars
              </a>
            </li>
            <li>
              <a href="/resources/tools" className="text-primary hover:underline">
                Health Tools and Calculators
              </a>
            </li>
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}
