import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { ArticleApiService } from '@/lib/api/services/article.api-service';
import { getImage } from '@/lib/getImage';
import { getFullDate } from '@/lib/helpers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function ArticlePageInfo({
 params,
}: {
 params: { id: string };
}) {
 const { data } = await ArticleApiService.selectOne(params.id);

 if (!data) notFound();

 const blurData = await getImage(
  `${process.env.NEXT_API_URL}/api/file/${data.img}`
 );

 return (
  <section className='py-14'>
   <Container>
    <div className='max-w-[1000px] mx-auto'>
     <div className='flex justify-center mb-6'>
      <Badge variant='primary'>{data.category}</Badge>
     </div>
     <h1 className='text-2xl text-center font-bold sm:text-4xl mb-6'>
      {data.title}
     </h1>
     <p className='text-secondary text-center mb-6'>{data.description}</p>
     <div className='relative my-11 h-full max-h-[500px] w-full aspect-[16/9]'>
      <Image
       src={`${process.env.NEXT_API_URL}/api/file/${data.img}`}
       alt='Post Image'
       fill
       sizes='(max-width: 640px) 100vw, (min-width: 640px) 50vw, (min-width: 1024px) 33vw'
       style={{ objectFit: 'cover', borderRadius: '8px' }}
       priority
       placeholder='blur'
       blurDataURL={blurData}
      />
     </div>
    </div>
    <div className='max-w-[770px] mx-auto'>
     <Markdown
      className='prose max-w-none prose-h1:text-center'
      remarkPlugins={[remarkGfm]}
     >
      {data.material}
     </Markdown>
    </div>
    <p className='text-center text-secondary text-sm mt-6'>
     {getFullDate(data.createdAt)}
    </p>
   </Container>
  </section>
 );
}
