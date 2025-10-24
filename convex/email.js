import { v } from "convex/values";
import { action } from "./_generated/server";
import { Resend } from "resend";

// Action to send email using Resend
export const sendEmail = action({
  args: {
    to: v.string(),
    subject: v.string(),
    html: v.string(),
    text: v.optional(v.string()),
    apikey: v.optional(v.object({})),
  },
  handler: async (ctx, args) => {
    const takeapikey=process.env.RESEND_API_KEY
    if(!takeapikey){
      return { success: false, error: "RESEND_API_KEY could not fetch" };
    }
    const resend = new Resend(takeapikey || args.apikey);
    try {
      const result = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: args.to,
        subject: args.subject,
        html: args.html,
        text: args.text,
      });

      console.log("Email sent successfully:", result);

      return { success: true, id: result.id };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: error.message };
    }
  },
});