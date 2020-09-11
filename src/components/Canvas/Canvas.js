import React, { useRef, useEffect } from 'react';
import p5 from 'p5';


const Canvas = (props) => {

    const { width, height } = props;
    const myRef = useRef();

    let Sketch = (p) => {
        let yoff = 0.0; // Segunda dimensión del ruido Perlin
        
        p.setup = () => {
            p.createCanvas(width, height);
            p.frameRate(30);
        }

        p.draw = () => {


            p.background(51);

            p.fill(255);

            
            // Dibujaremos un polígono a partir de los puntos de la onda
            p.beginShape();
          
            let xoff = 0; // Opción #1: ruido 2D
            // let xoff = yoff; // Opción #2: ruido 1D
          
            // Iterar sobre los pixeles horizontales
            for (let x = 0; x <= width; x += 10) {
              // Calcular un valor de y según el ruido, escalar según
              // Opción #1: ruido 2D
              let y = p.map(p.noise(xoff, yoff), 0, 1, 200, 300);
          
              // Opción #2: ruido 1D
              // let y = map(noise(xoff), 0, 1, 200,300);
          
              // Definir el vértice
              p.vertex(x, y);
              // Incrementar la dimensión x para el ruido
              xoff += 0.05;
            }
            // Incrementar la dimensión y para el ruido
            yoff += 0.01;
            p.vertex(width, height);
            p.vertex(0, height);
            p.endShape(p.CLOSE);
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