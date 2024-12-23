import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Clock, Pill, Check, X } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const notifications = [
  {
    title: "Medication Reminder",
    description: "Take vitamin D supplement",
    time: "Daily at 9:00 AM",
    icon: Pill,
    active: true,
    type: "medication",
  },
  {
    title: "Appointment",
    description: "Annual check-up with Dr. Smith",
    time: "March 15, 2024 at 2:30 PM",
    icon: Calendar,
    active: true,
    type: "appointment",
  },
  {
    title: "Exercise Reminder",
    description: "30 minutes of cardio",
    time: "Every Monday, Wednesday, Friday at 6:00 PM",
    icon: Clock,
    active: false,
    type: "exercise",
  },
];

const preferences = [
  { name: "Email Notifications", description: "Receive updates via email", enabled: true },
  { name: "SMS Notifications", description: "Get text message alerts", enabled: false },
  { name: "Push Notifications", description: "Browser notifications", enabled: true },
  { name: "Weekly Summary", description: "Receive weekly health report", enabled: true },
];

export default function Notifications() {
  const [notificationsList, setNotificationsList] = useState(notifications);
  const [userPreferences, setUserPreferences] = useState(preferences);

  const toggleNotification = (index: number) => {
    const updatedNotifications = [...notificationsList];
    updatedNotifications[index].active = !updatedNotifications[index].active;
    setNotificationsList(updatedNotifications);
  };

  const togglePreference = (index: number) => {
    const updatedPreferences = [...userPreferences];
    updatedPreferences[index].enabled = !updatedPreferences[index].enabled;
    setUserPreferences(updatedPreferences);
  };

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
              {userPreferences.map((preference, index) => (
                <div key={preference.name} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">{preference.name}</div>
                    <div className="text-sm text-gray-500">{preference.description}</div>
                  </div>
                  <Switch
                    checked={preference.enabled}
                    onCheckedChange={() => togglePreference(index)}
                  />
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Active Reminders</h2>
            {notificationsList.map((notification, index) => (
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
                  <Switch
                    checked={notification.active}
                    onCheckedChange={() => toggleNotification(index)}
                  />
                </div>
                {notification.active && (
                  <div className="mt-4 pt-4 border-t flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Mark as Done
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Snooze
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Want more reminders?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Set up custom notifications for your specific health goals.
                </p>
              </div>
              <Button className="ml-auto">
                Add Reminder
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}