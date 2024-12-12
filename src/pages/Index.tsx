import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoSection } from "@/components/DemoSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-gray-50">
        <Navbar />
        <AppSidebar />
        <main className="flex-1 mt-16">
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
        </main>
        <Footer />
        <MobileNav />
      </div>
    </SidebarProvider>
  );
};

export default Index;