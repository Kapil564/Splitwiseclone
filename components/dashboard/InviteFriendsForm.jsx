"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { EmailInputField } from "./EmailInputField";
import { Send, UserPlus } from "lucide-react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
export function InviteFriendsForm() {
  const [emails, setEmails] = useState([{ id: "1", value: "", isValid: true }]);
  const [isSending, setIsSending] = useState(false);

  const addEmailField = () => {
    const newId = (emails.length + 1).toString();
    setEmails([...emails, { id: newId, value: "", isValid: true }]);
  };

  const removeEmailField = (id) => {
    if (emails.length > 1) {
      setEmails(emails.filter((email) => email.id !== id));
    }
  };

  const updateEmail = (id, value) => {
    setEmails(
      emails.map((email) =>
        email.id === id
          ? { ...email, value, isValid: validateEmail(value) }
          : email
      )
    );
  };

  const validateEmail = (email) => {
    if (email === "") return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSendInvites = async (e) => {
    e.preventDefault();
    const validEmails = emails.filter(
      (email) => email.value !== "" && email.isValid
    );

    if (validEmails.length === 0) {
      alert("Please enter at least one valid email address");
      return;
    }
    setIsSending(true);
    try {
      for (const e of validEmails) {
        const response = await fetch(`/api/email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: e.value,
            html: `
      <h2>Hey there!</h2>
      <p>You've been invited to join our BillBuddy app. Click below to accept the invite.</p>
      <a href="https://splitwiseclone.vercel.app/">Join Now</a>
    `,
          }),
        });
        console.log(`Email to ${e.value}:`, response);
      }

      alert(`Invitations sent to ${validEmails.length} email(s)!`);
    } catch (error) {
      console.error("Error sending invites:", error);
      alert("Failed to send invites. Please try again.");
    } finally {
      setIsSending(false);
      setEmails([{ id: "1", value: "", isValid: true }]);
    }
  };

  const canSend = emails.some((email) => email.value !== "" && email.isValid);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" />
          Send Invitations
        </CardTitle>
        <CardDescription>
          Enter email addresses of friends you want to invite to BillBuddy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {emails.map((email, index) => (
            <EmailInputField
              key={email.id}
              id={email.id}
              value={email.value}
              isValid={email.isValid}
              index={index}
              showRemove={emails.length > 1}
              onUpdate={updateEmail}
              onRemove={removeEmailField}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={addEmailField}
            className="flex-1"
            disabled={isSending}
          >
            <UserPlus className="h-4 w-4" />
            Add Another Email
          </Button>

          <Button
            onClick={handleSendInvites}
            disabled={!canSend || isSending}
            className="flex-1"
          >
            <Send className="h-4 w-4" />
            {isSending ? "Sending..." : "Send Invites"}
          </Button>
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Your friends will receive an email invitation
            to join BillBuddy and can start sharing expenses with you right
            away.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
