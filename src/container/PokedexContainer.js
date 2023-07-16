import React, { useEffect, useState } from 'react';
import PokemonDropdown from '../components/PokemonDropDown';
import PokemonDetails from '../components/PokemonDetails';
import TeamBuilder from '../components/TeamBuilder';

function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handlePokemonChange = (e) => {
    const pokemonName = e.target.value;
    if (pokemonName === 'default') {
      setSelectedPokemon(null);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => setSelectedPokemon(data))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <PokemonDropdown pokemons={pokemons} onChange={handlePokemonChange} />
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
      <TeamBuilder selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default PokemonContainer;