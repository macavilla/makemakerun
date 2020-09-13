const Sketch = (p, width, height) => {
  // Daniel Shiffman
  // http://codingtra.in
  // http://patreon.com/codingtrain
  // Code for: https://youtu.be/IKB1hWWedMk
  
  // Edited by SacrificeProductions
  
  var cols, rows;
  var scl = 20;
  var w = width;
  var h = height;
  
  var flying = 0;
  
  var terrain = [];
  
  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    cols = w / scl;
    rows = h / scl;
  
    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
      for (var y = 0; y < rows; y++) {
        terrain[x][y] = 0; //specify a default value for now
      }
    }
  }
  
  p.draw = () => {
    flying -= 0.01;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }
  
    p.background(0);
    p.translate(0, 50);
    p.rotateX(p.PI / 3);
    p.fill(200, 200, 200, 50);
    p.translate(-w / 2, -h / 2);
    for (var y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (var x = 0; x < cols; x++) {
        p.vertex(x * scl, y * scl, terrain[x][y]);
        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p.endShape();
    }
  }
    }
  
    export default Sketch;
  
  