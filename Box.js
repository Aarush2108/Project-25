class Box{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.image=loadImage("dustbin.png")
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,-40,this.width,this.height);
        //rect(pos.x,pos.y,this.width,this.height);
        pop();
    }}