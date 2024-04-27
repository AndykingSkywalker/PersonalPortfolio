import React, { useState } from 'react';
import axios from 'axios';

const PokeSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
      setError('');
    } catch (err) {
      setPokemonData(null);
      setError('Pokemon not found!');
    }
  };

  const handleRandom = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1; // There are currently 898 Pokémon
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemonData(response.data);
      setError('');
    } catch (err) {
      setPokemonData(null);
      setError('Error while fetching random Pokémon!');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto', width: '50%' }}>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
        style={{ width: '60%', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button className='btn btn-primary' onClick={handleSearch} style={{ marginRight: '10px' }}>Search</button>
      <button className='btn btn-success ' onClick={handleRandom}>Random Pokémon</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData && (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', marginTop: '20px' }}>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={{ marginBottom: '10px' }} />
          <h3>Abilities:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokeSearch;
