import { PageHeader } from "@/components/PageHeader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MemberDashboard } from "@/components/community/MemberDashboard";
import { HealthMetrics } from "@/components/community/HealthMetrics";
import { ActivityLog } from "@/components/community/ActivityLog";
import { CommunityFeatures } from "@/components/community/CommunityFeatures";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Community Hub"
        subtitle="Connect with others, track your progress, and achieve your health goals together."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <MemberDashboard />
          </div>
          <div className="lg:col-span-6">
            <HealthMetrics />
            <ActivityLog />
          </div>
          <div className="lg:col-span-3">
            <CommunityFeatures />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}