import React, { useState } from 'react';

function TeamBuilder({ selectedPokemon }) {
  const [team, setTeam] = useState([]);

  const handleAddToTeam = () => {
    if (team.length < 6 && selectedPokemon) {
      setTeam([...team, selectedPokemon]);
    }
  };

  const handleRemoveFromTeam = (index) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  };

  return (
    <div>
      <h2>Team Builder</h2>
      <button onClick={handleAddToTeam} disabled={team.length === 6 || !selectedPokemon}>
        Add to Team
      </button>
      <h3>Team Members:</h3>
      <ul>
        {team.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name}
            <button onClick={() => handleRemoveFromTeam(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamBuilder;
