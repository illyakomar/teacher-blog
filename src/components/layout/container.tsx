import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
 return (
  <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>{children}</div>
 );
}
