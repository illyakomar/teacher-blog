'use client';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LogoBigIcon } from '../icons/icons';
import Container from './container';
import { DashboardNav } from './dashboard-nav';
import { MobileSidebar } from './mobile-sidebar';

export default function Header() {
 const [stickyMenu, setStickyMenu] = useState<boolean>(false);

 const handleScroll = () => {
  setStickyMenu(window.scrollY > 0);
 };

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
  <header
   className={cn(
    'sticky top-0 py-5 bg-background z-10',
    stickyMenu && 'shadow'
   )}
  >
   <Container>
    <div className='flex items-center justify-between'>
     <div className='flex-grow'>
      <Link href='/'>
       <LogoBigIcon />
      </Link>
     </div>
     <div className='hidden md:block flex-grow'>
      <DashboardNav items={navItems} />
     </div>
     <div className={cn('block md:!hidden')}>
      <MobileSidebar />
     </div>
    </div>
   </Container>
  </header>
 );
}
