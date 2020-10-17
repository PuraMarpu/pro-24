class Paper{
    constructor(x,y){

      var op={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }

      this.pap = Bodies.circle(x,y,20,op);

      World.add(world,this.pap);
    }
    display(){
        var ang = this.pap.angle;
       
        push();
        translate(this.pap.position.x,this.pap.position.y);
        rotate(ang);
        ellipseMode(RADIUS);
        fill("red");

        ellipse(0,0,20);
        pop();
    }
}