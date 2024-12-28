import { SearchBar } from "@/components/SearchBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoSection } from "@/components/DemoSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MedicalChatbot } from "@/components/MedicalChatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <div className="flex items-center justify-center p-6 bg-white border-b">
          <SearchBar />
        </div>
        
        <div className="space-y-0">
          <HeroSection />
          <FeaturesSection />
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Smart Medical Chatbot</h2>
              <MedicalChatbot />
            </div>
          </section>
          <DemoSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;