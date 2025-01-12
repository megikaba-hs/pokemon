import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import PokemonPagination from '@/components/PokemonPagination';

describe('PokemonPagination', () => {
  const mockOnPageChange = jest.fn();

  it('renders the correct number of pagination links', () => {
    render(
      <PokemonPagination count={5} page={1} onPageChange={mockOnPageChange} />,
    );
    const pageLinks = screen.getAllByText(/^[0-9]+$/);
    expect(pageLinks).toHaveLength(5);
  });

  it('calls onPageChange with the correct value when a page link is clicked', () => {
    render(
      <PokemonPagination count={5} page={1} onPageChange={mockOnPageChange} />,
    );
    const page3Link = screen.getByText('3');
    fireEvent.click(page3Link);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with the correct value when the "Next" button is clicked', () => {
    render(
      <PokemonPagination count={5} page={1} onPageChange={mockOnPageChange} />,
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct value when the "Previous" button is clicked', () => {
    render(
      <PokemonPagination count={5} page={3} onPageChange={mockOnPageChange} />,
    );

    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
