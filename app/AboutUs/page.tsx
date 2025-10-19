"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To simplify expense sharing and make financial transparency accessible to everyone, everywhere.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Built by users, for users. We listen to feedback and continuously improve based on your needs.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology to provide the fastest, most reliable expense tracking experience.",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            About Us
          </Badge>
          <h2 className="heading-lg text-foreground">
            Trusted by Millions <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="body-lg text-foreground/70 max-w-3xl mx-auto">
            Since 2012, we've been helping people split expenses fairly and
            transparently. From roommates to travelers, our platform has
            facilitated billions in shared expenses.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-background"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${value.color}/20 to-${value.color}/5 flex items-center justify-center mb-6`}
                >
                  <Icon size={28} className={value.color} />
                </div>
                <h3 className="heading-sm text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="body-md text-foreground/70">{value.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="heading-md text-foreground">Our Story</h3>
              <p className="body-md text-foreground/70">
                What started as a simple tool for college roommates has grown
                into the world's most popular expense sharing platform. We
                believe that money shouldn't complicate relationships, and our
                mission is to keep things simple, fair, and transparent.
              </p>
              <p className="body-md text-foreground/70">
                Today, millions of users across 150+ countries trust Splitwise
                to manage their shared expenses, from daily coffee runs to
                international trips.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold gradient-text mb-2">12+</div>
                <div className="text-sm text-foreground/60">Years of Service</div>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-sm text-foreground/60">Uptime</div>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-foreground/60">Support</div>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold gradient-text mb-2">4.8★</div>
                <div className="text-sm text-foreground/60">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}