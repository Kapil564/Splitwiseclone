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
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Luxurious Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-accent/25 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-primary/25 to-transparent rounded-full blur-3xl animate-float-slow delay-700"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="glass-effect text-primary border-2 border-primary/50 font-bold tracking-wide px-4 py-1.5 uppercase">
            About Us
          </Badge>
          <h2 className="heading-lg text-foreground">
            Trusted by Millions <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="body-lg text-foreground/70 max-w-3xl mx-auto">
            Since 2012, we&apos;ve been helping people split expenses fairly and
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
                className="relative p-8 transition-all duration-300 hover:-translate-y-2 border-2 border-border glass-effect overflow-hidden group hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border-2 ${
                    value.color === 'text-primary' ? 'border-primary/30' :
                    value.color === 'text-secondary' ? 'border-secondary/30' :
                    'border-accent/30'
                  }`}
                >
                  <Icon size={30} className={value.color} />
                </div>
                <h3 className="heading-sm text-foreground mb-3 font-bold">
                  {value.title}
                </h3>
                <p className="body-md text-foreground/75">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="relative glass-effect-strong rounded-3xl p-8 md:p-12 border-2 border-primary/30 overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-30"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="heading-md text-foreground">Our Story</h3>
              <p className="body-md text-foreground/70">
              What began as a simple college project to help friends split bills quickly grew into something bigger.
              We realized people needed an easier, affordable way to manage shared expenses.<br />
              Now, we're building a platform that keeps things simple, transparent, and fair — for everyone.
              </p>
              <p className="body-md text-foreground/70">
              We’re building a smarter way for friends, families,
              and teams to share expenses — anywhere in the world.
              </p>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6 border-2 border-primary/30 hover:border-primary/50 transition-all hover:cyan-glow group">
                <div className="text-4xl font-bold  mb-2">2025</div>
                <div className="text-sm text-foreground/70 font-medium"> Started as aCollege Project</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-2 border-secondary/30 hover:border-secondary/50 transition-all hover:purple-glow group">
                <div className="text-4xl font-bold  mb-2">🚀</div>
                <div className="text-sm text-foreground/70 font-medium">Uptime</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-2 border-accent/30 hover:border-accent/50 transition-all hover:blue-glow group">
                <div className="text-4xl font-bold mb-2">💬</div>
                <div className="text-sm text-foreground/70 font-medium">Support</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 border-2 border-primary/30 hover:border-primary/50 transition-all hover:cyan-glow group">
                <div className="text-4xl font-bold  mb-2">❤️</div>
                <div className="text-sm text-foreground/70 font-medium">Early Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}