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
   <body className={`${inter.className} antialiased`}>
    <Providers>
     <Header />
     <main>{children}</main>
     <Footer />
    </Providers>
   </body>
  </html>
 );
}
