import React from 'react';
import { PokemonGrid } from '@/components/PokemonGrid';
import { getPokemonList } from '@/lib/pokemonAPI';

export default async function HomePage() {
  const pokemonList = await getPokemonList();
  return (
    <div className='mb-3 text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
