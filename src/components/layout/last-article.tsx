import ArticleCard from '../articles/article-card';
import { Button } from '../ui/button';
import Container from './container';

export default function LastArticle() {
 return (
  <Container>
   <div className='mb-12 text-center'>
    <h2 className='mb-3.5 text-2xl font-bold sm:text-4xl'>Останні статті</h2>
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
   <div className='flex justify-center mt-12'>
    <Button variant='outline'>Переглянути всі статті</Button>
   </div>
  </Container>
 );
}
