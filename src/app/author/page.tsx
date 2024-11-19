import Container from '@/components/layout/container';
import { UserApiService } from '@/lib/api/services/user.api-service';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function AuthorPage() {
 const { data } = await UserApiService.getOne();

 if (!data) notFound();

 return (
  <section className='py-14'>
   <Container>
    <div className='max-w-[770px] mx-auto'>
     <Markdown
      className='prose max-w-none prose-h1:text-center'
      remarkPlugins={[remarkGfm]}
     >
      {data.additionalInformation}
     </Markdown>
    </div>
   </Container>
  </section>
 );
}
