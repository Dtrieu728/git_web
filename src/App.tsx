import React from 'react';
import './App.css';
import HomePage from './pages/home-page';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <HomePage />
      </div>
    </DarkModeProvider>
  );
}

export default App;
