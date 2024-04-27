import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [typeImages, setTypeImages] = useState([]);

  useEffect(() => {
    // Fetch type images
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => {
        const types = response.data.results;
        const images = types.reduce((acc, type, index) => {
          acc[type.name] = `https://pokeapi.co/api/v2/type/${index + 1}/`;
          return acc;
        }, {});
        console.log("Type Images:", images); // Log fetched type images
        setTypeImages(images);
      })
      .catch(error => console.error('Error fetching type images:', error));
  }, []);
  

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!pokemonName.trim()) { // Check if pokemonName is empty or whitespace
      setError('Please enter a Pokémon');
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      console.log(response.data);
      setPokemonData(response.data);
      setError('');
    } catch (err) {
      setPokemonData(null);
      setError(err.message || 'Pokemon not found!');
    } finally {
      setLoading(false);
    }
  };
  

  const handleRandom = async () => {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemonData(response.data);
      setError('');
    } catch (err) {
      setPokemonData(null);
      setError(err.message || 'Error while fetching random Pokémon!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto', width: '50%' }}>
      <h1>Pokémon Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
          style={{ width: '60%', padding: '10px', marginBottom: '10px' }}
          disabled={loading}
        />
        <br />
        <button onClick={handleSearch} type="submit" className='btn btn-primary' disabled={loading} style={{ marginRight: '10px' }}>
          {loading ? 'Searching...' : 'Search'}
        </button>
        <button type="button" className='btn btn-success' onClick={handleRandom} disabled={loading}>
          {loading ? 'Fetching...' : 'Random Pokémon'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData && (
        <div style={{color: "black", width: "30%", margin: "auto", marginTop: "20px", border: "15px solid #ffd459"}} className="card">
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
</div>
          <img style={{backgroundColor: "grey"}} className='card-img-top' src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <div className='card-body'>
          <h2 className='card-title'>{pokemonData.name}</h2>
          </div>
          <ul className='list-group list-group-flush'>
            {pokemonData.abilities.map((ability, index) => (
              <li className='list-group-item' key={index}>Ability: {ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokeSearch;