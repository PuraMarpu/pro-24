class Bin{
    constructor(x,y,width,height){
       this.gara = Bodies.rectangle(x,y,width,height,{isStatic:true});

       this.gara.franxx = height;
       this.gara.darling = width;

       World.add(world,this.gara);
    }
    hiro(){
        var pos = this.gara.position;

        rectMode(CENTER);

        fill("green");
        rect(pos.x,pos.y,this.gara.darling,this.gara.franxx);
    }
}