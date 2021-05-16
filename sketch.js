const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour
var bg ;

function preload() {
   getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
     background(backgroundImg);
      }


    Engine.update(engine);
     fill("black");
     textSize(30)
    if(hour>=12){
     text("TIME: "+hour%12+" PM",50,100)
    }
    else if(hour==0){
    text("TIME: 12 AM ",100,100)
    }
    else {
     text("TIME: "+hour,50,100)   
    }

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;

    hour = datetime.slice(11,13)


   if(hour>=04&&hour<=06){
       backgroundImg=loadImage("sunrise1.png")
   }
  else if(hour>=06&&hour<=08){
    backgroundImg=loadImage("sunrise2.png") 
  }
  else if(hour>=08&&hour<=11){
    backgroundImg=loadImage("sunrise3.png") 
  }
  else if(hour>=11&&hour<=13){
    backgroundImg=loadImage("sunrise4.png") 
  }
  else if(hour>=13&&hour<=15){
    backgroundImg=loadImage("sunrise5.png") 
  }
  else if(hour>=15&&hour<=17){
    backgroundImg=loadImage("sunrise6.png") 
  }
  else if(hour>=17&&hour<=18){
    backgroundImg=loadImage("sunset7.png") 
  }
  else if(hour>=18&&hour<=20){
    backgroundImg=loadImage("sunset8.png") 
  }
  else if(hour>=20&&hour<=23){
    backgroundImg=loadImage("sunset9.png") 
  }
   else  if(hour>=23&&hour==0){
    backgroundImg=loadImage("sunset10.png") 
  }
   else if(hour==0&&hour<=03){
    backgroundImg=loadImage("sunset11.png") 
  }
   else{
    backgroundImg=loadImage("sunset12.png")    
  }
}
  