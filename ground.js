class Ground{
    constructor(x,y,width,height){
        var rect_options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width,height,rect_options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        push ();
        translate (this.body.position.x,this.body.position.y);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();




    }

}