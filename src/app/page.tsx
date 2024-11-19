import SubscribeForm from '@/components/forms/subscribe';
import AboutInfo from '@/components/layout/about';
import LastArticle from '@/components/layout/last-article';
import { ArticleApiService } from '@/lib/api/services/article.api-service';
import { UserApiService } from '@/lib/api/services/user.api-service';
import { notFound } from 'next/navigation';

export default async function Home() {
 const [user, articles] = await Promise.all([
  UserApiService.getOne(),
  ArticleApiService.getLast(),
 ]);

 if (!user && !articles) notFound();

 return (
  <>
   {/* Info Component */}
   <section className="py-14 bg-[url('/hero-bg-02.svg')] bg-cover bg-center">
    <AboutInfo {...user.data} />
   </section>

   {/* Last Article Component */}
   <section className='pt-16 pb-14 bg-gradient-to-b from-slate-100 to-zinc-100'>
    <LastArticle data={articles.data?.docs} />
   </section>

   {/* Subscribe to Newsletter Component */}
   <section className="py-14 bg-[url('/bg-dots.svg')] bg-cover bg-center">
    <SubscribeForm />
   </section>
  </>
 );
}
