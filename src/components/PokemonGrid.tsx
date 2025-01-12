'use client';
import React, { useState } from 'react';
import { PokemonCard } from '@/components/PokemonCard';
import PokemonPagination from '@/components/PokemonPagination';
import { Input } from '@/components/ui/input';

interface PokemonGridProps {
  pokemonList: any;
}

// eslint-disable-next-line no-magic-numbers
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
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
      <h3 className='text-2xl font-semibold pb-4 text-center'>
        Search your Pokémon
      </h3>
      <div className='w-full max-w-md'>
        <Input
          type='text'
          value={searchText}
          id='pokemonName'
          autoComplete='off'
          placeholder='Pikatchu, Venusaur, etc...'
          onChange={(e) => setSearchText(e.target.value)}
          className='w-full'
        />
      </div>

      <h3 className='text-3xl font-bold pt-8 pb-6 text-center'>
        Pokémon Collection
      </h3>
      <div className='grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3'>
        {paginatedPokemonList.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>

      <div className='flex justify-center w-full'>
        <PokemonPagination
          count={Math.ceil(filteredPokemonList.length / POKEMONS_PER_PAGE)}
          page={page}
          onPageChange={handleChange}
        />
      </div>
    </div>
  );
}
