import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Sparkles } from "lucide-react";

export function CommunityFeatures() {
  const challenges = [
    {
      title: "30-Day Fitness",
      participants: 234,
      daysLeft: 12,
    },
    {
      title: "Healthy Eating",
      participants: 156,
      daysLeft: 5,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-4 bg-gray-50 rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{challenge.title}</h4>
                  <Award className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {challenge.participants}
                  </span>
                  <span>{challenge.daysLeft} days left</span>
                </div>
              </div>
            ))}
            <Button className="w-full mt-2">
              <Target className="mr-2 h-4 w-4" />
              Join a Challenge
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Find Workout Buddy
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Sparkles className="mr-2 h-4 w-4" />
              Weekly Goals
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}