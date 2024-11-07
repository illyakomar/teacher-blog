import SubscribeForm from '@/components/forms/subscribe';
import AboutInfo from '@/components/layout/about';
import LastArticle from '@/components/layout/last-article';

export default function Home() {
 return (
  <>
   {/* Info Component */}
   <section className="py-14 bg-[url('/hero-bg-02.svg')] bg-cover bg-center">
    <AboutInfo />
   </section>

   {/* Last Article Component */}
   <section className='pt-16 pb-14 bg-gradient-to-b from-slate-100 to-zinc-100'>
    <LastArticle />
   </section>

   {/* Subscribe to Newsletter Component */}
   <section className="py-14 bg-[url('/bg-dots.svg')] bg-cover bg-center">
    <SubscribeForm />
   </section>
  </>
 );
}
