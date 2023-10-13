import React from 'react';
import './App.css';
import PokemonView from './component/PokemonView';
import NavBar from './component/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <PokemonView/>
    </>
  );
}

export default App;
