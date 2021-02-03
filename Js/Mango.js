class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          friction: 1.5,
          desity: 1.2
      }
      this.image = loadImage("images/mango.png");
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ()
      translate (pos.x, pos.y)
      rotate (angle)
      imageMode(CENTER);
      ellipseMode (CENTER)
      ellipse(pos.x, pos.y, pos.r);
      image(this.image, 0, 0, this.r * 2, this.r * 2);
      pop ()
    }
  };
