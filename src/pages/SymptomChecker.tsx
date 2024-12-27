import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { SymptomForm } from "@/components/symptom-checker/SymptomForm";
import { AnalysisResults } from "@/components/symptom-checker/AnalysisResults";

export default function SymptomChecker() {
  const [analysisData, setAnalysisData] = useState<any>(null);

  const handleAnalyze = (data: any) => {
    setAnalysisData(data);
  };

  const handleReset = () => {
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Symptom Checker"
        subtitle="AI-powered insights to help you understand your health better."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            {!analysisData ? (
              <SymptomForm onAnalyze={handleAnalyze} />
            ) : (
              <AnalysisResults data={analysisData} onReset={handleReset} />
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}