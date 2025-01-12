'use client';
import React, { useState } from 'react';
import { PokemonCard } from '@/components/PokemonCard';
import { Input } from '@/components/ui/input';

interface TrainersProps {
  pokemonList: any[];
}

const MAX_TEAM_SIZE = 6;

export default function TrainersPage({ pokemonList }: TrainersProps) {
  const [availablePokemon, setAvailablePokemon] = useState(pokemonList);
  const [team, setTeam] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleAddToTeam = (pokemon: any) => {
    if (team.length < MAX_TEAM_SIZE) {
      setTeam((prev) => [...prev, pokemon]);
      setAvailablePokemon((prev) =>
        prev.filter((p) => p.name !== pokemon.name),
      );
    } else {
      alert('Your team is full (6 Pokémon)!');
    }
  };

  const handleRemoveFromTeam = (pokemonName: string) => {
    const removedPokemon = team.find((pokemon) => pokemon.name === pokemonName);
    if (removedPokemon) {
      setTeam((prev) => prev.filter((pokemon) => pokemon.name !== pokemonName));
      setAvailablePokemon((prev) => [...prev, removedPokemon]);
    }
  };

  const filteredPokemonList = availablePokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6'>
        Manage Your Pokémon Team
      </h1>

      <section className='mb-12 w-full'>
        <h2 className='text-xl text-center sm:text-2xl font-semibold mb-4'>
          Your Team (Max {MAX_TEAM_SIZE} Pokémon):
        </h2>
        {team.length === 0 ? (
          <p className='text-gray-600 text-center'>
            Your team is empty. Add some Pokémon!
          </p>
        ) : (
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
            {team.map((pokemon) => (
              <div key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.image}
                  action='remove'
                  onAction={() => handleRemoveFromTeam(pokemon.name)}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className='w-full'>
        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
          Add Pokémon to Your Team:
        </h2>
        <div className='w-full max-w-md mb-6'>
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
        <div className='grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredPokemonList.map((pokemon) => (
            <div key={pokemon.name}>
              <PokemonCard
                name={pokemon.name}
                image={pokemon.image}
                action='add'
                onAction={() => handleAddToTeam(pokemon)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
