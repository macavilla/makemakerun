import React from 'react';
import Canvas from "../../components/Canvas";
import Sketch  from '../../data/Visuals/beesandbombs'


const Home = () => {
    return (
        <div>
            <Canvas 
            isFullscreen={true} 
            // customSketch={Sketch} 

            />
        </div>
    );
};

export default Home;