const Sketch = (p, width, height) => {

  let widthRatio = 10;
  let w = width / widthRatio;

  let colorPallette = {
    pink: [243, 218, 216],
    green: [135, 186, 171],
    blue: [0, 105, 146]
  }

  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    p.frameRate(60);
    p.scale(0.25);

  }

  p.draw = () => {

    p.background(colorPallette.pink);
    p.noStroke();
    p.fill(colorPallette.green);


    p.orbitControl();
    p.scale(0.5)
    let boxNumber = 0;

    for (let x = - width; x < width; x += w * 2) {

      p.rotateX(p.frameCount * 0.005);
      p.push();
        p.rotateY(p.frameCount * 0.005);

        p.translate(x, w);

        if (x === 0) {
          p.fill(colorPallette.blue);
        }

        if (boxNumber <= 10) {
          boxNumber++;
          if (boxNumber % 2 === 0) {
            p.fill(colorPallette.blue)
          }
        }

        p.box(w, w, w);

      p.pop();

    }

  }

}

export default Sketch;
