import { useState } from "react";
import TenantCard from "@/components/TenantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import avatar1 from '@assets/generated_images/Indian_male_tenant_avatar_11a9b965.png';
import avatar2 from '@assets/generated_images/Indian_female_tenant_avatar_f00d068d.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_male_avatar_5a051e15.png';
import avatar4 from '@assets/generated_images/Professional_Indian_woman_avatar_554033e3.png';

export default function Tenants() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  //todo: remove mock functionality - replace with real data
  const tenants = [
    {
      id: "1",
      name: "Rajesh Kumar",
      property: "Flat 204, Green Valley Apartments",
      rent: 15000,
      status: "paid" as const,
      lastPayment: "Dec 1, 2024",
      avatar: avatar1,
    },
    {
      id: "2",
      name: "Priya Sharma",
      property: "House 12, Sunrise Colony",
      rent: 22000,
      status: "pending" as const,
      lastPayment: "Nov 28, 2024",
      avatar: avatar2,
    },
    {
      id: "3",
      name: "Ramesh Iyer",
      property: "Flat 101, Palm Heights",
      rent: 18000,
      status: "paid" as const,
      lastPayment: "Dec 2, 2024",
      avatar: avatar3,
    },
    {
      id: "4",
      name: "Anita Desai",
      property: "Villa 8, Lakeside Residency",
      rent: 35000,
      status: "paid" as const,
      lastPayment: "Dec 1, 2024",
      avatar: avatar4,
    },
    {
      id: "5",
      name: "Amit Patel",
      property: "Shop 5, Market Street",
      rent: 18500,
      status: "overdue" as const,
      lastPayment: "Oct 15, 2024",
    },
    {
      id: "6",
      name: "Suresh Reddy",
      property: "Flat 305, Skyline Towers",
      rent: 25000,
      status: "overdue" as const,
      lastPayment: "Oct 28, 2024",
    },
  ];

  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || tenant.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-border px-4 py-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">Tenants</h1>
          <Button
            size="icon"
            data-testid="button-add-tenant"
            onClick={() => console.log('Add tenant')}
            className="rounded-full w-12 h-12"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-testid="input-search-tenants"
            placeholder="Search tenants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </header>

      <div className="px-4 py-4 space-y-4">
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="all" data-testid="filter-all">All</TabsTrigger>
            <TabsTrigger value="paid" data-testid="filter-paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue" data-testid="filter-overdue">Overdue</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-3">
          {filteredTenants.map((tenant) => (
            <TenantCard
              key={tenant.id}
              {...tenant}
              onClick={() => console.log('Tenant clicked:', tenant.id)}
            />
          ))}
        </div>

        {filteredTenants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tenants found</p>
          </div>
        )}
      </div>
    </div>
  );
}
