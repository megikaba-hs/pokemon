'use client';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export function Footer() {
  return (
    <footer
      className='w-full py-6'
      style={{
        background: 'linear-gradient(90deg, #3B4CCA, #FFCC00)',
        color: 'white',
      }}
    >
      <div className='container mx-auto flex flex-col items-center justify-between px-6 sm:flex-row'>
        <div className='flex items-center space-x-3'>
          <Image
            src='/images/pokemon.png'
            alt='Pokémon Logo'
            width={100}
            height={40}
          />
          <span className='text-lg font-bold'>Pokémon Fan Page</span>
        </div>

        <div className='flex space-x-4 mt-4 sm:mt-0'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-300'
            aria-label='Twitter'
          >
            <Twitter className='h-6 w-6' />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-300'
            aria-label='Facebook'
          >
            <Facebook className='h-6 w-6' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-300'
            aria-label='Instagram'
          >
            <Instagram className='h-6 w-6' />
          </a>
        </div>
      </div>
    </footer>
  );
}
