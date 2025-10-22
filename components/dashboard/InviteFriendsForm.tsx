'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function InviteFriendsForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSendInvite = async () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }

    try {
      setStatus('Sending invite...');

      const res = await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('✅ Invite sent successfully!');
        setEmail('');
      } else {
        setStatus(`❌ Failed to send invite: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Something went wrong while sending the invite.');
    }
  };

  return (
    <div className="px-4 py-4 bg-green/5 border-t border-border rounded-md">
      <h3 className="text-sm font-semibold text-foreground mb-3">Invite friends</h3>
      <Input
        type="email"
        placeholder="Enter an email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 h-9 text-sm"
      />
      <Button
        onClick={handleSendInvite}
        variant="outline"
        size="sm"
        className="w-full mb-3"
        disabled={!email || status === 'Sending invite...'}
      >
        {status === 'Sending invite...' ? 'Sending...' : 'Send Invite'}
      </Button>
      {status && <p className="text-xs text-muted-foreground">{status}</p>}
    </div>
  );
}
