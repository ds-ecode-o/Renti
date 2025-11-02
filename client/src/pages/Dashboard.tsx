import { useState } from "react";
import SummaryCard from "@/components/SummaryCard";
import PaymentCard from "@/components/PaymentCard";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, AlertCircle, TrendingUp, Plus } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import avatar1 from '@assets/generated_images/Indian_male_tenant_avatar_11a9b965.png';
import avatar2 from '@assets/generated_images/Indian_female_tenant_avatar_f00d068d.png';

export default function Dashboard() {
  const [showAlert] = useState(true);

  //todo: remove mock functionality - replace with real data
  const recentPayments = [
    {
      id: "1",
      tenantName: "Rajesh Kumar",
      amount: 15000,
      dueDate: "Dec 1, 2024",
      status: "paid" as const,
      paymentMethod: "Bank Transfer",
      avatar: avatar1,
    },
    {
      id: "2",
      tenantName: "Priya Sharma",
      amount: 22000,
      dueDate: "Dec 5, 2024",
      status: "pending" as const,
      paymentMethod: "Cash",
      avatar: avatar2,
    },
    {
      id: "3",
      tenantName: "Amit Patel",
      amount: 18500,
      dueDate: "Nov 5, 2024",
      status: "overdue" as const,
    },
  ];

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-border px-4 py-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">December 2024</p>
          </div>
          <Button
            size="icon"
            data-testid="button-add-payment"
            onClick={() => console.log('Add payment')}
            className="rounded-full w-12 h-12"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        {showAlert && (
          <Alert className="bg-red-50 border-l-4 border-red-500 dark:bg-red-900/20">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-700 dark:text-red-300">
              <strong>2 overdue payments</strong> - Total ₹43,500 pending collection
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-2 gap-4">
          <SummaryCard
            title="Monthly Revenue"
            value="₹4.2L"
            icon={DollarSign}
            subtitle="+12% from last month"
          />
          <SummaryCard
            title="Total Tenants"
            value="24"
            icon={Users}
            iconBg="bg-green-100 dark:bg-green-900/30"
            iconColor="text-green-600 dark:text-green-400"
          />
          <SummaryCard
            title="Collected"
            value="₹3.8L"
            icon={TrendingUp}
            iconBg="bg-green-100 dark:bg-green-900/30"
            iconColor="text-green-600 dark:text-green-400"
            subtitle="This month"
          />
          <SummaryCard
            title="Outstanding"
            value="₹43.5K"
            icon={AlertCircle}
            iconBg="bg-amber-100 dark:bg-amber-900/30"
            iconColor="text-amber-600 dark:text-amber-400"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Payments</h2>
            <Button
              variant="ghost"
              size="sm"
              data-testid="button-view-all"
              onClick={() => console.log('View all payments')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {recentPayments.map((payment) => (
              <PaymentCard
                key={payment.id}
                {...payment}
                onClick={() => console.log('Payment clicked:', payment.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
