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
   <section className='py-20'>
    <LastArticle />
   </section>
  </>
 );
}
