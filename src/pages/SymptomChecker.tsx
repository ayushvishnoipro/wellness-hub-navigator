import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, Plus, AlertTriangle, MapPin } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const symptoms = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Nausea",
  "Dizziness",
  "Shortness of breath",
  "Body aches",
];

const riskLevels = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
};

export default function SymptomChecker() {
  const [step, setStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAddSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptomToRemove: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom !== symptomToRemove));
  };

  const handleAnalyze = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Symptom Checker"
        subtitle="AI-powered insights to help you understand your health better."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {!showResults ? (
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Step {step} of 3</h2>
                  <Progress value={step * 33.33} className="w-1/3" />
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Select Your Symptoms</h3>
                    <div className="grid gap-4">
                      <Select
                        onValueChange={(value) => handleAddSymptom(value)}
                      >
                        <option value="">Select a symptom</option>
                        {symptoms.map((symptom) => (
                          <option key={symptom} value={symptom}>
                            {symptom}
                          </option>
                        ))}
                      </Select>

                      <div className="flex flex-wrap gap-2">
                        {selectedSymptoms.map((symptom) => (
                          <div
                            key={symptom}
                            className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            <span>{symptom}</span>
                            <button
                              onClick={() => handleRemoveSymptom(symptom)}
                              className="hover:text-primary/80"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Additional Information</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          When did the symptoms start?
                        </label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Severity (1-10)
                        </label>
                        <Input type="number" min="1" max="10" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Review & Confirm</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Selected Symptoms:</h4>
                      <ul className="list-disc list-inside">
                        {selectedSymptoms.map((symptom) => (
                          <li key={symptom}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {
                      if (step === 3) {
                        handleAnalyze();
                      } else {
                        setStep(Math.min(3, step + 1));
                      }
                    }}
                  >
                    {step === 3 ? "Analyze Symptoms" : "Next"}
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="font-medium">Medium Risk Level</span>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <div>
                        <h3 className="font-medium text-yellow-900">Possible Conditions</h3>
                        <ul className="mt-2 space-y-2 text-yellow-800">
                          <li>Common Cold</li>
                          <li>Seasonal Allergies</li>
                          <li>Viral Infection</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Recommendations</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Rest and stay hydrated</li>
                      <li>Monitor symptoms for 24-48 hours</li>
                      <li>Consider over-the-counter medications</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4" />
                      Find Healthcare Provider
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Locate Nearby Clinics
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}