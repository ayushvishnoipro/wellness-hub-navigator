import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Bell, Calendar, Clock, Pill } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const notifications = [
  {
    title: "Medication Reminder",
    description: "Take vitamin D supplement",
    time: "Daily at 9:00 AM",
    icon: Pill,
    active: true,
  },
  {
    title: "Appointment",
    description: "Annual check-up with Dr. Smith",
    time: "March 15, 2024 at 2:30 PM",
    icon: Calendar,
    active: true,
  },
  {
    title: "Exercise Reminder",
    description: "30 minutes of cardio",
    time: "Every Monday, Wednesday, Friday at 6:00 PM",
    icon: Clock,
    active: false,
  },
];

export default function Notifications() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageHeader
        title="Smart Notifications"
        subtitle="Stay on top of your health goals with timely reminders."
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span>Email Notifications</span>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span>SMS Notifications</span>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Active Reminders</h2>
            {notifications.map((notification) => (
              <Card key={notification.title} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <notification.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                  <Switch checked={notification.active} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}