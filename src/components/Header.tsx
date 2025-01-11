import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header
      className='flex items-center justify-between w-full py-2 px-4'
      style={{
        background: 'linear-gradient(90deg, #FFCC00, #3B4CCA)',
        color: 'white',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className='relative'>
        <Image
          src='/images/pokemon.png'
          alt='Pokémon'
          objectFit='cover'
          width={150}
          height={60}
        />
      </div>
      <Link href='/'>
        <h2 className='text-2xl font-bold cursor-pointer'>Pokémon</h2>
      </Link>
    </header>
  );
};

export default Header;
