import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";
import { useState } from "react";
import { PatientDetails } from "./PatientDetails";

const patients = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    condition: "Diabetes Type 2",
    progress: "Good",
    avatar: "/placeholder.svg",
    communities: 3,
    medicalHistory: [
      {
        date: "2023-10-15",
        condition: "Hypertension Diagnosis",
        notes: "Prescribed ACE inhibitors",
        doctor: "Dr. Smith"
      },
      {
        date: "2023-08-20",
        condition: "Annual Physical",
        notes: "All vitals normal, recommended lifestyle changes",
        doctor: "Dr. Williams"
      },
      {
        date: "2023-05-10",
        condition: "Diabetes Type 2 Diagnosis",
        notes: "Started on Metformin",
        doctor: "Dr. Smith"
      }
    ]
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    condition: "Hypertension",
    progress: "Stable",
    avatar: "/placeholder.svg",
    communities: 5,
    medicalHistory: [
      {
        date: "2023-11-01",
        condition: "Hypertension Follow-up",
        notes: "Blood pressure stabilized",
        doctor: "Dr. Johnson"
      },
      {
        date: "2023-09-15",
        condition: "Hypertension Diagnosis",
        notes: "Started on beta blockers",
        doctor: "Dr. Johnson"
      }
    ]
  },
  {
    name: "Emma Wilson",
    location: "Chicago, IL",
    condition: "Asthma",
    progress: "Improving",
    avatar: "/placeholder.svg",
    communities: 2,
    medicalHistory: [
      {
        date: "2023-12-01",
        condition: "Asthma Review",
        notes: "Inhaler technique improved",
        doctor: "Dr. Brown"
      },
      {
        date: "2023-07-20",
        condition: "Asthma Diagnosis",
        notes: "Prescribed daily inhaler",
        doctor: "Dr. Brown"
      }
    ]
  },
  {
    name: "David Brown",
    location: "Austin, TX",
    condition: "Arthritis",
    progress: "Stable",
    avatar: "/placeholder.svg",
    communities: 4,
    medicalHistory: [
      {
        date: "2023-11-15",
        condition: "Arthritis Follow-up",
        notes: "Joint pain reduced with current medication",
        doctor: "Dr. Martinez"
      },
      {
        date: "2023-06-10",
        condition: "Arthritis Diagnosis",
        notes: "Started on anti-inflammatory medication",
        doctor: "Dr. Martinez"
      }
    ]
  },
];

export function PatientDashboards() {
  const [selectedPatient, setSelectedPatient] = useState<typeof patients[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedPatient(patient)}
          >
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
                      patient.progress === "Good" ? "default" : 
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

      {selectedPatient && (
        <PatientDetails
          patient={selectedPatient}
          open={selectedPatient !== null}
          onOpenChange={(open) => !open && setSelectedPatient(null)}
        />
      )}
    </>
  );
}