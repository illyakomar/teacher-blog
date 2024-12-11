import { Icons } from '@/components/icons/icons';
import { getImage } from '@/lib/getImage';
import { UserEntity } from '@/types/entities';
import Image from 'next/image';
import Link from 'next/link';
import Container from './container';

interface Props extends Partial<UserEntity> {}

export default async function AboutInfo(props: Props) {
 const { firstName, lastName, img, description, socialMedia } = props;

 const blurData = await getImage(`${process.env.NEXT_API_URL}/api/file/${img}`);

 return (
  <Container>
   <div className='max-w-[880px] mx-auto px-4 sm:px-8 lg:px-0 py-7.5 sm:py-10 lg:py-15 '>
    <div className='flex flex-col lg:flex-row items-center gap-12'>
     <div className='max-w-[277px] w-full h-[277px] rounded-full flex items-center justify-center border border-gray-200'>
      <div className='relative w-[165px] h-[165px] rounded-full shadow-2xl'>
       <Image
        src={`${process.env.NEXT_API_URL}/api/file/${img}`}
        alt='Post Image'
        fill
        sizes='165px'
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        priority
        placeholder='blur'
        blurDataURL={blurData}
       />
      </div>
     </div>
     <div className='max-w-[593px] w-full'>
      <h1 className='text-2xl sm:text-4xl lg:text-[42px] xl:text-heading-2 mb-3.5'>
       Привіт! Я<span className='font-bold'> {`${firstName} ${lastName}`}</span>
      </h1>
      <p className='text-secondary'>{description}</p>
      <div className='mt-5 flex gap-5 items-center'>
       {socialMedia?.map((social) => {
        const Icon = Icons[social.icon as keyof typeof Icons];
        return (
         <Link key={social._id} href={social.url ?? '#'} target='_blank'>
          <Icon className='text-secondary' />
         </Link>
        );
       })}
      </div>
     </div>
    </div>
   </div>
  </Container>
 );
}
