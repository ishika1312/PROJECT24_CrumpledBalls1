class Paper {
    constructor (x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Matter.Bodies.circle(x , y, radius, options);
        World.add(world, this.body);

    }

    display() {

        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x , this.body.position.y , 25);
    }
 }