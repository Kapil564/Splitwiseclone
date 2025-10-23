"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X, Mail } from "lucide-react";

interface EmailInputFieldProps {
  id: string;
  value: string;
  isValid: boolean;
  index: number;
  showRemove: boolean;
  onUpdate: (id: string, value: string) => void;
  onRemove: (id: string) => void;
}

export function EmailInputField({
  id,
  value,
  isValid,
  index,
  showRemove,
  onUpdate,
  onRemove,
}: EmailInputFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={`email-${id}`} className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        Email {index + 1}
      </Label>
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            id={`email-${id}`}
            type="email"
            placeholder="friend@example.com"
            value={value}
            onChange={(e) => onUpdate(id, e.target.value)}
            aria-invalid={!isValid && value !== ""}
            className={
              !isValid && value !== ""
                ? "border-destructive focus-visible:ring-destructive/20"
                : ""
            }
          />
          {!isValid && value !== "" && (
            <p className="text-xs text-destructive mt-1">
              Please enter a valid email address
            </p>
          )}
        </div>
        {showRemove && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => onRemove(id)}
            aria-label="Remove email field"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}