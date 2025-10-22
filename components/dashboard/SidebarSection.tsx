import { Plus, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { ReactNode } from 'react';

interface SidebarSectionProps {
  title: string;
  emptyMessage: string;
  onAdd?: () => void;
  children?: ReactNode;
  isEmpty?: boolean;
}

export function SidebarSection({ title, emptyMessage, onAdd, children, isEmpty = true }: SidebarSectionProps) {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
          {title}
        </span>
        <button
          onClick={onAdd}
          className="text-accent hover:text-accent/80 transition-colors"
          aria-label={`Add ${title.toLowerCase()}`}
        >
          <Plus size={14} />
        </button>
      </div>
      {isEmpty ? (
        <div className="flex items-start gap-2 text-xs text-foreground/60 py-2">
          <Info size={14} className="mt-0.5 shrink-0" />
          <span>{emptyMessage}</span>
        </div>
      ) : (
        <div className="space-y-1">
          {children}
        </div>
      )}
      <Separator className="mt-3" />
    </div>
  );
}