console.log('current sketch');

// https://www.youtube.com/watch?v=YcdldZ1E9gU

const Sketch = (p, width, height) => {
  let colorPallette = {
    pink: [243, 218, 216],
    green: [135, 186, 171],
    blue: [0, 105, 146]
  }



  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    // p.frameRate(60);
    // p.angleMode(p.DEGREES); // Change the mode to DEGREES



  }

  p.draw = () => {

    p.background(colorPallette.blue);


  }




}

export default Sketch;
