// characters 
let geometria = ['◜', '◝', '◞', '◟', '◦', '.', '⦁', '●', ' '];
let tetris = ['▖', '▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟', '░'];
let diagonales = ['╳', '╲', '╱'];
let triangles = ['◣', '◢', '◤', '◥', ' '];
let stripes = ['◧', '◨', '◩', '◪', '◫'];

let monospace = ['Lucida Console', 'Courier New']

let word = 'planeta';

let counter = 0;
p1 = new P5();
p1.textAlign(p1.CENTER);
p1.fill('white');
p1.textFont(monospace[0]);
p1.textSize(gap + p1.random(-10, 10));

p1.clear();

for (let x = 0; x < p1.displayWidth; x++) {
    for (let y = 0; y < p1.displayHeight; y++) {

        let char = p1.random(triangles);

        if (x > p1.displayWidth * 0.3 && x < p1.displayWidth * 0.6) {
            p1.fill(245, 66, 66);
        }

        p1.text(char, x * gap, y * gap);

    }
}









