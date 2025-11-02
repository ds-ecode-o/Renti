import SummaryCard from "@/components/SummaryCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, TrendingDown, Download } from "lucide-react";

export default function Reports() {
  //todo: remove mock functionality - replace with real data
  const monthlyData = [
    { month: "Jul", amount: 380000 },
    { month: "Aug", amount: 395000 },
    { month: "Sep", amount: 410000 },
    { month: "Oct", amount: 425000 },
    { month: "Nov", amount: 405000 },
    { month: "Dec", amount: 420000 },
  ];

  const maxAmount = Math.max(...monthlyData.map((d) => d.amount));

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-border px-4 py-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <Button
            variant="outline"
            size="sm"
            data-testid="button-export"
            onClick={() => console.log('Export report')}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            December 2024 Summary
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <SummaryCard
              title="Total Revenue"
              value="₹4.2L"
              icon={DollarSign}
              subtitle="This month"
            />
            <SummaryCard
              title="Growth"
              value="+3.7%"
              icon={TrendingUp}
              iconBg="bg-green-100 dark:bg-green-900/30"
              iconColor="text-green-600 dark:text-green-400"
              subtitle="vs last month"
            />
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Revenue Trend (6 Months)
          </h3>
          <div className="space-y-3">
            {monthlyData.map((data) => {
              const percentage = (data.amount / maxAmount) * 100;
              return (
                <div key={data.month} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">
                      {data.month}
                    </span>
                    <span className="font-mono font-semibold text-foreground">
                      ₹{(data.amount / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Payment Distribution
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-foreground">Paid</span>
              </div>
              <span className="font-mono font-semibold text-foreground">
                ₹3.8L
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-foreground">Pending</span>
              </div>
              <span className="font-mono font-semibold text-foreground">
                ₹22K
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-foreground">Overdue</span>
              </div>
              <span className="font-mono font-semibold text-foreground">
                ₹43.5K
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Top Performers
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Tenants with consistent on-time payments
          </p>
          <div className="space-y-3">
            {["Rajesh Kumar", "Anita Desai", "Ramesh Iyer"].map((name, idx) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {12 - idx} months
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
