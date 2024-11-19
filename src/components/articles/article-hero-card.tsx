import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface IProps {
 isMain: boolean;
}

const ArticleHeroCard = (props: IProps) => {
 const { isMain } = props;
 return (
  <div
   className={cn(
    'p-4 lg:p-2.5 w-full flex flex-col lg:flex-row lg:items-center gap-7 bg-card rounded-xl shadow-md',
    !isMain && 'w-full lg:max-w-[570px]'
   )}
  >
   <div
    className={cn(
     'relative flex items-center justify-center lg:max-w-[536px] w-full',
     isMain ? 'h-[300px]' : 'h-[200px]'
    )}
   >
    <Link href='/home'>
     <Image
      src='https://teacher-blog-admin-dashboard.vercel.app/api/file/4850ed7e-b7ce-4952-b1da-cac8f08cdddb'
      alt='Post Image'
      fill
      sizes='100vw'
      style={{ objectFit: 'cover', borderRadius: '8px' }}
      priority
     />
    </Link>
   </div>
   <div>
    <Badge variant='primary' className='mb-4'>
     Технології
    </Badge>
    <h2
     className={cn(
      'font-bold text-primary mb-4',
      isMain ? 'text-2xl xl:text-3xl' : 'text-lg'
     )}
    >
     <Link href='/home'>
      Begin here to obtain a brief summary encoumpany all the essential
     </Link>
    </h2>
    {isMain && (
     <p className='text-secondary my-3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at
      justo ullamcorper vulputate. Donec mattis aliquam urna
     </p>
    )}
    <span className='text-secondary text-sm'>Sep 10, 2025</span>
   </div>
  </div>
 );
};

export default ArticleHeroCard;
