const Sketch = (p, width, height) => {
     p.setup = () => {
      p.createCanvas(width, height);
      p.frameRate(30);
    }

     p.draw = () => {
      p.background([150, 10, 10]);
    }

  }

  export default Sketch;

