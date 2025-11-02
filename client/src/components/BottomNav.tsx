import { Home, Users, CreditCard, BarChart3, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/tenants", icon: Users, label: "Tenants" },
    { path: "/payments", icon: CreditCard, label: "Payments" },
    { path: "/reports", icon: BarChart3, label: "Reports" },
    { path: "/settings", icon: Settings, label: "More" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-16 flex items-center justify-around z-50">
      {navItems.map((item) => {
        const isActive = location === item.path;
        const Icon = item.icon;
        
        return (
          <Link key={item.path} href={item.path}>
            <button
              data-testid={`nav-${item.label.toLowerCase()}`}
              className="flex flex-col items-center justify-center gap-1 min-w-[64px] h-full hover-elevate"
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
