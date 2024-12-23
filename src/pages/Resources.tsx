import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { MapPin, Phone, Clock, Star, Search, Filter } from "lucide-react";
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
    services: ["General Practice", "Vaccinations", "Lab Tests"],
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  {
    name: "Wellness Pharmacy",
    type: "Pharmacy",
    address: "456 Care Avenue",
    distance: "1.2 miles",
    rating: 4.8,
    phone: "(555) 987-6543",
    hours: "8:00 AM - 10:00 PM",
    services: ["Prescriptions", "Vaccinations", "Health Supplies"],
    coordinates: { lat: 40.7138, lng: -74.0049 },
  },
  {
    name: "Community Hospital",
    type: "Hospital",
    address: "789 Medical Drive",
    distance: "2.5 miles",
    rating: 4.2,
    phone: "(555) 246-8135",
    hours: "24/7",
    services: ["Emergency Care", "Surgery", "Specialized Care"],
    coordinates: { lat: 40.7118, lng: -74.0070 },
  },
];

const filterOptions = [
  { value: "all", label: "All Services" },
  { value: "medical", label: "Medical Centers" },
  { value: "pharmacy", label: "Pharmacies" },
  { value: "hospital", label: "Hospitals" },
];

export default function Resources() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesFilter = selectedFilter === "all" || resource.type.toLowerCase().includes(selectedFilter);
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Resource Locator"
        subtitle="Find health services near you."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {filteredResources.map((resource) => (
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

                    <div className="flex flex-wrap gap-2">
                      {resource.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {service}
                        </span>
                      ))}
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

            <div className="bg-gray-200 rounded-lg min-h-[600px] lg:sticky lg:top-20">
              <div className="h-full flex items-center justify-center text-gray-500">
                Interactive Map
                {/* Map integration would go here */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}