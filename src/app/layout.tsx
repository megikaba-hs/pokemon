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
        <main className='flex min-h-screen flex-col items-center p-24'>
          <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
            <h2 className='text-2xl text-bold'>Pokémon </h2>
          </div>
          {children}
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
