import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

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

const severityLevels = ["Mild", "Moderate", "Severe"];

export function SymptomForm({ onAnalyze }: { onAnalyze: (data: any) => void }) {
  const [step, setStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handleAddSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptomToRemove: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom !== symptomToRemove));
  };

  const handleSubmit = () => {
    onAnalyze({
      symptoms: selectedSymptoms,
      severity,
      duration
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Step {step} of 3</h2>
        <Progress value={step * 33.33} className="w-1/3" />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-medium">Select Your Symptoms</h3>
          <Select onValueChange={handleAddSymptom}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a symptom" />
            </SelectTrigger>
            <SelectContent>
              {symptoms.map((symptom) => (
                <SelectItem key={symptom} value={symptom}>
                  {symptom}
                </SelectItem>
              ))}
            </SelectContent>
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
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-medium">Symptom Severity</h3>
          <Select onValueChange={setSeverity}>
            <SelectTrigger>
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent>
              {severityLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-medium">Duration</h3>
          <Input
            type="text"
            placeholder="e.g., 2 days"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
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
              handleSubmit();
            } else {
              setStep(Math.min(3, step + 1));
            }
          }}
        >
          {step === 3 ? "Analyze Symptoms" : "Next"}
        </Button>
      </div>
    </div>
  );
}