import React from 'react';
import { PokemonGrid } from '@/components/PokemonGrid';
import { PokemonImage } from '@/components/PokemonImage';
import { getPokemonList } from '@/lib/pokemonAPI';

interface Pokemon {
  name: string;
  image: string;
}

export default async function HomePage() {
  let pokemonList: Pokemon[] = [];
  let error = null;

  try {
    pokemonList = await getPokemonList();
  } catch (e) {
    error = 'Oh no! The Poké Ball failed. Try again!';
  }

  if (error) {
    return (
      <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
        <h2 className='mt-28 text-xl sm:text-2xl font-semibold'>
          Oh no! The Poké Ball failed. Try again!
        </h2>

        <div className='mt-6 relative w-72 h-72 sm:w-96 sm:h-96'>
          <PokemonImage image='/images/pokeball.png' name={error} />
        </div>
      </div>
    );
  }
  return (
    <div className='mb-3 text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
