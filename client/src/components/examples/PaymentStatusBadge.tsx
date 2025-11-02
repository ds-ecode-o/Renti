import PaymentStatusBadge from '../PaymentStatusBadge';

export default function PaymentStatusBadgeExample() {
  return (
    <div className="flex gap-2 flex-wrap">
      <PaymentStatusBadge status="paid" />
      <PaymentStatusBadge status="pending" />
      <PaymentStatusBadge status="overdue" />
    </div>
  );
}
