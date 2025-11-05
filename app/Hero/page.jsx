"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-transparent"
    >
      {/* Luxurious Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent"></div>
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-32 w-[700px] h-[700px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-secondary/25 to-secondary/10 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green/20 backdrop-blur-sm rounded-full border-2 border-green/40">
              <Sparkles size={16} className="text-green animate-pulse" />
              <span className="text-sm font-bold text-green tracking-wide uppercase">
                Split expenses effortlessly
              </span>
            </div>

            <h1 className="heading-xl text-foreground drop-shadow-2xl">
              Share Expenses{" "}
              <span className="gradient-text animate-shimmer">Made Simple</span>
            </h1>

            <p className="body-lg text-foreground/80 max-w-xl drop-shadow-lg">
              Track shared expenses with friends and family. Split bills, settle
              debts, and keep everyone in sync with our intuitive platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SignUpButton>
                <Button
                size="lg"
                className="font-bold bg-green hover:bg-green/90 text-white group hover:scale-105 transition-all duration-300"
              >
                Get Started for Free
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              </SignUpButton>
              
              <Button size="lg" variant="outline" className="font-bold glass-effect border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all duration-300">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-1xl font-bold text-foreground">Easy </div>
                <div className="text-sm text-foreground/100">to Use</div>
              </div>
              <div>
                <div className="text-1xl font-bold text-foreground">Secure & </div>
                <div className="text-sm text-foreground/100">Transparent</div>
              </div>
              <div>
                <div className="text-1xl font-bold text-foreground">For Friends,</div>
                <div className="text-sm text-foreground/100"> Families & Teams</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 premium-gradient opacity-30 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/40">
              <Image
                src="/images/image.jpg"
                alt="Modern financial dashboard illustration - Mariia Shalabaieva on Unsplash"
                className="w-full h-full object-cover opacity-90"
                height={800}
                width={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}