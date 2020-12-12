class Paper{
    constructor(x,y,radius){
        var prop={
            isStatic:false,
            restitution: 0.3,
            friction : 0.5,
            density: 1.2
        }
       this.image=loadImage("paper image.png") 
        this.body=Bodies.circle(x,y,radius/2,prop);
        this.radius=radius;
        World.add(world,this.body);
    }
display(){
    var pos= this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius)
    //ellipseMode(RADIUS);
    //ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
}
}
    