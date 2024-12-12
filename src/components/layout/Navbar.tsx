import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">WellnessHub</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/symptoms" className="text-gray-600 hover:text-primary">Symptoms</Link>
            <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link>
            <Link to="/education" className="text-gray-600 hover:text-primary">Education</Link>
            <Link to="/notifications" className="text-gray-600 hover:text-primary">Notifications</Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}