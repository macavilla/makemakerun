import React from 'react';
import Canvas from '../Canvas/Canvas';

function Wall(props) {
    const {allCanvas} = props;



    return (
        <div className=" wall canvas-wrapper">
            {
                allCanvas.map((item, key) => {
                    return( <Canvas width={item.width} height={item.height} key={key} /> )
                })
                
            }
        </div>
    );
}

export default Wall;