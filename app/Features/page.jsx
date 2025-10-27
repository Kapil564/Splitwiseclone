"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Calculator,Bell,Users,Smartphone,Shield, Globe,TrendingUp,CreditCard,} from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Sparkles } from "lucide-react";
export default function Features() {
  const features = [
    {
      icon: Calculator,
      title: "Smart Splitting",
      description:
        "Automatically calculate who owes what with our intelligent algorithms. Split equally, by percentage, or by exact amounts.",
      color: "primary",
    },
    {
      icon: Bell,
      title: "Payment Reminders",
      description:
        "Never forget to settle up. Get gentle reminders when payments are due and track who's paid.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Group Expenses",
      description:
        "Create groups for trips, households, or events. Keep all related expenses organized in one place.",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web",
      description:
        "Access your expenses anywhere with our native mobile apps and responsive web interface.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your data is encrypted and secure. We never store your banking credentials or sensitive information.",
      color: "secondary",
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description:
        "Travel internationally? We support 150+ currencies with real-time exchange rates.",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Expense Analytics",
      description:
        "Visualize your spending patterns with detailed charts and insights into your shared expenses.",
      color: "primary",
    },
    {
      icon: CreditCard,
      title: "Easy Settlements",
      description:
        "Settle debts directly through the app with integrated payment options like Venmo, PayPal, and more.",
      color: "secondary",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Features
          </Badge>
          <h2 className="heading-lg text-foreground">
            Everything You Need to{" "}
            <span>Split Smart</span>
          </h2>
          <p className="body-lg text-foreground/70 max-w-3xl mx-auto">
            Powerful features designed to make expense sharing effortless,
            transparent, and stress-free for everyone involved.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-background group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className={`text-${feature.color}`} />
                </div>
                <h3 className="heading-sm text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="body-md text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1">
          <div className="bg-background rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h3 className="heading-md text-foreground">
                Ready to Simplify Your Expenses?
              </h3>
              <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
                Join millions of users who trust Splitwise to manage their
                shared expenses. Get started in seconds, no credit card
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignUpButton>
                <Button
                size="lg"
                className="font-semibold bg-primary hover:bg-primary-dark hover:cursor-pointer text-white group"
              >
                Get Started for Free
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              </SignUpButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}