import SubscribeForm from '@/components/forms/subscribe';
import Hero from '@/components/layout/hero';
import LastArticle from '@/components/layout/last-article';

export default function Home() {
 return (
  <>
   {/* Hero Component */}
   <section className="py-14 bg-[url('/hero-bg.svg')] bg-cover bg-center">
    <Hero />
   </section>

   {/* Last Article Component */}
   <section className='pt-16 pb-14 bg-gradient-to-b from-zinc-50 to-pink-50'>
    <LastArticle />
   </section>

   {/* Subscribe to Newsletter Component */}
   <section className="py-14 bg-[url('/bg-dots.svg')] bg-cover bg-center">
    <SubscribeForm />
   </section>
  </>
 );
}
