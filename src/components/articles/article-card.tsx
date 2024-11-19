import { getFullDate } from '@/lib/helpers';
import { ArticleEntity } from '@/types/entities';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface Props extends ArticleEntity {}

const ArticleCard = (props: Props) => {
 const { _id, img, description, title, category, createdAt } = props;

 return (
  <div className='flex flex-col group justify-between'>
   <div className='relative mb-6 transition-transform group-hover:scale-105 h-72'>
    <Link href={`/articles/${_id}`}>
     <Image
      src={`${process.env.NEXT_API_URL}/api/file/${img}`}
      alt='Post Image'
      fill
      sizes='(max-width: 640px) 100vw, (min-width: 640px) 50vw, (min-width: 1024px) 33vw'
      style={{ objectFit: 'cover', borderRadius: '8px' }}
      priority
      placeholder='blur'
     />
    </Link>
   </div>
   <div className='line-clamp-2'>
    <h3>
     <Link href={`/articles/${_id}`} className='block font-bold text-xl'>
      <span className='bg-gradient-to-r from-violet-200 to-violet-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
       {title}
      </span>
     </Link>
    </h3>
   </div>
   <div>
    <p className='text-secondary my-[18px] line-clamp-3'>{description}</p>
    <div className='flex flex-wrap gap-3 items-center justify-between mt-auto'>
     <span className='text-secondary text-sm'>{getFullDate(createdAt)}</span>
     <Badge variant='primary'>{category}</Badge>
    </div>
   </div>
  </div>
 );
};

export default ArticleCard;
