import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PaymentStatusBadge from "./PaymentStatusBadge";
import { MapPin } from "lucide-react";

interface TenantCardProps {
  id: string;
  name: string;
  property: string;
  rent: number;
  status: "paid" | "pending" | "overdue";
  lastPayment?: string;
  avatar?: string;
  onClick?: () => void;
}

export default function TenantCard({
  id,
  name,
  property,
  rent,
  status,
  lastPayment,
  avatar,
  onClick,
}: TenantCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      data-testid={`card-tenant-${id}`}
      onClick={onClick}
      className="p-4 hover-elevate active-elevate-2 cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <Avatar className="w-12 h-12">
          {avatar && <AvatarImage src={avatar} alt={name} />}
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-foreground truncate">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{property}</span>
          </div>
          {lastPayment && (
            <p className="text-xs text-muted-foreground mt-1">
              Last payment: {lastPayment}
            </p>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-lg font-mono font-semibold text-foreground">
            ₹{rent.toLocaleString()}
          </p>
          <PaymentStatusBadge status={status} />
        </div>
      </div>
    </Card>
  );
}
