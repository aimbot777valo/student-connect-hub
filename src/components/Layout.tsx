import { Home, MessageSquare, ShoppingBag, HelpCircle, BookOpen, Building, Award, Megaphone, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "General Chat", href: "/chat", icon: MessageSquare },
  { name: "Buy & Sell", href: "/marketplace", icon: ShoppingBag },
  { name: "Q&A", href: "/qna", icon: HelpCircle },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Hostels", href: "/hostels", icon: Building },
  { name: "Achievements", href: "/achievements", icon: Award },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card transition-transform">
        <div className="flex h-full flex-col gap-2 px-3 py-4">
          <div className="mb-4 px-3">
            <h1 className="text-xl font-bold text-foreground">Student Welfare</h1>
            <p className="text-sm text-muted-foreground">Community</p>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                activeClassName="bg-accent text-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
