import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const resources = [
  {
    name: "City Health Clinic",
    type: "Medical Center",
    address: "123 Health Street",
    distance: "0.8 miles",
    rating: 4.5,
    phone: "(555) 123-4567",
    hours: "9:00 AM - 5:00 PM",
  },
  {
    name: "Wellness Pharmacy",
    type: "Pharmacy",
    address: "456 Care Avenue",
    distance: "1.2 miles",
    rating: 4.8,
    phone: "(555) 987-6543",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    name: "Community Hospital",
    type: "Hospital",
    address: "789 Medical Drive",
    distance: "2.5 miles",
    rating: 4.2,
    phone: "(555) 246-8135",
    hours: "24/7",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Resource Locator"
        subtitle="Find health services near you."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {resources.map((resource) => (
                <Card key={resource.name} className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{resource.name}</h3>
                        <p className="text-sm text-gray-500">{resource.type}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>

                    <div className="grid gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{resource.address}</span>
                        <span className="text-gray-500">({resource.distance})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{resource.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{resource.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        Call
                      </Button>
                      <Button className="flex-1">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gray-200 rounded-lg min-h-[400px] lg:min-h-[600px]">
              {/* Map placeholder - would integrate with a mapping service */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Interactive Map
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}