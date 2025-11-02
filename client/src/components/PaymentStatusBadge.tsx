import { Badge } from "@/components/ui/badge";

type PaymentStatus = "paid" | "pending" | "overdue";

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

export default function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const statusConfig = {
    paid: {
      label: "Paid",
      className: "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400",
    },
    pending: {
      label: "Pending",
      className: "bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
    },
    overdue: {
      label: "Overdue",
      className: "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge 
      data-testid={`badge-${status}`}
      className={`${config.className} no-default-hover-elevate rounded-full px-3 py-1 text-xs font-medium`}
    >
      ● {config.label}
    </Badge>
  );
}
