
// A simple Particle class

class Particle {
    constructor(position, col) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = position;//.copy();
        this.lifespan = 255;
        this.colorspan = 150;
        this.size = 12;
        this.col = col;
    }
    run() {
        this.update();
        this.display();
    }
    applyForce(aForce) {
        this.acceleration.add(aForce);
    }

    // Method to update position
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        
        this.bounceOffWalls();

        this.lifespan -= 3; // 알파값 줄어짐
        this.colorspan += this.velocity.x;
        this.size += 2;
        // this.col  = 100  + 10*map(noise( this.size  ),0,1,0,40);
        print(this.col);
        this.acceleration = createVector(0, 0); //가속도 초기화
    }

    // Method to display
    display() {
        noStroke();

        fill(this.col, this.colorspan * 3, this.col, this.lifespan);

        rect(this.position.x, this.position.y, this.size, this.size);
        noFill();
        stroke(255);
        ellipse(this.position.x + this.size/2, this.position.y+ this.size/2, this.size, this.size);
    }
    bounceOffWalls() {

        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -1;
        }

        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y *= -1;
        }

        if (this.position.y > height) {
            this.position.y = height;
            this.velocity.y *= -1;
            
        }
     
    }

    // Is the particle still useful?
    isDead() {
        return this.lifespan < 0;
    }
 
}