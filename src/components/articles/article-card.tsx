import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const ArticleCard = () => {
 return (
  <div className='flex flex-col group'>
   <div className='relative mb-6 transition-transform group-hover:scale-105 h-72'>
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
   <h3>
    <Link href='/home' className='block text-dark font-bold text-xl mb-3.5'>
     <span className='bg-gradient-to-r from-violet-200 to-violet-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
      Stylish Kitchen And Dining Room With Functional Ideas
     </span>
    </Link>
   </h3>
   <p className='text-secondary line-clamp-2 mb-[18px]'>
    Lorem Ipsum is simply dummy text of the print and typesetting industry Lorem
    Ipsum is simply dummy text of the print and typesetting industry...
   </p>
   <div className='flex flex-wrap gap-3 items-center justify-between'>
    <span className='text-secondary text-sm'>Sep 10, 2025</span>
    <Badge variant='primary'>Технології</Badge>
   </div>
  </div>
 );
};

export default ArticleCard;
