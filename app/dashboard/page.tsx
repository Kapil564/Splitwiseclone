'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { WelcomeScreen } from '@/components/dashboard/WelcomeScreen';
import { AddExpenseForm } from '@/components/dashboard/AddExpenseForm';
import { ExpenseList } from '@/components/dashboard/ExpenseList';
import { AddFriendForm } from '@/components/dashboard/AddFriendForm';

interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  date: string;
}

interface Friend {
  id: string;
  name: string;
  email: string;
  balance: number;
}

type ViewType = 'welcome' | 'addExpense' | 'expenseList' | 'addFriend';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>('welcome');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleAddExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses([...expenses, newExpense]);
    setCurrentView(expenses.length > 0 ? 'expenseList' : 'welcome');
  };

  const handleAddFriend = (friend: Omit<Friend, 'id' | 'balance'>) => {
    const newFriend = {
      ...friend,
      id: Date.now().toString(),
      balance: 0,
    };
    setFriends([...friends, newFriend]);
    setCurrentView('welcome');
  };

  const handleShowExpenseForm = () => {
    setCurrentView('addExpense');
  };

  const handleShowFriendForm = () => {
    setCurrentView('addFriend');
  };

  const handleCancel = () => {
    if (expenses.length > 0) {
      setCurrentView('expenseList');
    } else {
      setCurrentView('welcome');
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'addExpense':
        return <AddExpenseForm onAddExpense={handleAddExpense} onCancel={handleCancel} />;
      case 'addFriend':
        return <AddFriendForm onAddFriend={handleAddFriend} onCancel={handleCancel} />;
      case 'expenseList':
        return <ExpenseList expenses={expenses} />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <DashboardLayout 
      onAddExpense={handleShowExpenseForm}
      friends={friends}
      onAddFriend={handleShowFriendForm}
      activeItem={activeItem}
      onActiveItemChange={setActiveItem}
    >
      {renderContent()}
    </DashboardLayout>
  );
}