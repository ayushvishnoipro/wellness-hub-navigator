import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Plus, AlertTriangle } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

export default function SymptomChecker() {
  const [step, setStep] = useState(1);
  const [symptoms, setSymptoms] = useState<string[]>([]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Symptom Checker"
        subtitle="AI-powered insights to help you understand your health better."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= s ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <Card className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Select Your Symptoms</h2>
                <div className="grid gap-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>{symptom}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSymptoms(symptoms.filter((_, i) => i !== index))}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setSymptoms([...symptoms, "New Symptom"])}
                  >
                    <Plus className="w-4 h-4" /> Add Symptom
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                {/* Add form fields for additional information */}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Analysis Results</h2>
                <div className="grid gap-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-900">Possible Condition</h3>
                      <p className="text-yellow-800">Based on your symptoms, you may be experiencing...</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" /> Find Healthcare Provider
                  </Button>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() => setStep(Math.min(3, step + 1))}
                disabled={step === 3}
              >
                {step === 2 ? "Analyze Symptoms" : "Next"}
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}