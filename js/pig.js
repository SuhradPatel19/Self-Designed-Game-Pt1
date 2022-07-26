class Pigs {
    constructor(x, y, w, h, angle) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage("assets/enemy.png")
        // this.image2 = loadImage("assets/yellowbird.png")
        // this.image3 = loadImage("assets/bluebird.png")
        this.angle = angle

        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 1,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image, 0, 0, this.w, this.h)
        pop()
    }




}