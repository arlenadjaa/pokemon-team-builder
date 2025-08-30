import React from 'react';

import { useTeam } from "../contexts/useTeam";

const PokemonCard = ({ pokemon }) => {

  const { team, addPokemon } = useTeam();

  const isTeamFull = team.length >= 6;
  const isInTeam = team.find(p => p.id === pokemon.id);

  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <button onClick={() => addPokemon(pokemon)} disabled={isTeamFull || isInTeam}>
        {isInTeam ? 'In Team' : 'Add to Team'}
      </button>
    </div>
  );
};

export default PokemonCard;