import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Activity, MapPin } from "lucide-react";

interface AnalysisResultsProps {
  data: {
    symptoms: string[];
    severity: string;
    duration: string;
  };
  onReset: () => void;
}

export function AnalysisResults({ data, onReset }: AnalysisResultsProps) {
  const getRiskLevel = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "severe":
        return {
          level: "High",
          color: "bg-red-500",
          text: "text-red-700",
          bg: "bg-red-50",
        };
      case "moderate":
        return {
          level: "Medium",
          color: "bg-yellow-500",
          text: "text-yellow-700",
          bg: "bg-yellow-50",
        };
      default:
        return {
          level: "Low",
          color: "bg-green-500",
          text: "text-green-700",
          bg: "bg-green-50",
        };
    }
  };

  const risk = getRiskLevel(data.severity);

  return (
    <div className="space-y-6">
      <div className={`p-4 rounded-lg ${risk.bg}`}>
        <div className="flex items-center gap-3">
          <Activity className={`w-5 h-5 ${risk.text}`} />
          <div>
            <h3 className={`font-medium ${risk.text}`}>Risk Level: {risk.level}</h3>
            <p className="text-sm text-gray-600">Based on your symptoms and their severity</p>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Possible Conditions</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Common Cold</li>
          <li>• Seasonal Allergies</li>
          <li>• Viral Infection</li>
        </ul>
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Recommendations</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Rest and stay hydrated</li>
          <li>• Monitor symptoms for 24-48 hours</li>
          <li>• Consider over-the-counter medications</li>
        </ul>
      </Card>

      <div className="flex gap-4">
        <Button className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Find Healthcare Provider
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Locate Nearby Clinics
        </Button>
      </div>

      <Button variant="outline" onClick={onReset} className="w-full">
        Check New Symptoms
      </Button>
    </div>
  );
}