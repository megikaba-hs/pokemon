import * as React from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-gradient-to-b from-yellow-400 via-purple-400 to-purple-600 min-h-screen'>
        <Header />
        <main className='flex min-h-screen flex-col items-center p-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
