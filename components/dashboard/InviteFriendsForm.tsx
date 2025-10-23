"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { EmailInputField } from "./EmailInputField";
import { Send, UserPlus } from "lucide-react";

interface EmailEntry {
  id: string;
  value: string;
  isValid: boolean;
}

export function InviteFriendsForm() {
  const [emails, setEmails] = useState<EmailEntry[]>([
    { id: "1", value: "", isValid: true },
  ]);
  const [isSending, setIsSending] = useState(false);

  const addEmailField = () => {
    const newId = (emails.length + 1).toString();
    setEmails([...emails, { id: newId, value: "", isValid: true }]);
  };

  const removeEmailField = (id: string) => {
    if (emails.length > 1) {
      setEmails(emails.filter((email) => email.id !== id));
    }
  };

  const updateEmail = (id: string, value: string) => {
    setEmails(
      emails.map((email) =>
        email.id === id
          ? { ...email, value, isValid: validateEmail(value) }
          : email
      )
    );
  };

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendInvites = async () => {
    const validEmails = emails.filter(
      (email) => email.value !== "" && email.isValid
    );

    if (validEmails.length === 0) {
      alert("Please enter at least one valid email address");
      return;
    }

    setIsSending(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSending(false);
    alert(`Invitations sent to ${validEmails.length} email(s)!`);
    
    // Reset form
    setEmails([{ id: "1", value: "", isValid: true }]);
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
          Enter email addresses of friends you want to invite to Splitwise
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
            to join Splitwise and can start sharing expenses with you right away.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}