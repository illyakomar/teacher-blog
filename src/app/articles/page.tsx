import ArticleCard from '@/components/articles/article-card';
import Container from '@/components/layout/container';
import EmptyListWindow from '@/components/layout/empty-list';
import {
 Pagination,
 PaginationContent,
 PaginationItem,
 PaginationNext,
 PaginationPrevious,
} from '@/components/ui/pagination';
import { ArticleApiService } from '@/lib/api/services/article.api-service';
import { notFound } from 'next/navigation';

export default async function ArticlePage({
 searchParams,
}: {
 searchParams: { page: string };
}) {
 const page = parseInt(searchParams.page) || 1;

 const { data } = await ArticleApiService.getLast(page, 6);

 if (!data) notFound();

 const articleCards = data.docs.map((article) => (
  <ArticleCard key={article._id} {...article} />
 ));

 return (
  <section className='py-14'>
   <Container>
    <div className='mb-12 flex justify-center flex-col items-center'>
     <h1 className='text-2xl font-bold sm:text-4xl mb-4'>Статті</h1>
     <p className='text-secondary'>
      Оберіть статтю, щоб переглянути детальну інформацію
     </p>
    </div>
    {articleCards.length ? (
     <>
      <div className='grid gap-7 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
       {articleCards}
      </div>
      <div className='mt-12'>
       <Pagination>
        <PaginationContent>
         {data.hasPrevPage && (
          <PaginationItem>
           <PaginationPrevious href={`?page=${data.page - 1}`} />
          </PaginationItem>
         )}
         {data.hasNextPage && (
          <PaginationItem>
           <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
         )}
        </PaginationContent>
       </Pagination>
      </div>
     </>
    ) : (
     <EmptyListWindow />
    )}
   </Container>
  </section>
 );
}
