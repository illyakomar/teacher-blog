import { getAuthorShortName, getFullDate } from '@/lib/helpers';
import { BookEntity } from '@/types/entities';
import Link from 'next/link';

interface Props extends BookEntity {}

const BookCard = (props: Props) => {
 const { title, createdAt, description, url, authors } = props;

 return (
  <div className='group border border-gray-300 rounded-md bg-slate-100 p-4 flex flex-col justify-between gap-9 hover:bg-white hover:drop-shadow-sm hover:-translate-y-2 transition-all'>
   <h3>
    <Link
     href={`${process.env.NEXT_API_URL}/api/file/${url}`}
     className='block font-bold text-xl'
     target='_blank'
    >
     <div className='line-clamp-3'>
      <span className='bg-gradient-to-r from-violet-200 to-violet-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
       {title}
      </span>
     </div>
    </Link>
   </h3>
   <div className='text-secondary italic space-y-3'>
    <p>{getFullDate(createdAt)}</p>
    <p className='line-clamp-2'>
     {authors?.map((author) => (
      <span className='pr-3' key={author._id}>
       {getAuthorShortName(author)}
      </span>
     ))}
    </p>
    <p className='not-italic line-clamp-4 mb-[18px]'>{description}</p>
   </div>
  </div>
 );
};

export default BookCard;
