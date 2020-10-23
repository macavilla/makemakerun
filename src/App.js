import React from 'react';
import './App.css';
import Canvas from './components/Canvas';


function App() {
  return (
    <div className="App">
      <Canvas isFullscreen={true} />
    </div>
  );
}

export default App;
