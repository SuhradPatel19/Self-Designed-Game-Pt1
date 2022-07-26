class Slingshot {
    constructor(bodyA, pointB) {
        this.bodyA = bodyA
        this.pointB = pointB

        this.image1 = loadImage("assets/sling1.png")
        this.image2 = loadImage("assets/sling2.png")
        this.image3 = loadImage("assets/sling3.png")


        var options = {
            length: 10,
            stiffness: 0.01,
            bodyA: bodyA,
            pointB: pointB,
        }

        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)


    }

    detach() {
        Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:this.pointB.x,y:this.pointB.y})

        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }

    display() {
        // var pos = this.body.position
        // var angle = this.body.angle
        image(this.image1, 200, 80)
        image(this.image2, 170, 80)
        // image(this.image3, 200, 200,100 ,100)

        if (this.sling.bodyA) {



            var pointA = this.sling.bodyA.position
            var pointB = this.pointB

            push()
            stroke("black")
            strokeWeight(3)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        }
    }







}