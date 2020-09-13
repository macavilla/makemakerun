const Sketch = (p, width, height) => {
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/H81Tdrmz2LA

// Original GIF: https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 24;
let ma;
let maxD;

p.setup = () => {
  p.createCanvas(width, height, p.WEBGL);
  ma = p.atan(p.cos(p.QUARTER_PI));
  maxD = p.dist(0, 0, 200, 200);
}

p.draw = () => {
  p.background(255, 250, 250);
  p.ortho(-400, 400, 400, -400, 0, 1000);
  p.rotateX(ma);
  p.rotateY(-p.QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      p.push();
        let d = p.dist(x, z, width / 2, height / 2);
        let offset = p.map(d, 0, maxD, -p.PI, p.PI);
        let a = angle + offset;
        let h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));
        p.translate(x - width / 2, 0, z - height / 2);
        p.normalMaterial();
        p.box(w, h, w);
        // p.rect(x - widt  h / 2 + w / 2, 0, w - 2, h);
      p.pop();
    }
  }

  angle -= 0.1;
}

  }

  export default Sketch;

