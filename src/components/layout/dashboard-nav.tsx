'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '../ui/button';
import ThemeToggle from '../ui/theme-toggle';

interface DashboardNavProps {
 items: NavItem[];
 setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
 const path = usePathname();

 if (!items?.length) {
  return null;
 }

 return (
  <div className='flex items-center justify-between flex-grow'>
   <nav className='flex items-start gap-5 lg:gap-7 flex-col md:flex-row'>
    {items.map((item, index) => (
     <Link
      key={index}
      href={item.href}
      className={cn(
       'rounded-md p-[10px] text-sm font-medium hover:bg-accent hover:text-accent-foreground',
       path.startsWith(item.href) ? 'bg-accent' : 'transparent'
      )}
      onClick={() => {
       if (setOpen) setOpen(false);
      }}
     >
      {item.title}
     </Link>
    ))}
   </nav>
   <div className='flex gap-6'>
    <ThemeToggle />
    <Button>Вхід</Button>
   </div>
  </div>
 );
}
