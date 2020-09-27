console.log('current sketch');

const Sketch = (p, width, height) => {

  let widthRatio = 10;
  let w = width / widthRatio;
  let gap = 55;



  let colorPallette = {
    pink: [243, 218, 216],
    green: [135, 186, 171],
    blue: [0, 105, 146]
  }



  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    p.frameRate(60);
    p.angleMode(p.DEGREES); // Change the mode to DEGREES

  }

  p.draw = () => {

    p.background(colorPallette.pink);
    // p.noStroke();
    p.fill(colorPallette.blue);
    p.stroke(3);



    for (let rows = - width; rows < width; rows += gap) {

      for (let cols = - height; cols < height; cols += gap) {

        p.push();
        p.translate(rows, 0);
        p.translate(0, cols);

        if (rows % 2 === 0) {
          p.translate(p.random(0, gap), 0)
          p.rotate(p.random(0, 360));
        }

        if (cols % 2 === 0) {
          p.translate(0, p.random(0, gap))
        }

        stackedLines(50, 5, 5);
        p.pop();
      }


    }



  }


  function stackedLines(width, distance, howManyLines) {
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;


    for (let i = 0; i < howManyLines; i++) {
      p.push();
      // 1) x1 + width = x2
      x2 = x1 + width;
      p.line(x1, y1, x2, y2);
      // 2) y1 + dist = y2
      y1 += distance;
      y2 += distance;
      p.line(x1, y1, x2, y2);
      p.pop();

    }


  }


}

export default Sketch;
