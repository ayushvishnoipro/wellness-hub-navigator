import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { SearchBar } from "@/components/SearchBar";
import { GreetingSection } from "@/components/GreetingSection";
import { QuickAccess } from "@/components/QuickAccess";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <SidebarTrigger className="md:hidden" />
              <SearchBar />
            </div>
            <GreetingSection />
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <QuickAccess />
          </div>
        </main>
        <MobileNav />
      </div>
    </SidebarProvider>
  );
};

export default Index;