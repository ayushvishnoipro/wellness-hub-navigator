import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { SearchBar } from "@/components/SearchBar";
import { GreetingSection } from "@/components/GreetingSection";
import { QuickAccess } from "@/components/QuickAccess";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex items-center justify-between p-6 bg-white border-b">
            <SidebarTrigger className="md:hidden" />
            <SearchBar />
          </div>
          
          <div className="space-y-8">
            <HeroSection />
            <GreetingSection />
            <div className="px-6">
              <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
              <QuickAccess />
            </div>
            <FeaturesSection />
            <TestimonialsSection />
          </div>
        </main>
        <MobileNav />
      </div>
    </SidebarProvider>
  );
};

export default Index;