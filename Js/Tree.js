class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction: 1.5,
          desity: 1.2
      }
      this.image = loadImage("images/tree.png");
      this.body = Bodies.ellipse(this.x,this.y,this.width, height, options);
      this.width = width
      this.height = height
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push ()
        translate (pos.x, pos.y)
        rotate (angle)
        imageMode(CENTER);
        fill("grey");
        ellipseMode (CENTER)
        ellipse(pos.x, pos.y, pos.r);
        image(this.image, 0, 0, this.width, this.height);
        pop ()
      }
    };