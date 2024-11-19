import Container from '../layout/container';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SubscribeForm = () => {
 return (
  <Container>
   <div className='px-10 py-9 bg-card rounded-xl shadow-md flex justify-between gap-5 max-[852px]:flex-wrap max-[852px]:justify-center'>
    <div className='max-w-[455px]'>
     <h3 className='font-semibold text-2xl text-primary mb-3'>
      Підписатися на розсилку
     </h3>
     <p className='text-secondary'>
      Вкажіть свою електронну адресу, щоб отримувати сповіщення про публікації
      нової статті
     </p>
    </div>
    <div className='flex items-center gap-4 w-full max-w-[490px] max-[852px]:flex-col'>
     <Input placeholder='Введіть вашу пошту' />
     <Button size='lg'>Підписатися</Button>
    </div>
   </div>
  </Container>
 );
};

export default SubscribeForm;
