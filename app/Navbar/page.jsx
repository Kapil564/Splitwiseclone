"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useStoreUser } from "@/hooks/use-store-user";
import { SignInButton ,UserButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { LayoutDashboardIcon } from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  const { isLoading } = useStoreUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-strong border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-foreground"
            >
              BillBuddy
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Authenticated>
              <Link href={"/dashboard"}>
                <Button className="font-bold px-3 py-2 rounded-3xl bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 transition-all">
                  <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline cursor-pointer">
                    Dashboard
                  </span>
                </Button>
              </Link>
             <UserButton appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "2.4rem",
                      height: "2.4rem",
                    },
                  },
                }} />
            </Authenticated>

            <Unauthenticated>
              <SignInButton>
                <button className="font-bold px-3 py-2 rounded-3xl hover:bg-muted/50 transition-all">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="font-bold px-3 py-2 rounded-3xl bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 transition-all">
                  Get Started for Free
                </button>
              </SignUpButton>
            </Unauthenticated>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Features
            </button>
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
              <SignInButton>
                <button className="w-full font-bold px-3 py-2 rounded-lg hover:bg-muted/50 transition-all">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full font-bold px-3 py-2 rounded-lg bg-primary hover:bg-primary-dark text-primary-foreground transition-all">
                  Get Started for Free
                </button>
              </SignUpButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
