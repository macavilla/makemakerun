let Sketch = (p, width, height) => {
    p.setup = () => {
        p.createCanvas(width, height, p.WEBGL);
    }

    p.draw = () => {
        p.background(0);

        let locX = p.mouseX - height / 2;
        let locY = p.mouseY - width / 2;

        p.ambientLight(50);
        p.directionalLight(255, 0, 0, 0.25, 0.25, 0);
        p.pointLight(0, 0, 255, locX, locY, 250);

        p.push();
            p.translate(-width / 4, 0, 0);
            p.rotateZ(p.frameCount * 0.02);
            p.rotateX(p.frameCount * 0.02);
            p.specularMaterial(250);
            p.box(100, 100, 100);
        p.pop();

        p.translate(width / 4, 0, 0);
        p.ambientMaterial(250);
        p.sphere(120, 264);
    }
}

export default Sketch;