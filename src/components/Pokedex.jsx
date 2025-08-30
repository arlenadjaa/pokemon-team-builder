import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const { data: initialData, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (initialData) {
      const fetchAllDetails = async () => {
        const details = await Promise.all(
          initialData.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
          })
        );
        setPokemonDetails(details);
      };
      fetchAllDetails();
    }
  }, [initialData]);

  const filteredPokemon = pokemonDetails.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.types.some(typeInfo => typeInfo.type.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error fetching Pokémon!</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or type"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="pokedex-grid">
        {filteredPokemon.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;