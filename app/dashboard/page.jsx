"use client";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useEffect } from "react";


import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
   const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    // if user has signed out, redirect to home
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  // Avoid rendering Convex queries until user is confirmed signed in
  if (!isLoaded) return null; // Optional: show a loading spinner here
  if (!isSignedIn) return null;
  return (<DashboardLayout />)
}