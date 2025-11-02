import TenantCard from '../TenantCard';
import avatar1 from '@assets/generated_images/Indian_male_tenant_avatar_11a9b965.png';

export default function TenantCardExample() {
  return (
    <div className="p-4 space-y-4">
      <TenantCard
        id="1"
        name="Rajesh Kumar"
        property="Flat 204, Green Valley Apartments"
        rent={15000}
        status="paid"
        lastPayment="Dec 1, 2024"
        avatar={avatar1}
        onClick={() => console.log('Tenant clicked')}
      />
      <TenantCard
        id="2"
        name="Priya Sharma"
        property="House 12, Sunrise Colony"
        rent={22000}
        status="pending"
        lastPayment="Nov 28, 2024"
        onClick={() => console.log('Tenant clicked')}
      />
      <TenantCard
        id="3"
        name="Amit Patel"
        property="Shop 5, Market Street"
        rent={18500}
        status="overdue"
        lastPayment="Oct 15, 2024"
        onClick={() => console.log('Tenant clicked')}
      />
    </div>
  );
}
