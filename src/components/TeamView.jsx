import React from 'react';
import { useTeam } from "../contexts/useTeam";
const TeamView = () => {

  const { team, removePokemon } = useTeam();

  return (
    <div className="team-view">
      <h2>Your Team</h2>
      <div className="team-slots">
        {team.map(pokemon => (
          <div key={pokemon.id} className="team-slot" onClick={() => removePokemon(pokemon.id)}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
        {[...Array(6 - team.length)].map((_, index) => (
          <div key={index} className="team-slot empty-slot"></div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;