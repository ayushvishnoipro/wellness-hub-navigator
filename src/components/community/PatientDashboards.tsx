import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";

const patients = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    condition: "Diabetes Type 2",
    progress: "Good",
    avatar: "/placeholder.svg",
    communities: 3,
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    condition: "Hypertension",
    progress: "Stable",
    avatar: "/placeholder.svg",
    communities: 5,
  },
  {
    name: "Emma Wilson",
    location: "Chicago, IL",
    condition: "Asthma",
    progress: "Improving",
    avatar: "/placeholder.svg",
    communities: 2,
  },
  {
    name: "David Brown",
    location: "Austin, TX",
    condition: "Arthritis",
    progress: "Stable",
    avatar: "/placeholder.svg",
    communities: 4,
  },
];

export function PatientDashboards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {patients.map((patient, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={patient.avatar} alt={patient.name} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg">{patient.name}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {patient.location}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Condition:</span>
                <Badge variant="secondary">{patient.condition}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progress:</span>
                <Badge 
                  variant={
                    patient.progress === "Good" ? "success" : 
                    patient.progress === "Improving" ? "default" : 
                    "secondary"
                  }
                >
                  {patient.progress}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <Users className="h-4 w-4 mr-1" />
                {patient.communities} Communities
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}