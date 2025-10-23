"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import {
  Home,
  Users,
  Receipt,
  TrendingUp,
  Settings,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Contacts", href: "/dashboard/contacts" },
  { icon: Receipt, label: "Expenses", href: "/dashboard/expenses" },
  { icon: TrendingUp, label: "Activity", href: "/dashboard/activity" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-sidebar-bg border-r border-border">
      <ScrollArea className="h-full">
        <div className="flex flex-col h-full p-4">
          {/* Menu Items */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;
              
              return (
               <Link key={item.label} href={item.href}>
                <Button
                  key={item.label}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full cursor-pointer justify-start gap-3 ${
                    isActive ? "bg-sidebar-hover" : ""
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Button>
                </Link>
              );
            })}
          </nav>

          <Separator className="my-4" />

          {/* Send Invite Section */}
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Send className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Invite Friends</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Share expenses with friends and family
              </p>
                <Link href="/dashboard/invite-friends">
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => router.push("/dashboard/invite-friends")}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Invite
                  </Button>
                </Link>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  );
}