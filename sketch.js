var play=1;
var end=0;
var gamestates=play;

function preload(){
  WaterImage=loadImage("water.jpg");
  SubmarineImage=loadImage("submarine.jpg");
  WeaponImage=loadImage("weapon.png");
  ExplosionSound=loadSound("Explosion Sounds - Free Sound Effects - Explosion Sound Clips - Sound Bites_14.MP3")
}

function setup() {
  createCanvas(600,600);
  
  Water=createSprite(600,500);
  Water.addImage("water",WaterImage);
  Water.velocityX=-4;
  Water.scale=2;
  
  Submarine=createSprite(150,300);
  Submarine.addImage("submarine",SubmarineImage);
  Submarine.scale=0.5;
  
  WeaponGroup=new Group();
}

function draw() {
  background("white");
  
  if(gamestates==play){
    if(Water.x < 0){
       Water.x = Water.width/2;
    }
    if(keyDown("up_arrow")){
       Submarine.y=Submarine.y-3; 
    }
  
    if(keyDown("down_arrow")){
       Submarine.y=Submarine.y+3; 
    }
    createWeapon();
  }
  
   if(Submarine.isTouching(WeaponGroup)){
     Submarine.destroy();
     WeaponGroup.destroyEach();
     gamestates=end;
     ExplosionSound.play();
  }
  
  if(gamestates==end){
    textSize(30);
    text("GAME OVER",300,300);
  }
  
  drawSprites();
}

function createWeapon(){
  if(frameCount%200===0){
    Weapon=createSprite(450,200);
    Weapon.addImage("missile",WeaponImage);
    Weapon.scale=0.2;
    Weapon.y=Math.round(random(50,500));
    Weapon.velocityX=-2;
    Weapon.lifetime=300;
    WeaponGroup.add(Weapon);
    
  }
}