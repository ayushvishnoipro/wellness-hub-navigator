import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <SidebarTrigger className="md:hidden mr-2" />
            <a href="/" className="text-xl font-bold text-primary">WellnessHub</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-primary">Demo</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-primary">FAQ</a>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}