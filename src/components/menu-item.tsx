import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
interface MenuIconProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

function MenuItem({ className, icon, text }: MenuIconProps) {
  return (
    <div
      className={cn(
        'flex flex-row text-center items-center justify-center space-x-2',
        className,
      )}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default MenuItem