import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";

let functions = [];
console.log("resend api key", process.env.RESEND_API_KEY);
if (process.env.RESEND_API_KEY) {
  // top-level await is supported in Next server files
  const { paymentReminders } = await import("@/lib/inngest/payment-reminders");
  const { spendingInsights } = await import("@/lib/inngest/spending-insights");
  functions = [paymentReminders, spendingInsights];
}

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions,
});