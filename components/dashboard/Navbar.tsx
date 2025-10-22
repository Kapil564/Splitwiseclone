"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  onAddExpense?: () => void;
}

export function Navbar({ onAddExpense }: NavbarProps) {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-background border-b border-border z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-foreground gradient-text">
              Splitwise
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Add an expense and settle up buttons */}
          
            <Button
              className="bg-orange hover:bg-orange/90 text-white"
              size="default"
              onClick={onAddExpense}
            >
              Add an expense
            </Button>
          {/*settleup button*/}
          <Button
            className="bg-green hover:bg-green/90 text-white"
            size="default"
          >
            Settle up
          </Button>
          <SignedIn>
              <Link href={"/dashboard"}>
                    <Button>
                      <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                      <span className="hidden md:inline cursor-pointer hover:text-white">
                        Dashboard
                      </span>
                    </Button>
                  </Link>
            <button
              className="ml-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="My account"
            >
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "2.4rem",
                      height: "2.4rem",
                    },
                  },
                }}
              />
            </button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
