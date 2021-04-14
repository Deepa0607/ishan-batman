class Drop
{
    constructor(x, y){
        var options ={
            
            restitution:0.1,
            friction:0.001   
        }
     
        this.r=5;
        this.body=Bodies.circle(x, y, 5, options)
        World.add(world, this.body)
        
    }
    display(){
        var paperpos=this.body.position;
        fill("blue")
        ellipseMode(CENTER)
        ellipse (paperpos.x, paperpos.y+50, this.r, this.r)
}
updateDrops(){
    if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,600)})
    }
}


}