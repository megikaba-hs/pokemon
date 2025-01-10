'use client';
import { PokemonGrid } from '@/components/grid-pokemon';

export default function HomePage() {
  return (
    <div className='mb-3 text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <PokemonGrid />
    </div>
  );
}
