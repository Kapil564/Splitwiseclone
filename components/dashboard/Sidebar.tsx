'use client';

import { LayoutGrid, Clock, List } from 'lucide-react';
import { SidebarNavItem } from './SidebarNavItem';
import { SidebarSection } from './SidebarSection';
import { InviteFriendsForm } from './InviteFriendsForm';

interface Friend {
  id: string;
  name: string;
  email: string;
  balance: number;
}

interface SidebarProps {
  activeItem?: string;
  onActiveItemChange?: (item: string) => void;
  friends?: Friend[];
  onAddFriend?: () => void;
}

export function Sidebar({ 
  activeItem = 'dashboard', 
  onActiveItemChange,
  friends = [],
  onAddFriend 
}: SidebarProps) {
  return (
    <aside className="fixed left-0 top- h-screen w-64 bg-sidebar-bg border-r border-border flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <nav className="py-4">
          <SidebarNavItem
            icon={LayoutGrid}
            label="Dashboard"
            isActive={activeItem === 'dashboard'}
            onClick={() => onActiveItemChange?.('dashboard')}
          />
          <SidebarNavItem
            icon={Clock}
            label="Recent activity"
            isActive={activeItem === 'recent'}
            onClick={() => onActiveItemChange?.('recent')}
          />
          <SidebarNavItem
            icon={List}
            label="All expenses"
            isActive={activeItem === 'expenses'}
            onClick={() => onActiveItemChange?.('expenses')}
          />
        </nav>

        <SidebarSection
          title="GROUPS"
          emptyMessage="You do not have any groups yet."
          onAdd={() => console.log('Add group')}
        />

        <SidebarSection
          title="FRIENDS"
          emptyMessage="You have not added any friends yet."
          onAdd={onAddFriend}
          isEmpty={friends.length === 0}
        >
        </SidebarSection>
      </div>

      <InviteFriendsForm />
    </aside>
  );
}