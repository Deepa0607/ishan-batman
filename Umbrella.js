class Umbrella
{
    constructor(x, y){
        var options ={
            isStatic:true                     

        }
     this.image=loadImage("images/Walking Frame/walking_5.png")
        this.r=50;
        this.body=Bodies.circle(x, y, 150, options)
        World.add(world, this.body)
    }   
    display(){
        var paperpos=this.body.position;
      imageMode(CENTER)
image ( this.image, paperpos.x, paperpos.y,300, 300)
}}  