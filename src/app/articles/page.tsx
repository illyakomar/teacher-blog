import ArticleCard from '@/components/articles/article-card';
import Container from '@/components/layout/container';
import {
 Pagination,
 PaginationContent,
 PaginationItem,
 PaginationNext,
 PaginationPrevious,
} from '@/components/ui/pagination';

export default function ArticlePage() {
 return (
  <section className='py-14'>
   <Container>
    <div className='mb-12 flex justify-center flex-col items-center'>
     <h1 className='text-2xl font-bold sm:text-4xl mb-4'>Статті</h1>
     <p className='text-secondary'>Оберіть категорію, щоб побачити більше</p>
    </div>
    <div className='grid gap-7 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
     <ArticleCard />
     <ArticleCard />
     <ArticleCard />
     <ArticleCard />
     <ArticleCard />
     <ArticleCard />
    </div>
    <div className='mt-12'>
     <Pagination>
      <PaginationContent>
       <PaginationItem>
        <PaginationPrevious href='#' />
       </PaginationItem>
       <PaginationItem>
        <PaginationNext href='#' />
       </PaginationItem>
      </PaginationContent>
     </Pagination>
    </div>
   </Container>
  </section>
 );
}
