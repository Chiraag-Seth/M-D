class FirstAppearance{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
       // this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        
         this.image = loadImage("Standing.png");
         World.add(world,this.body);
         //this.body = Bodies.rectangle(x,y,width,height)
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
    }

