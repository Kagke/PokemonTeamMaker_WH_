import React from 'react';


function PokemonDropdown({ pokemons, onChange }) {
  return (
    <select onChange={onChange}>
      <option value="default">Select a Pokemon</option>
      {pokemons.map((pokemon, index) => (
        <option key={index} value={pokemon.name}>
          {pokemon.name}
        </option>
      ))}
    </select>
  );
}

export default PokemonDropdown;