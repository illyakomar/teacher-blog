import AboutInfo from '@/components/layout/about';
import Container from '@/components/layout/container';

export default function AuthorPage() {
 return (
  <section className='py-14'>
   <Container>
    <div className='mb-12 flex justify-center flex-col items-center'>
     <h1 className='text-2xl font-bold sm:text-4xl mb-4'>Про автора</h1>
    </div>
    <div className='flex flex-col'>
     <AboutInfo />
    </div>
   </Container>
  </section>
 );
}
