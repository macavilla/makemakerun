import React, { useRef, useEffect } from 'react';
import p5 from 'p5';


const Canvas = (props) => {

    const { width, height } = props;
    const myRef = useRef();

    let Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(width, height);
            p.frameRate(30);
        }

        p.draw = () => {
            p.background([150, 10, 10]);
        }

    }



    useEffect(() => {
        console.log('Sketch width: ', width);
        console.log('Sketch: ', Sketch);
        const myP5 = new p5(Sketch, myRef.current);
    }, []);



    return (

        <div className={'awesome canvas'} ref={myRef}> </div>
    )
};

export default Canvas;