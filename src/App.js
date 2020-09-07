import React, { useState } from 'react';
import './App.css';

import Canvas from "./components/Canvas";
import CreateCanvas from "./components/CreateCanvas";


function App() {

  // state
  const [allCanvas, setAllCanvas] = useState([]);


  function handleCallback(canvasSize) {
    console.log('handleCallback in App');

    setAllCanvas([...allCanvas, canvasSize]);

  }

  return (
    <div className="App">

      <CreateCanvas handleCallback={handleCallback} />

      <div className="canvas-wrapper">

        {
        allCanvas.map( (element, key) =>{
          return ( <Canvas width={element.width} height={element.height} key={key} /> )
        } )
        }       
         {/* <Canvas /> */}
      </div>

    </div>
  );
}

export default App;
