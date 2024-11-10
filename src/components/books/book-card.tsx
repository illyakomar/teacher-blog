import Link from 'next/link';

const BookCard = () => {
 return (
  <div className='border border-gray-300 rounded-md bg-slate-100 p-4 flex flex-col items-center gap-11 hover:bg-white hover:drop-shadow-sm hover:-translate-y-2 transition-all'>
   <h3>
    <Link href='/home' className='block font-bold text-2xl line-clamp-3'>
     <span className='bg-gradient-to-r from-violet-200 to-violet-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]'>
      Особливості розробки web-застосунків для системи дистанційного навчання з
      допомогою бібліотеки React
     </span>
    </Link>
   </h3>
   <div className='text-secondary italic space-y-3'>
    <p>Sep 10, 2025</p>
    <p className='line-clamp-2'>
     ОП Кошова, ОО Черненко, ТВ Чілікіна, ІІ Комар
    </p>
    <p className='not-italic line-clamp-3 mb-[18px]'>
     Lorem Ipsum is simply dummy text of the print and typesetting industry
     simply dummy text of the print and typesetting industry Lorem Ipsum is
     simply dummy text of the print and typesetting industry...
    </p>
   </div>
  </div>
 );
};

export default BookCard;
