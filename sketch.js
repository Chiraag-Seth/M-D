const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground, ball, sheet,treasure;
var backgroundImg, backgroundImg2;
var PC1, PC2,PC1img
var PCA1,PCB1, PCAImg, PCA2, PCB2;
var ninHouse;
var Img;
var beeper;
var STEP1 = 1;
var STEP2 = 2;
var STEP3 = 3;
var STEP4 = 4;
var STEP5 = 5
var STEP6 = 6;
var STEP7 = 7;
var gameState = STEP1;

function preload(){
  
  backgroundImg = loadImage("Mansion.png");
  PCAImg = loadAnimation("Walking1.png", "Walking2.png", "Walking3.png");
  backgroundImg2 = loadImage("InsideHouse.png");
  //PC1img = loadImage("RichMan.png");

}

function setup() {
  createCanvas(1215,400);
  engine=Engine.create();
  
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(120,380,1000,50,option);
   World.add(world,ground);
 
   
  
  //PC1 = createSprite(150,255,150,200);
  //PC1.addImage(PC1img);
  PC1=new FirstAppearance(150,255,100,200)
  //sheet = new Note(300,125,32,40);
  //beeper = new Faller();
  //treasure = new Treasure(100,255);
 PCA1 = new SecondAppearance(150,255,100,200);
 
 sheet = new Note();
 //PCB1 = new ThirdAppearance();
  //ninHouse = new Ninja4(650,255,150,200);
  //PC2 = new Detective();
 
  
   
   
   

 
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  console.log(ground)
 drawSprites();
 
  //"What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom"
  if(gameState === STEP1){
   richman();
    
    //beeper.display();
  //  if(beeper.height < ground.height / 2 &&
    //  ground.height < beeper / 2 &&
      //beeper.width < ground.width / 2 &&
      //ground.width < beeper / 2){
        //gameState = STEP2;
      //}
  }
  


  if(gameState === STEP2){
   
       richman1();
       //backgroundImg.addImage("inside",backgroundImg2)
      
  }
   
      }
      function richman(){
        PC1.display();
        fill("black")
        textSize(20)
        text("What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom", 190, 100);
        
      
        sheet.display();
      }
      function richman1(){
        
       
       
       background(backgroundImg2)
      
        if(PCA1.x >= 600){
          PCA1.velocityX = 0;
        }
      // treasure = new Treasure(100,255);
      // treasure.display();
       
        //sheet = loadImage("NothingNess.png");
        
       
    /*PC1.velocityX = 3;
    if(PC1.x >= 600){
      PC1.velocityX = 0;
      if(frameCount % 700 === 0){
        backgroundImg = loadImage("drsw.png");
        var Cont = createElement(`h2`, "Next Morning...");
        Cont.position(400,200);
      }*/
      /*if(frameCount === 122){
        gameState = STEP3;
      }
    }*/
    fill("black")
    text("Now to unlock the door like mom said",200, 300);
      }
function keyPressed(){
  if(keyCode === 32){
    gameState = STEP2;
    if(keyCode === 122){
      gameState = STEP3;
    }
      }
}