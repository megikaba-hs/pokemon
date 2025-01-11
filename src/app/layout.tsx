import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import * as React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* <ThemeProvider attribute='class' defaultTheme='dark'> */}
        <main className='flex min-h-screen flex-col items-center'>
          <Header />
          {children}
          <Footer/>
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
