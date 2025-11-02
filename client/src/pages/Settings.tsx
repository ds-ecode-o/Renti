import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Bell,
  Smartphone,
  FileText,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-border px-4 py-4 z-10">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      </header>

      <div className="px-4 py-6 space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">
                John Doe
              </h2>
              <p className="text-sm text-muted-foreground">
                john.doe@example.com
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              data-testid="button-edit-profile"
              onClick={() => console.log('Edit profile')}
            >
              Edit
            </Button>
          </div>
        </Card>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2">
            Account
          </h3>
          <Card>
            <button
              data-testid="button-profile"
              onClick={() => console.log('Profile settings')}
              className="w-full flex items-center gap-3 p-4 hover-elevate active-elevate-2"
            >
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-left text-foreground">
                Profile Settings
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2">
            Preferences
          </h3>
          <Card className="divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-foreground font-medium">Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive payment alerts
                  </p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                data-testid="switch-notifications"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-foreground font-medium">
                    Payment Reminders
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Auto-send rent reminders
                  </p>
                </div>
              </div>
              <Switch
                checked={reminders}
                onCheckedChange={setReminders}
                data-testid="switch-reminders"
              />
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2">
            Data
          </h3>
          <Card>
            <button
              data-testid="button-export-data"
              onClick={() => console.log('Export data')}
              className="w-full flex items-center gap-3 p-4 hover-elevate active-elevate-2"
            >
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-left text-foreground">
                Export Data
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2">
            Support
          </h3>
          <Card>
            <button
              data-testid="button-help"
              onClick={() => console.log('Help & Support')}
              className="w-full flex items-center gap-3 p-4 hover-elevate active-elevate-2"
            >
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-left text-foreground">
                Help & Support
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        <Button
          variant="destructive"
          className="w-full"
          data-testid="button-logout"
          onClick={() => console.log('Logout')}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        <p className="text-center text-xs text-muted-foreground pt-4">
          Renti v1.0.0
        </p>
      </div>
    </div>
  );
}
