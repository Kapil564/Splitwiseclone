"use client";

import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api"; // adjust path if needed
import { useState } from "react";


export const InviteEmails = ({ email }) => {
  const sendEmail = useAction(api.email.sendEmail); 
  const [status, setStatus] = useState(null);

  const handleSend = async () => {
    try {
      setStatus("sending...");

      const response = await sendEmail({
        to: email,
        subject: "You're invited to join BillBuddy 🎉",
        html: `
          <h2>Hey there!</h2>
          <p>You've been invited to join our BillBuddy app. Click below to accept the invite.</p>
          <a href="https://splitwiseclone.vercel.app/">Join Now</a>
        `,
        text: `You've been invited to join BillBuddy. Visit https://your-app-domain.com to accept the invite.`,
        apiKey: process.env.NEXT_PUBLIC_RESEND_API_KEY, // or pass it from server
      });

      if (response.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Failed to send email: ${response.error}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <p>Invite: {email}</p>
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send Invite
      </button>
      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </div>
  );
};
