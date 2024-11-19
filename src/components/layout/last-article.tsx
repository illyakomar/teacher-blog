import { ArticleEntity } from '@/types/entities';
import Link from 'next/link';
import ArticleCard from '../articles/article-card';
import { Button } from '../ui/button';
import Container from './container';

interface Props {
 data?: ArticleEntity[];
}

export default function LastArticle(props: Props) {
 const { data } = props;

 const articlesCard = data?.map((article) => (
  <ArticleCard key={article._id} {...article} />
 ));

 return (
  <Container>
   <div className='mb-12 text-center'>
    <h2 className='mb-3.5 text-2xl font-bold sm:text-4xl'>Останні статті</h2>
    <p className='text-secondary'>Оберіть статтю, щоб побачити більше</p>
   </div>
   <div className='grid gap-7 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
    {articlesCard}
   </div>
   <div className='flex justify-center mt-12'>
    <Link href='/articles'>
     <Button variant='outline'>Переглянути всі статті</Button>
    </Link>
   </div>
  </Container>
 );
}
