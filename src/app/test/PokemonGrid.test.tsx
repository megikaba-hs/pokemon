import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { PokemonGrid } from '@/components/PokemonGrid';

const mockPokemonList = [
  { name: 'Pikachu', image: '/images/pikachu.png' },
  { name: 'Bulbasaur', image: '/images/bulbasaur.png' },
  { name: 'Charmander', image: '/images/charmander.png' },
  { name: 'Squirtle', image: '/images/squirtle.png' },
  { name: 'Venusaur', image: '/images/venusaur.png' },
  { name: 'Charizard', image: '/images/charizard.png' },
  { name: 'Jigglypuff', image: '/images/jigglypuff.png' },
  { name: 'Eevee', image: '/images/eevee.png' },
  { name: 'Meowth', image: '/images/meowth.png' },
  { name: 'Snorlax', image: '/images/snorlax.png' },
];

describe('PokemonGrid', () => {
  it('filters Pokémon based on the search text', () => {
    render(<PokemonGrid pokemonList={mockPokemonList} />);

    const searchInput = screen.getByPlaceholderText(
      'Pikatchu, Venusaur, etc...',
    );

    fireEvent.change(searchInput, { target: { value: 'Pikachu' } });

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.queryByText('Bulbasaur')).not.toBeInTheDocument();
  });

  // it('paginates the Pokémon list correctly', () => {
  //   render(<PokemonGrid pokemonList={mockPokemonList} />);

  //   const searchInput = screen.getByPlaceholderText('Pikatchu, Venusaur, etc...');

  //   expect(screen.getAllByRole('img')).toHaveLength(9);

  //   const paginationNextButton = screen.getByText('Next');
  //   fireEvent.click(paginationNextButton);
  //   expect(screen.getAllByRole('img')).toHaveLength(2);
  // });

  it('renders the Pokémon list correctly', () => {
    render(<PokemonGrid pokemonList={mockPokemonList} />);

    // Ensure that Pokémon names are displayed
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });
});