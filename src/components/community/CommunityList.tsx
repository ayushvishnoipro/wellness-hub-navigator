import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const communities = [
  {
    name: "Diabetes Support Group",
    members: 1250,
    type: "Condition-Specific",
    location: "Global",
    topics: ["Diet", "Medication", "Exercise"],
  },
  {
    name: "NYC Wellness Warriors",
    members: 450,
    type: "Local",
    location: "New York City",
    topics: ["Fitness", "Mental Health"],
  },
  {
    name: "Heart Health Heroes",
    members: 890,
    type: "Condition-Specific",
    location: "Global",
    topics: ["Cardio", "Nutrition", "Stress Management"],
  },
  {
    name: "Bay Area Fitness",
    members: 680,
    type: "Local",
    location: "San Francisco Bay Area",
    topics: ["Running", "Yoga", "Outdoor Activities"],
  },
];

export function CommunityList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {communities.map((community, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{community.name}</CardTitle>
              <Badge variant="secondary">{community.type}</Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mt-2">
              <Users className="h-4 w-4 mr-1" />
              {community.members.toLocaleString()} members
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Location:</p>
                <Badge variant="outline">{community.location}</Badge>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full">Join Community</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}