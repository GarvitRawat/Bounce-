var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(300, 200, 50, 20)
  movingRect = createSprite(100, 200, 70, 30)

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

  fixedRect.velocityX = -4
  movingRect.velocityX = 5
}

function draw() {
  background(0);  

  console.log(movingRect.x - fixedRect.x)

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 ){

      fixedRect.velocityX = fixedRect.velocityX * (- 1)
      movingRect.velocityX = movingRect.velocityX * (- 1)

     }
       
  if (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

      fixedRect.velocityY = fixedRect.velocityY * (- 1)
       movingRect.velocityY = movingRect.velocityY * (- 1)

  }
  
  drawSprites();
}
