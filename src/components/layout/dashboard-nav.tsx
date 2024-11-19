'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { isActive } from '@/lib/helpers';
import { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
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
  <div className='flex flex-col gap-11 md:flex-row items-start justify-between flex-grow'>
   <nav className='flex items-start gap-5 lg:gap-7 flex-col md:flex-row'>
    {items.map((item, index) => (
     <Link
      key={index}
      href={item.href}
      className={cn(
       'rounded-md p-[10px] text-sm font-medium hover:bg-accent hover:text-accent-foreground',
       isActive(path, item.href) ? 'bg-accent' : 'transparent'
      )}
      onClick={() => {
       if (setOpen) setOpen(false);
      }}
     >
      {item.title}
     </Link>
    ))}
   </nav>
   <div className='flex gap-6 w-full md:w-auto justify-center'>
    <ThemeToggle />
   </div>
  </div>
 );
}
