class Stone {
    constructor(x,y,r) {
      var options = {
          desity: 1.2,
          friction: 1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("images/stone.png");
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      ellipse(pos.x, pos.y, pos.r);
      image(this.image, 0, 0, this.r * 2, this.r * 2);
    }
  };
