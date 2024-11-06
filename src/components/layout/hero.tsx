import ArticleCard from '../articles/article-card';
import Container from './container';

export default function Hero() {
 return (
  <Container>
   <div className='flex flex-col gap-6'>
    <ArticleCard isMain={true} />
    <div className='flex gap-6 flex-wrap sm:flex-nowrap'>
     <ArticleCard isMain={false} />
     <ArticleCard isMain={false} />
    </div>
   </div>
  </Container>
 );
}
