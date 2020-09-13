import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
// import Wall from "./components/Wall";


function App() {

  // state
  const [allCanvas, setAllCanvas] = useState([]);
  
  // TODO: get random Canvas from /data/visuals
  // function getRandomCanvas() {
  //   setAllCanvas([...allCanvas, {width: '100vw', height: '100vh'}]);

  // }


  // function handleCallback(canvasSize) {
  //   // TODO: Isolate CreateCanvas inside Dashboard to customize Canvas size

  //   // canvasSize custom with <CreateCanvas handleCallback={handleCallback}>
  //   setAllCanvas([...allCanvas, canvasSize]);
  // }

  return (
    <div className="App">


      <Canvas isFullscreen={true} / >
      {/* <Wall  allCanvas={allCanvas}></Wall> */}

    </div>
  );
}

export default App;
