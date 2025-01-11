'use client';

export function Footer() {
  return (
    <footer className='bg-gray-100 py-8 shadow-md w-full'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-10 sm:flex-row'>
        {/* Copyright */}
        <p className='text-sm text-gray-600'>
          © {new Date().getFullYear()} Pokémon Fan Page. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className='flex space-x-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:text-blue-700'
            aria-label='Twitter'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              className='h-6 w-6'
            >
              <path d='M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 2.23 4.3a4.28 4.28 0 0 0 1.32 5.72 4.27 4.27 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 4 3 8.6 8.6 0 0 1-5.32 1.84c-.34 0-.68-.02-1.02-.06a12.13 12.13 0 0 0 6.57 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.72 8.72 0 0 0 22.46 6z' />
            </svg>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-800'
            aria-label='Facebook'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              className='h-6 w-6'
            >
              <path d='M22.67 0H1.33A1.33 1.33 0 0 0 0 1.33v21.34A1.33 1.33 0 0 0 1.33 24h11.5v-9.29H9.8V10.5h3.03V8.21c0-3 1.8-4.63 4.54-4.63 1.32 0 2.7.24 2.7.24v2.96h-1.52c-1.5 0-1.96.93-1.96 1.88v2.04h3.33l-.53 3.22h-2.8V24h5.48A1.33 1.33 0 0 0 24 22.67V1.33A1.33 1.33 0 0 0 22.67 0z' />
            </svg>
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 hover:text-pink-700'
            aria-label='Instagram'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              className='h-6 w-6'
            >
              <path d='M12 2.16c3.19 0 3.58.01 4.85.07 1.17.05 1.97.24 2.42.4a4.92 4.92 0 0 1 1.77 1.17 4.92 4.92 0 0 1 1.17 1.77c.16.45.35 1.25.4 2.42.06 1.27.07 1.66.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.42a4.92 4.92 0 0 1-1.17 1.77 4.92 4.92 0 0 1-1.77 1.17c-.45.16-1.25.35-2.42.4-1.27.06-1.66.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.42-.4a4.92 4.92 0 0 1-1.77-1.17 4.92 4.92 0 0 1-1.17-1.77c-.16-.45-.35-1.25-.4-2.42-.06-1.27-.07-1.66-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.42A4.92 4.92 0 0 1 3.13 3.2 4.92 4.92 0 0 1 4.9 2.03c.45-.16 1.25-.35 2.42-.4C8.42 2.17 8.81 2.16 12 2.16m0-2.16C8.74 0 8.33.01 7.04.07 5.73.12 4.6.4 3.68.79 2.75 1.19 2.03 1.75 1.36 2.42.68 3.1.12 3.82.07 4.68.01 5.47 0 5.88 0 12s.01 6.53.07 7.32c.05.86.62 1.58 1.29 2.26.67.67 1.39 1.23 2.26 1.29.79.06 1.2.07 7.38.07s6.53-.01 7.32-.07c.86-.05 1.58-.62 2.26-1.29.67-.67 1.23-1.39 1.29-2.26.06-.79.07-1.2.07-7.38s-.01-6.53-.07-7.32c-.05-.86-.62-1.58-1.29-2.26-.67-.67-1.39-1.23-2.26-1.29-.79-.06-1.2-.07-7.38-.07zM12 6.37A5.63 5.63 0 1 0 12 17.63 5.63 5.63 0 1 0 12 6.37zm0 9.26a3.63 3.63 0 1 1 0-7.26 3.63 3.63 0 0 1 0 7.26zm6.36-10.21a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 1 0 0 2.62z' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
