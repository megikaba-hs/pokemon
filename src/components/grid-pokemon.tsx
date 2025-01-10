'use client';

import { PokemonCard } from '@/components/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('');

  console.log(pokemonList);

  //filter
  const searchPokemon = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  const filteredPokemonList = searchPokemon(pokemonList);
  return (
    <>
      <div>
        <h3 className='text-2xl py-6 text-center'>Search your Pokèmon</h3>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='pokemonName'>Pokemon Name</Label>
          <Input
            type='text'
            value={searchText}
            id='pokemonName'
            autoComplete='off'
            placeholder='Pikatchu, Pidgey ...'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Collection</h3>
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg: grid-cols-3 lg-text-left'>
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} />;
        })}
      </div>
    </>
  );
}
