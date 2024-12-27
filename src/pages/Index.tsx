import { SearchBar } from "@/components/SearchBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoSection } from "@/components/DemoSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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