'use client';
import React from 'react';
import {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from '@/components/ui/pagination';

interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (value: number) => void;
}

const PokemonPagination = ({ count, page, onPageChange }: PaginationProps) => {
  return (
    <div className='mt-4 flex justify-center'>
      <Pagination>
        {page > 1 && (
          <PaginationPrevious onClick={() => onPageChange(page - 1)} />
        )}

        {Array.from({ length: count }, (_, i) => i + 1).map((pageNumber) => (
          <PaginationLink
            key={pageNumber}
            isActive={pageNumber === page}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationLink>
        ))}

        {page < count && (
          <PaginationNext onClick={() => onPageChange(page + 1)} />
        )}
      </Pagination>
    </div>
  );
};

export default PokemonPagination;
