import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { PokemonCard } from '@/components/PokemonCard';

describe('PokemonCard', () => {
  const mockOnAction = jest.fn();

  it('renders the Pokémon name and image', () => {
    render(<PokemonCard name='Pikachu' image='/images/pikachu.png' />);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    const image = screen.getByAltText('Pokémon');
    expect(image).toBeInTheDocument();
  });

  it('displays the "Add to Team" button when action is "add"', () => {
    render(
      <PokemonCard
        name='Pikachu'
        image='/images/pikachu.png'
        action='add'
        onAction={mockOnAction}
      />,
    );

    const addButton = screen.getByText('Add to Team');
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);
    expect(mockOnAction).toHaveBeenCalled();
  });

  it('displays the "Remove" button when action is "remove"', () => {
    render(
      <PokemonCard
        name='Pikachu'
        image='/images/pikachu.png'
        action='remove'
        onAction={mockOnAction}
      />,
    );

    const removeButton = screen.getByText('Remove');
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(mockOnAction).toHaveBeenCalled();
  });

  it('does not display the action button when action is not provided', () => {
    render(<PokemonCard name='Pikachu' image='/images/pikachu.png' />);

    const actionButton = screen.queryByText(/Add to Team|Remove/);
    expect(actionButton).toBeNull();
  });
});
