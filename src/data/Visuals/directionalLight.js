

const Sketch = (p, width, height) => {
    const radius = 200;

    p.setup() {
        p.createCanvas(710, 400, WEBGL);
        p.noStroke();
        p.fill(200);
    }

    p.draw() {
        p.noStroke();
        p.background(0);
        const dirY = (mouseY / height - 0.5) * 4;
        const dirX = (mouseX / width - 0.5) * 4;
        p.directionalLight(204, 204, 204, dirX, dirY, 1);
        p.translate(-1.5 * radius, 0, 0);
        p.sphere(radius);
        p.translate(3 * radius, 0, 0);
        p.sphere(radius);
    }


}

export default Sketch;

