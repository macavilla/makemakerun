import React, { useState } from 'react';
import './App.css';

import CreateCanvas from "./components/CreateCanvas";
import Wall from "./components/Wall";
// import Canvas from "./components/Canvas";


function App() {

  // state
  const [allCanvas, setAllCanvas] = useState([]);


  function handleCallback(canvasSize) {
    setAllCanvas([...allCanvas, canvasSize]);
  }

  return (
    <div className="App">

      <CreateCanvas handleCallback={handleCallback} />

      <Wall allCanvas={allCanvas}></Wall>

    </div>
  );
}

export default App;
