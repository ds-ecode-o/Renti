import SummaryCard from '../SummaryCard';
import { DollarSign, Users, AlertCircle } from 'lucide-react';

export default function SummaryCardExample() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <SummaryCard
        title="Monthly Revenue"
        value="₹45,200"
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
        title="Outstanding"
        value="₹12,400"
        icon={AlertCircle}
        iconBg="bg-amber-100 dark:bg-amber-900/30"
        iconColor="text-amber-600 dark:text-amber-400"
      />
    </div>
  );
}
