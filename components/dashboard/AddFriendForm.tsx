'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AddFriendFormProps {
  onAddFriend: (friend: { name: string; email: string }) => void;
  onCancel: () => void;
}

export function AddFriendForm({ onAddFriend, onCancel }: AddFriendFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }

    onAddFriend({ name, email });

    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Add a friend</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="friendName">Friend&apos;s Name</Label>
              <Input
                id="friendName"
                placeholder="Enter friend's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="friendEmail">Email Address</Label>
              <Input
                id="friendEmail"
                type="email"
                placeholder="friend@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-green hover:bg-green/90 text-white"
              >
                Add friend
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}