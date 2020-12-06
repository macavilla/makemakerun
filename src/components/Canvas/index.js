import React, { useRef, useState, useEffect } from 'react';
import p5 from 'p5';
import DefaultSketch from '../../data/Sketch/defaultSketch'

const Canvas = (props) => {

    const { isFullscreen, customSketch } = props;
    const myRef = useRef();

    const [width] = useState(isFullscreen ? window.innerWidth : props.width);
    const [height] = useState(isFullscreen ? window.innerHeight : props.height);

    let loadSketch = (p) => {
        console.log(p);
        if (customSketch) {
            customSketch(p);
        } else {  
            DefaultSketch(p, width, height);
        } 
    }

    useEffect(() => {
        console.log('Sketch width: ', width);
        // console.log('Sketch: ', Sketch);
        const myP5 = new p5(loadSketch, myRef.current);
    }, [])



    return (
        <div className={'awesome canvas wrapper'} ref={myRef}> </div>
    )
};

export default Canvas;