import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

interface CardProps {
  name: string;
  image: string;
  action?: 'add' | 'remove';
  onAction?: () => void;
}

export function PokemonCard({ name, image, action, onAction }: CardProps) {
  return (
    <div className='group rounded-lg border border-transparent px-5 py-4 m-3 transition-colors hover:bg-gray-200 bg-gray-100 hover: dark'>
      <Image
        src={image}
        alt='Pokémon'
        width={300}
        height={300}
      />
      <h2 className='text-2xl font-semibold text-center'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>

      <div className='flex justify-between'>
        <Link href={name}>
          <Button variant='secondary' className='mt-2'>
            Details
          </Button>
        </Link>

        {action && onAction && (
          <Button
            className={`mt-2 px-4 py-2 rounded transition ${
              action === 'add'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
            onClick={onAction}
          >
            {action === 'add' ? 'Add to Team' : 'Remove'}
          </Button>
        )}
      </div>
    </div>
  );
}
