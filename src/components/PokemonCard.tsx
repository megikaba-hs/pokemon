import Link from 'next/link';

interface CardProps {
  name: string;
}

export function PokemonCard({ name }: CardProps) {
  return (
    <Link
      href={name}
      className='group rounded-lg border border-transparent px-5 py-4 m-3 transition-colors dark: border-gray-500 hover:border-gray-300 hover: bg-gray-100 hover: dark'
      key={name + 'Card'}
    >
      <h2 className='text-2xl font-semibold'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
