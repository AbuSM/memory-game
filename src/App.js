import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Card from './features/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}

export default App;
