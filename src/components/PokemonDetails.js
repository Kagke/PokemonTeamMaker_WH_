import React from 'react';

function PokemonDetails({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div>
        <strong>Type(s):</strong>{' '}
        {pokemon.types.map((type) => (
          <span key={type.slot}>{type.type.name} </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;