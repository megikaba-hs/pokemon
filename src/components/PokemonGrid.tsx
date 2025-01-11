'use client';

import { useState } from 'react';

import { PokemonCard } from '@/components/PokemonCard';
import { Input } from '@/components/ui/input';
import PokemonPagination from '@/components/PokemonPagination';
interface PokemonGridProps {
  pokemonList: any;
}

const POKEMONS_PER_PAGE = 9;

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (value: number) => {
    setPage(value);
  };

  const searchPokemon = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  const filteredPokemonList = searchPokemon(pokemonList);

  const paginatedPokemonList = filteredPokemonList.slice(
    (page - 1) * POKEMONS_PER_PAGE,
    page * POKEMONS_PER_PAGE,
  );

  return (
    <>
      <div className='flex flex-col items-center'>
        <h3 className='text-2xl pb-6 text-center'>Search your Pokèmon</h3>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
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
        {paginatedPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
            />
          );
        })}
      </div>

      <div>
        <PokemonPagination
          count={Math.ceil(filteredPokemonList.length / POKEMONS_PER_PAGE)}
          page={page}
          onPageChange={handleChange}
        />
      </div>
    </>
  );
}
