import React from 'react';
import { TeamProvider } from './contexts/TeamContext';
import Pokedex from './components/Pokedex';
import TeamView from './components/TeamView';
import './App.css';

const App = () => {
  return (
    <TeamProvider>
      <div className="App">
        <h1>Pokémon Dream Team Builder</h1>
        <TeamView />
        <Pokedex />
      </div>
    </TeamProvider>
  );
};

export default App;