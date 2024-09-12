'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { LogoBigIcon } from '../icons/icons';
import { DashboardNav } from './dashboard-nav';

export function MobileSidebar() {
 const [open, setOpen] = useState(false);
 return (
  <>
   <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
     <MenuIcon />
    </SheetTrigger>
    <SheetContent side='left' className='!px-0'>
     <div className='space-y-4 py-4'>
      <div className='px-3 py-2'>
       <div className='p-2 mb-7'>
        <LogoBigIcon />
       </div>
       <div className='space-y-1'>
        <DashboardNav items={navItems} setOpen={setOpen} />
       </div>
      </div>
     </div>
    </SheetContent>
   </Sheet>
  </>
 );
}
