import BookCard from '@/components/books/book-card';
import Container from '@/components/layout/container';
import { BookApiService } from '@/lib/api/services/book.api-service';

export default async function BookPage() {
 const { data } = await BookApiService.getMany();

 if (!data) {
  return;
 }

 const bookCards = data.map((book) => (
  <BookCard key={book._id} {...book} />
 ));

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
     {bookCards}
    </div>
   </Container>
  </section>
 );
}
