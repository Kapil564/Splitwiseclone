import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({ icon: Icon, label, isActive = false, onClick }: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 w-full px-4 py-3 text-left transition-colors rounded-sm',
        isActive
          ? 'bg-sidebar-hover text-foreground font-medium'
          : 'text-foreground/70 hover:bg-sidebar-hover/50 hover:text-foreground'
      )}
    >
      <Icon size={20} />
      <span className="text-sm">{label}</span>
    </button>
  );
}