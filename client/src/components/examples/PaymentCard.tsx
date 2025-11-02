import PaymentCard from '../PaymentCard';
import avatar2 from '@assets/generated_images/Indian_female_tenant_avatar_f00d068d.png';

export default function PaymentCardExample() {
  return (
    <div className="p-4 space-y-4">
      <PaymentCard
        id="1"
        tenantName="Priya Sharma"
        amount={22000}
        dueDate="Dec 5, 2024"
        status="paid"
        paymentMethod="Bank Transfer"
        avatar={avatar2}
        onClick={() => console.log('Payment clicked')}
      />
      <PaymentCard
        id="2"
        tenantName="Amit Patel"
        amount={18500}
        dueDate="Dec 10, 2024"
        status="pending"
        paymentMethod="Cash"
        onClick={() => console.log('Payment clicked')}
      />
      <PaymentCard
        id="3"
        tenantName="Suresh Reddy"
        amount={25000}
        dueDate="Nov 5, 2024"
        status="overdue"
        onClick={() => console.log('Payment clicked')}
      />
    </div>
  );
}
