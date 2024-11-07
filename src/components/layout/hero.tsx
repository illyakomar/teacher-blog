import ArticleHeroCard from '../articles/article-hero-card';
import Container from './container';

export default function Hero() {
 return (
  <Container>
   <div className='flex flex-col gap-6'>
    <ArticleHeroCard isMain={true} />
    <div className='flex gap-6 flex-wrap sm:flex-nowrap'>
     <ArticleHeroCard isMain={false} />
     <ArticleHeroCard isMain={false} />
    </div>
   </div>
  </Container>
 );
}
