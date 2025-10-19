"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Split expenses effortlessly
              </span>
            </div>

            <h1 className="heading-xl text-foreground">
              Share Expenses{" "}
              <span className="gradient-text">Made Simple</span>
            </h1>

            <p className="body-lg text-foreground/70 max-w-xl">
              Track shared expenses with friends and family. Split bills, settle
              debts, and keep everyone in sync with our intuitive platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold bg-primary hover:bg-primary-dark text-white group"
              >
                Get Started for Free
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-foreground/60">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">$2B+</div>
                <div className="text-sm text-foreground/60">Expenses Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">150+</div>
                <div className="text-sm text-foreground/60">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1655807286510-a49644c29ef9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBtb2JpbGUlMjBhcHAlMjBwZW9wbGUlMjBtb25leXxlbnwwfDB8fGJsdWV8MTc2MDkwNDg0MXww&ixlib=rb-4.1.0&q=85"
                alt="Modern financial dashboard illustration - Mariia Shalabaieva on Unsplash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}