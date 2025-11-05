"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Calculator,Bell,Users,Smartphone,Shield, Globe,TrendingUp,CreditCard,} from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Sparkles } from "lucide-react";
export default function Features() {
  const colorToBg = (color) => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "secondary":
        return "bg-secondary/10";
      case "accent":
        return "bg-accent/10";
      default:
        return "bg-primary/10";
    }
  };

  const colorToText = (color) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };
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
    <section id="features" className="relative py-24 bg-transparent overflow-hidden">
      {/* Luxurious Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-secondary/25 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/25 to-transparent rounded-full blur-3xl animate-float-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="glass-effect text-primary border-2 border-primary/50 font-bold tracking-wide px-4 py-1.5 uppercase">
            Features
          </Badge>
          <h2 className="heading-lg text-foreground">
            Everything You Need to{" "}
            <span className="gradient-text">Split Smart</span>
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
                className="relative p-6 transition-all duration-300 hover:-translate-y-2 border-2 border-border glass-effect group overflow-hidden hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${colorToBg(
                    feature.color
                  )} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 ${
                    feature.color === 'primary' ? 'border-primary/30' : 
                    feature.color === 'secondary' ? 'border-secondary/30' : 
                    'border-accent/30'
                  }`}
                >
                  <Icon size={26} className={colorToText(feature.color)} />
                </div>
                <h3 className="heading-sm text-foreground mb-2 font-bold">
                  {feature.title}
                </h3>
                <p className="body-md text-foreground/75 text-sm">
                  {feature.description}
                </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/40">
          <div className="glass-effect-strong rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 mesh-gradient opacity-50"></div>
            <div className="relative text-center space-y-6">
              <h3 className="heading-md text-foreground font-bold drop-shadow-lg">
                Ready to <span className="gradient-text">Simplify</span> Your Expenses?
              </h3>
              <p className="body-lg text-foreground/80 max-w-2xl mx-auto">
                Join millions of users who trust Splitwise to manage their
                shared expenses. Get started in seconds, no credit card
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignUpButton>
                <Button
                size="lg"
                className="font-bold bg-primary hover:bg-primary-dark text-primary-foreground group hover:scale-105 transition-all duration-300"
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