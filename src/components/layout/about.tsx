import Image from 'next/image';
import Container from './container';

export default function AboutInfo() {
 return (
  <Container>
   <div className='max-w-[880px] mx-auto px-4 sm:px-8 lg:px-0 py-7.5 sm:py-10 lg:py-15 '>
    <div className='flex flex-col lg:flex-row items-center gap-12'>
     <div className='max-w-[277px] w-full h-[277px] rounded-full flex items-center justify-center border border-gray-200'>
      <div className='relative w-[165px] h-[165px] rounded-full shadow-2xl'>
       <Image
        src='https://teacher-blog-admin-dashboard.vercel.app/api/file/591fb179-66e6-4a72-85ae-059feff0979b'
        alt='Post Image'
        fill
        sizes='165px'
        style={{ objectFit: 'cover' }}
        priority
       />
      </div>
     </div>
     <div className='max-w-[593px] w-full'>
      <h1 className='text-2xl sm:text-4xl lg:text-[42px] xl:text-heading-2 mb-3.5'>
       Привіт! Я <span className='font-bold'>Комар Ілля</span>
      </h1>
      <p className='text-secondary'>
       Висококваліфікований фахівцем у галузі теоретичної фізики та квантової
       механіки. За свою кар`єру активно досліджував явища, пов`язані з
       квантовою теорією поля, та маю численні публікації у високорейтингових
       наукових журналах.
      </p>
      <div></div>
     </div>
    </div>
   </div>
  </Container>
 );
}
