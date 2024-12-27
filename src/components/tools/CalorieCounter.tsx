import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from "lucide-react";

export function CalorieCounter() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    if (age && gender && weight && height && activityLevel) {
      let bmr;
      if (gender === "male") {
        bmr = 88.362 + (13.397 * parseFloat(weight)) + (4.799 * parseFloat(height)) - (5.677 * parseFloat(age));
      } else {
        bmr = 447.593 + (9.247 * parseFloat(weight)) + (3.098 * parseFloat(height)) - (4.330 * parseFloat(age));
      }

      const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };

      const dailyCalories = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
      setCalories(Math.round(dailyCalories));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calorie Counter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Age</label>
          <Input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Gender</label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Weight (kg)</label>
          <Input
            type="number"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Height (cm)</label>
          <Input
            type="number"
            placeholder="Enter height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Activity Level</label>
          <Select value={activityLevel} onValueChange={setActivityLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
              <SelectItem value="light">Light (exercise 1-3 times/week)</SelectItem>
              <SelectItem value="moderate">Moderate (exercise 4-5 times/week)</SelectItem>
              <SelectItem value="active">Active (daily exercise)</SelectItem>
              <SelectItem value="veryActive">Very Active (intense exercise)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={calculateCalories} className="w-full">
          Calculate Daily Calories
        </Button>
        {calories !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Your daily calorie needs: {calories} calories
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This is an estimate based on your inputs and activity level
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}