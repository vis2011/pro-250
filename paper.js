class paper{
  constructor(x,y,r){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0,
       density:1.2
   }

   this.body=Bodies.circle(x,y,r,options);
   this.image=loadImage("paper.png");
   this.body.scale=1;
   this.x=x;
   this.y=y;
   this.width=r;
   this.height=r;
   World.add(world,this.body);
  }

  display(){

    push()
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop()
  }
}