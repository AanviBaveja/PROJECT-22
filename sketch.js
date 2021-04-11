var starImg,bgImg;
var star, starBody;
var fairy, fairyImage, fairybody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage=loadImage("images/fairyImage.png")
	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
     
	//create fairy sprite and add animation for fairy
   fairy = createSprite(80,530);
	fairy.addImage(fairyImage);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	fairybody = Bodies.circle(80 , 530 , 5 ,  {restitution:0, isStatic:true});
	World.add(world, fairybody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
//   fairy.x= fairybody.position.x 
//   fairy.y= fairybody.position.y 

  console.log(star.y);
 

  //write code to stop star in the hand of fairy
  if(star.y>500 && starBody.position.y>500){
	  Matter.Body.setStatic(starBody,true)
  }
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode=== RIGHT_ARROW){
		fairy.x=fairy.x+5

   
	}
	if(keyCode=== LEFT_ARROW){
		fairy.x=fairy.x-5

   
	}
	
}
