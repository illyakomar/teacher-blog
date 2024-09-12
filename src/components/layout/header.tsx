import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { LogoBigIcon } from '../icons/icons';
import { DashboardNav } from './dashboard-nav';
import { MobileSidebar } from './mobile-sidebar';

export default function Header() {
 return (
  <header className='sticky top-0 py-5'>
   <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
    <div className='flex items-center justify-between'>
     <div className='flex-grow'>
      <LogoBigIcon />
     </div>
     <div className='hidden md:block flex-grow'>
      <DashboardNav items={navItems} />
     </div>
     <div className={cn('block md:!hidden')}>
      <MobileSidebar />
     </div>
    </div>
   </div>
  </header>
 );
}
