class Bird {
    constructor(x, y, w, h,angle) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image1 = loadImage("assets/redbird.png")
        this.image2 = loadImage("assets/yellowbird.png")
        this.image3 = loadImage("assets/bluebird.png")
        this.angle=angle

        var options = {
            isStatic:true,
            restitution: 0.8,
            friction: 1,
            density: 1,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body)


    }

    displayRed() {
        var pos = this.body.position
        var angle = this.body.angle
        Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image1, 0, 0, this.w, this.h)

        pop()
    }

    displayYellow() {
        var pos = this.body.position
        var angle = this.body.angle
        Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image2, 0, 0, this.w, this.h)

        pop()
    }

    displayBlue() {
        var pos = this.body.position
        var angle = this.body.angle
        Matter.Body.setAngle(this.body,this.angle)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        noStroke()
        fill("brown")
        image(this.image3, 0, 0, this.w, this.h)

        pop()
    }

    





}