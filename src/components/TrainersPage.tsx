'use client';

import { useState } from 'react';
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
        prev.filter((p) => p.name !== pokemon.name)
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
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Manage Your Pokémon Team
      </h1>


      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Your Team (Max {MAX_TEAM_SIZE} Pokémon):
        </h2>
        {team.length === 0 ? (
          <p className="text-gray-600">Your team is empty. Add some Pokémon!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((pokemon) => (
              <div key={pokemon.name} className="text-center">
                <PokemonCard name={pokemon.name} image={pokemon.image} />
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleRemoveFromTeam(pokemon.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>


      <section>
        <h2 className="text-xl font-semibold mb-4">
          Add Pokémon to Your Team:
        </h2>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Input
            type='text'
            value={searchText}
            id='pokemonName'
            autoComplete='off'
            placeholder='Search Pokémon...'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPokemonList.map((pokemon) => (
            <div key={pokemon.name} className="text-center">
              <PokemonCard name={pokemon.name} image={pokemon.image} />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleAddToTeam(pokemon)}
              >
                Add to Team
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
