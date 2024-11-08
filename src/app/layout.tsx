import { Providers } from '@/utils/theme-mode';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'], style: ['normal'] });

export const metadata: Metadata = {
 title: 'Teacher blog',
 description: 'By w1se',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang='en'>
   <body
    className={`${inter.className} antialiased flex flex-col min-h-screen`}
   >
    <Providers>
     <Header />
     <main className='flex-1'>{children}</main>
     <Footer />
    </Providers>
   </body>
  </html>
 );
}
