'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AddExpenseFormProps {
  onAddExpense: (expense: {
    description: string;
    amount: number;
    paidBy: string;
    date: string;
    split:string;
  }) => void;
  onCancel: () => void;
}

export function AddExpenseForm({ onAddExpense, onCancel }: AddExpenseFormProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [users, setUsers] = useState([]);
  const friends=["friend1","friend2","friend3","friend4","friend5"];
  const [split, setSplit] = useState('');
  const [currency, setCurrency] = useState('');







  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description || !amount || !paidBy) {
      alert('Please fill in all fields');
      return;
    }

    onAddExpense({
      description,
      amount: parseFloat(amount),
      paidBy,
      date: new Date().toLocaleDateString(),
      split
    });

    // Reset form
    setDescription('');
    setAmount('');
    setPaidBy('');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <Card className="w-[500px] max-w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Add an expense</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="What was this expense for?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 flex  gap-2">
              <div className="space-y-2">
                  <Label htmlFor="SelectCurrency">Currency</Label>
                  <Select value={currency} onValueChange={setCurrency} required>
                  <SelectTrigger id="SelectCurrency">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                   <SelectContent>
                     <ScrollArea className="h-32 bg-blue-200 text-black">
                       <SelectItem value="INR" className="text-black">INR</SelectItem>
                       <SelectItem value="USD" className="text-black">USD</SelectItem>
                       <SelectItem value="EUR" className="text-black">EUR</SelectItem>
                       <SelectItem value="GBP" className="text-black">GBP</SelectItem>
                       <SelectItem value="JPY" className="text-black">JPY</SelectItem>
                     </ScrollArea>
                   </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="1"
                      min="1"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
            </div>

            <div className="space-y-2 flex gap-2">
              <div className="w-1/2 space-y-2" >
              <Label htmlFor="paidBy">Paid by</Label>
              <Select value={paidBy} onValueChange={setPaidBy} required>
                <SelectTrigger id="paidBy">
                  <SelectValue placeholder="Select who paid" />
                </SelectTrigger>
                 <SelectContent>
                   <ScrollArea className="h-40  bg-blue-200 text-black">
                   
                   </ScrollArea>
                 </SelectContent>
              </Select>
              </div>
              <div  className="w-1/2 space-y-2">
              <Label htmlFor="split">Split</Label>
              <Select value={split} onValueChange={setSplit} required>
                <SelectTrigger id="Split">
                  <SelectValue placeholder="Split With" />
                </SelectTrigger>
                 <SelectContent>
                   <ScrollArea className="h-32  bg-blue-200 text-black">
                     <SelectItem value="equally" defaultChecked>equally</SelectItem>
                     <SelectItem value="all by you"> all by you</SelectItem>
                     <SelectItem value="all by others"> all by others</SelectItem>
                   </ScrollArea>
                 </SelectContent>
              </Select>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="cursor-pointer "
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-orange cursor-pointer hover:bg-orange/90 text-white"
              >
                Add expense
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}