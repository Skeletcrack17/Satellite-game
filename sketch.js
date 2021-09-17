var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;

function preload(){
  
  earthImg = loadAnimation("other/earth1.png");
  satelliteImg = loadImage ("satellite.png");
  groundStationLeftImg = loadImage ("leftd/dleft1.png");
   groundStationRightImg = loadImage ("rightd/dright1.png");
  
  
}

function setup(){
  createCanvas(700,500);
  
  earth = createSprite (350,820, 50,50);
  earth.addAnimation("Earth", earthImg);
  earth.scale = 0.7;
  
  
  
  satelitte = createSprite(350, 70, 50, 50);
  satelitte.addImage ("Satellite", satelliteImg);
  satelitte.scale = 0.8;
  
  groundStationLeft = createSprite (150,300,20,20);
  groundStationLeft.addImage ("Ground station", groundStationLeftImg);
  groundStationLeft.scale = 0.09;
  
  groundStationLeft.visible = false;
  
  
  
   groundStationRight = createSprite (450,300,20,20);
  groundStationRight.addImage ("Ground station", groundStationRightImg);
  groundStationRight.scale = 0.09;
  
  groundStationRight.visible = false;
  
 
  
  
  
}

function draw(){
  background("black")
  
  if(keyDown("L")) {
    groundStationRight.visible = true;
  }
  
  if (keyDown("R")) {
    groundStationRight.visible = true;
  }
  
  
  if(keyDown("LEFT_ARROW")) {
    groundStationLeft.visible = true;
  }
  
  if (keyDown("RIGHTARROW")) {
    groundStationLeft.visible = true;
  }
  
  
  
  drawSprites();
  textSize(15);
  fill("white");
  
  text("Presiona las teclas L & R ", 5, 15);
  text("- para solicitar datos del satélite ", 5, 30);
  text("Presiona las teclas de flecha Izquierda y Derecha ", 5, 50 );
  text("-para recibir los datos del satélite")
  
  textSize(15);
  fill("white");
  
  if(keyDown("L")){
    text("solicitando datos del satélite ", 10,300);
  }
  
  
  if(keyDown("R")){
    text("solicitando datos del satélite ",300,300);
  }
  
  
  if(keyDown("LEFT_ARROW")){
    text("transfiriendo datos a la estación base izquierda", 10,300);
  }
  
  
  if(keyDown("RIGHT_ARROW")){
    text("transfiriendo datos a la estación base derecha ", 10,300);
  }
  
}