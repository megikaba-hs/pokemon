import React from 'react';
import { PokemonImage } from '@/components/PokemonImage';
import { Progress } from '@/components/ui/progress';
import { getPokemon } from '@/lib/pokemonAPI';

interface PokemonPageProps {
  params: {
    pokemonName: string;
  };
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold pt-4 text-center'>
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>

      <div className='mt-6 relative w-72 h-72 sm:w-96 sm:h-96'>
        <PokemonImage
          image={pokemonObject.sprites.other['official-artwork'].front_default}
          name={pokemonName}
        />
      </div>

      <h3 className='text-lg font-medium mt-4'>
        Weight: {pokemonObject.weight}
      </h3>

      <div className='mt-8 flex flex-col w-full max-w-3xl space-y-4'>
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div
              className='flex flex-col sm:flex-row items-center w-full space-y-2 sm:space-y-0'
              key={statName}
            >
              <h3 className='w-full sm:w-1/4 text-sm sm:text-base font-medium text-center sm:text-left'>
                {statName}: {statValue}
              </h3>
              <Progress className='w-full sm:w-3/4' value={statValue} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
