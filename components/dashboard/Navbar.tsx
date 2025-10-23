"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b border-border">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="heading-md px-2 gradient-text">Splitwise</span>
        </div>

        {/* Right side - Dashboard button and User button */}
        <div className="flex items-center gap-3">
            <Link href="/dashboard">
          <Button variant="outline" size="sm" className="gap-2">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Button>
            </Link>

          <UserButton  />
        </div>
      </div>
    </nav>
  );
}