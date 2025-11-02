import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PaymentStatusBadge from "./PaymentStatusBadge";
import { Calendar } from "lucide-react";

interface PaymentCardProps {
  id: string;
  tenantName: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  paymentMethod?: string;
  avatar?: string;
  onClick?: () => void;
}

export default function PaymentCard({
  id,
  tenantName,
  amount,
  dueDate,
  status,
  paymentMethod,
  avatar,
  onClick,
}: PaymentCardProps) {
  const initials = tenantName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      data-testid={`card-payment-${id}`}
      onClick={onClick}
      className="p-4 hover-elevate active-elevate-2 cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10">
          {avatar && <AvatarImage src={avatar} alt={tenantName} />}
          <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-base text-foreground truncate">
            {tenantName}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Due: {dueDate}</span>
          </div>
          {paymentMethod && (
            <p className="text-xs text-muted-foreground mt-1">
              {paymentMethod}
            </p>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-lg font-mono font-semibold text-foreground">
            ₹{amount.toLocaleString()}
          </p>
          <PaymentStatusBadge status={status} />
        </div>
      </div>
    </Card>
  );
}
