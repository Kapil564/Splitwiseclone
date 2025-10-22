import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface Friend {
  id: string;
  name: string;
  email: string;
  balance: number;
}

interface DashboardLayoutProps {
  children: ReactNode;
  onAddExpense?: () => void;
  friends?: Friend[];
  onAddFriend?: () => void;
  activeItem?: string;
  onActiveItemChange?: (item: string) => void;
}

export function DashboardLayout({ 
  children, 
  onAddExpense, 
  friends = [],
  onAddFriend,
  activeItem,
  onActiveItemChange
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
       <Navbar onAddExpense={onAddExpense} />
      <div className="ml-64">
       <Sidebar 
         friends={friends}
         onAddFriend={onAddFriend}
         activeItem={activeItem}
         onActiveItemChange={onActiveItemChange}
       />
        <main className="pt-16">
            {children} 
        </main>
      </div>
    </div>
  );
}