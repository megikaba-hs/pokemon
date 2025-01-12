import { render, screen, fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import TrainersPage from '@/components/TrainersPage';

const mockPokemonList = [
  { name: 'Pikachu', image: 'pikachu.png' },
  { name: 'Bulbasaur', image: 'bulbasaur.png' },
  { name: 'Charmander', image: 'charmander.png' },
  { name: 'Squirtle', image: 'squirtle.png' },
];

jest.mock('@/components/PokemonCard', () => ({
  PokemonCard: ({ name, image, action, onAction }: any) => (
    <div data-testid='pokemon-card'>
      <img src={image} alt={name} />
      <span>{name}</span>
      <button onClick={onAction}>{action}</button>
    </div>
  ),
}));

jest.mock('@/components/ui/input', () => ({
  Input: ({ value, onChange, placeholder }: any) => (
    <input
      data-testid='search-input'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  ),
}));

describe('TrainersPage', () => {
  it('renders the component with initial state', () => {
    render(<TrainersPage pokemonList={mockPokemonList} />);
    expect(screen.getByText('Manage Your Pokémon Team')).toBeInTheDocument();
    expect(
      screen.getByText('Your team is empty. Add some Pokémon!'),
    ).toBeInTheDocument();
  });

  it('adds a Pokémon to the team', () => {
    render(<TrainersPage pokemonList={mockPokemonList} />);

    const addButton = screen.getAllByText('add')[0];
    fireEvent.click(addButton);

    expect(
      screen.getByText(/Your Team \(Max 6 Pokémon\):/i),
    ).toBeInTheDocument();
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });

  // it('removes a Pokémon from the team', () => {
  //   render(<TrainersPage pokemonList={mockPokemonList} />);

  //   const addButton = screen.getAllByText('add')[0];
  //   fireEvent.click(addButton);

  //   expect(
  //     screen.getByText(/Your Team \(Max 6 Pokémon\):/i),
  //   ).toBeInTheDocument();
  //   expect(screen.getByText('Pikachu')).toBeInTheDocument();

  //   const removeButton = screen.getByText('remove');
  //   fireEvent.click(removeButton);
  //   expect(screen.queryByText('Pikachu')).not.toBeInTheDocument();
  // });

  it('filters Pokémon based on search input', () => {
    render(<TrainersPage pokemonList={mockPokemonList} />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'char' } });

    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.queryByText('Pikachu')).not.toBeInTheDocument();
  });
});
