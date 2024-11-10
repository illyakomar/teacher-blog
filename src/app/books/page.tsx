import BookCard from '@/components/books/book-card';
import Container from '@/components/layout/container';

export default function BookPage() {
 return (
  <section className='py-14'>
   <Container>
    <div className='mb-12 flex justify-center flex-col items-center'>
     <h1 className='text-2xl font-bold sm:text-4xl mb-4'>Книги</h1>
     <p className='text-secondary'>
      Оберіть книгу, щоб переглянути детальну інформацію
     </p>
    </div>
    <div className='grid gap-9 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
     <BookCard />
     <BookCard />
     <BookCard />
     <BookCard />
     <BookCard />
    </div>
   </Container>
  </section>
 );
}
