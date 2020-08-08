import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Inventory from './views/inventory'

function App() {
  return (
    <div className="App">
      <Home/>
      <Inventory/>
    </div>
  );
}

export default App;
