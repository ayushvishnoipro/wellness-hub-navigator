import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Activity, Calendar, Heart, LineChart, Pill, Users } from "lucide-react";

interface PatientDetailsProps {
  patient: {
    name: string;
    location: string;
    condition: string;
    progress: string;
    avatar: string;
    communities: number;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PatientDetails({ patient, open, onOpenChange }: PatientDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Patient Dashboard</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6">
          {/* Patient Profile Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={patient.avatar} alt={patient.name} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">{patient.name}</h2>
              <p className="text-muted-foreground">{patient.location}</p>
            </div>
          </div>

          {/* Health Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Condition Status</CardTitle>
                <Pill className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge>{patient.condition}</Badge>
                  <Progress value={
                    patient.progress === "Good" ? 80 :
                    patient.progress === "Improving" ? 60 :
                    40
                  } />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vital Signs</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Heart Rate</span>
                    <span>72 bpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blood Pressure</span>
                    <span>120/80</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Activity Level</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Daily Steps</span>
                    <span>8,456</span>
                  </div>
                  <Progress value={70} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community Engagement</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Active Communities</span>
                    <Badge variant="secondary">{patient.communities}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Active</span>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Next Check-up</span>
                    <span className="text-sm text-muted-foreground">Mar 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Type</span>
                    <Badge variant="outline">Regular Follow-up</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health Trends */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Trends</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium">Weight</p>
                    <p className="text-2xl font-bold">68 kg</p>
                    <Badge variant="secondary" className="mt-1">-2kg</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Blood Sugar</p>
                    <p className="text-2xl font-bold">95</p>
                    <Badge variant="secondary" className="mt-1">Stable</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sleep</p>
                    <p className="text-2xl font-bold">7.5h</p>
                    <Badge variant="secondary" className="mt-1">+0.5h</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}