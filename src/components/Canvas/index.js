import React, { useRef, useState, useEffect } from 'react';
import p5 from 'p5';
import Sketch from '../../data/Sketch/current'

const Canvas = (props) => {

    const { isFullscreen } = props;
    const myRef = useRef();

    const [width] = useState(isFullscreen ? window.innerWidth : props.width);
    const [height] = useState(isFullscreen ? window.innerHeight : props.height);

    let loadSketch = (p) => {
        console.log(p);
        Sketch(p, width, height);
    }

    useEffect(() => {
        console.log('Sketch width: ', width);
        // console.log('Sketch: ', Sketch);
        const myP5 = new p5(loadSketch, myRef.current);
    }, [])



    return (
        <div className={'awesome canvas'} ref={myRef}> </div>
    )
};

export default Canvas;