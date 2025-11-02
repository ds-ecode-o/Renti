import { useState } from "react";
import PaymentCard from "@/components/PaymentCard";
import SummaryCard from "@/components/SummaryCard";
import { Button } from "@/components/ui/button";
import { Plus, DollarSign, Clock, AlertCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import avatar1 from '@assets/generated_images/Indian_male_tenant_avatar_11a9b965.png';
import avatar2 from '@assets/generated_images/Indian_female_tenant_avatar_f00d068d.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_male_avatar_5a051e15.png';

export default function Payments() {
  const [filter, setFilter] = useState("all");

  //todo: remove mock functionality - replace with real data
  const payments = [
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
      tenantName: "Ramesh Iyer",
      amount: 18000,
      dueDate: "Dec 2, 2024",
      status: "paid" as const,
      paymentMethod: "UPI",
      avatar: avatar3,
    },
    {
      id: "4",
      tenantName: "Amit Patel",
      amount: 18500,
      dueDate: "Nov 5, 2024",
      status: "overdue" as const,
    },
    {
      id: "5",
      tenantName: "Suresh Reddy",
      amount: 25000,
      dueDate: "Oct 28, 2024",
      status: "overdue" as const,
    },
  ];

  const filteredPayments = payments.filter((payment) => {
    if (filter === "all") return true;
    return payment.status === filter;
  });

  const totalCollected = payments
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalOverdue = payments
    .filter((p) => p.status === "overdue")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-border px-4 py-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Payments</h1>
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
        <div className="grid grid-cols-3 gap-3">
          <SummaryCard
            title="Collected"
            value={`₹${(totalCollected / 1000).toFixed(0)}K`}
            icon={DollarSign}
            iconBg="bg-green-100 dark:bg-green-900/30"
            iconColor="text-green-600 dark:text-green-400"
          />
          <SummaryCard
            title="Pending"
            value={`₹${(totalPending / 1000).toFixed(0)}K`}
            icon={Clock}
            iconBg="bg-amber-100 dark:bg-amber-900/30"
            iconColor="text-amber-600 dark:text-amber-400"
          />
          <SummaryCard
            title="Overdue"
            value={`₹${(totalOverdue / 1000).toFixed(0)}K`}
            icon={AlertCircle}
            iconBg="bg-red-100 dark:bg-red-900/30"
            iconColor="text-red-600 dark:text-red-400"
          />
        </div>

        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all" data-testid="filter-all">All</TabsTrigger>
            <TabsTrigger value="paid" data-testid="filter-paid">Paid</TabsTrigger>
            <TabsTrigger value="pending" data-testid="filter-pending">Pending</TabsTrigger>
            <TabsTrigger value="overdue" data-testid="filter-overdue">Overdue</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-3">
          {filteredPayments.map((payment) => (
            <PaymentCard
              key={payment.id}
              {...payment}
              onClick={() => console.log('Payment clicked:', payment.id)}
            />
          ))}
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No payments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
