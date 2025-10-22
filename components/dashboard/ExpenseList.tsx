import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  date: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        <div className="text-center">
          <p className="text-foreground/60 text-lg">No expenses yet. Add your first expense!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Your Expenses</h2>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <Card key={expense.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{expense.description}</h3>
                  <p className="text-sm text-foreground/60">
                    Paid by {expense.paidBy} on {expense.date}
                  </p>
                </div>
                <Badge className="bg-orange text-white text-lg px-4 py-2">
                  ${expense.amount.toFixed(2)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}