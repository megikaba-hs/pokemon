import TrainersPage from '@/components/TrainersPage';
import { getPokemonList } from '@/lib/pokemonAPI';

export default async function TrainersPageWrapper() {

  const pokemonList = await getPokemonList();
  
  return (
    <div className="p-4">
      <TrainersPage  pokemonList={pokemonList} />
    </div>
  );
}
