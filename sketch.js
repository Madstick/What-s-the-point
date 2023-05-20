//What's the point?
//A project by Akira Ishi

let seed= 0;
let numShapes;
let paramScale;
let noiseScale;
let noiseStrength;
let noiseValue;
let paintValueXArr = [];
let paintValueYArr = [];
let shapeIrregularity;
let xx;
let yy;
let colorArrays;
let randomColorArray;
let shapesX = [];
let shapesY = [];
let shapesRads = [];
let shapesFills = [];
let drawnEllipses = [];
let getBg;
let turbulence;
let turbu;
let forbiddenSetting = false;
let radialStrength;
let numSpirals;
let cornerSpiralsX ;
let cornerSpiralsY;
let cornerSpacing;
let spiralMethod = false;
let cornerSpirals = false;
let triptych = false;
let fracture=false;
let droplets =false;
let grid =false;
let superposedGrid =false;
let flowGrid=true;
let dropletsSizeContrast;
let strokeC = false;
let billy;
let trypStrength;
let noiseCrisp;
let noise2Strength;
let noise2Scale;
let noise2Scale2 ;
let noise2Trigger = true;
let colorAlgo= false;
let index=0;
let prob1;
let prob2;
let prob3;
let shapeHeights = [];
let shapeWidths = [];
let gridSpacing;
let numCircles = 10;
let randomWidthFactors = [];
let randomHeightFactors = [];
let colorConstrast;
let ellipseSize;
let highlightOpacity;
let colorAlgoTrigger=false;
let pointsHorizontal=false;
let texturedColorAlgo=false
let strokecolora=false;
let strokecolortrigg;
let texture1Data = [];
let texture2Data = [];
let texture3Data = [];
let texture1Trigger=false;
let texture2Trigger=false;
let texture3Trigger=true;
let colortexture1=true;
let noiseScaleTexture1;
let colortexture2=false;
let texture2varia=false;
let noise2Power;
let colortexture3=false;
let ellipseCount;
let ellipseSizec;
let vectors = [];
let gridSize = 5;
let notTouch=true;
let cornerTextureX = [-0.2, 0.2, -0.2, 0.2]; // X offsets for the corner spirals
let cornerTextureY = [-0.2, -0.2, 0.2, 0.2]; // Y offsets for the corner spirals
let colorDespair = ["#292929", "#333333", "#3f3f3f", "#4b4b4b", "#565656", "#616161", "#6b6b6b", "#757575"];
let colorBloodandBones = ["#FF3333", "#FF6666", "#FF9999", "#FFCCCC", "#000000", "#333333", "#666666", "#999999", "#CCCCCC"];
//let colorPlague = ["#006400","#1E901E","#90EE90","#3CB371", "#333333", "#666666", "#999999"];
let colorBlue = ["#0047AB", "#4D648D", "#6793A7", "#91AECF", "#CDD7E5", "#000000", "#333333", "#666666", "#999999", "#CCCCCC"];
let colorYellow = ["#FDD017", "#F7D358", "#F3D9A9", "#F0E68C", "#FFF8DC", "#000000", "#333333", "#666666", "#999999", "#CCCCCC"];
let colorConfetti = ["#0047AB","#FDD017", "#FF6666","#FF9999","#F7D358","#006400", "#4D648D","#1E901E", "#333333", "#666666","#000000" ];
let colorConfettiNobl = ["#0047AB","#FDD017", "#FF6666","#FF9999","#F7D358","#006400", "#4D648D","#1E901E" ];
    colorOcean = ["#0077be", "#0099cc", "#00bfff", "#66ccff", "#b3e0ff", "#003366", "#004c99", "#0066cc", "#1a8cff", "#4da6ff"];
    colorMud = ["#ff7f50", "#ff9933", "#ffc300", "#ffd700", "#fffacd", "#d2b48c", "#8b4513", "#a0522d", "#cd853f", "#ffa07a"];
    colorFire = ["#ff0000", "#ff3300", "#ff6600", "#ff9933", "#ffcc00", "#663300", "#994d00", "#cc6600", "#ff9900"];
    colorPearl = ["#040310", "#DEBDA6", "#657B9D", "#9F463B", "#E5C68E",];
    colorSplash = ["#6598B0", "#C6AFA6", "#E2E2E0", "#4F745F", "#C8BF96",];
    colorMonet=["#d2c5b1","#bad6be","#80b8dd","#b17390","#356979"];
    colorImpressio= ["#6d6553","#c9b29f","#aea5a6","#b5b6a5","#a6a795"];
    colorEmerald=["#00b100","#008f00","#007f00","#007200","#005b00"]
    //colorRainbow = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3", "#FF1493", "#FF8C00", "#00FFFF"];
    colorAutumn = ["#8B0000", "#A52A2A", "#CD5C5C", "#F08080", "#FA8072", "#8B4513", "#A0522D", "#D2691E", "#FF7F50", "#FFA07A"];
    colorCraie = ["#FFB6C1", "#FFC0CB", "#FFDAB9", "#FFF0F5", "#F0E68C", "#FAFAD2", "#D3D3D3", "#90EE90", "#87CEFA", "#ADD8E6"];
    colorSun = ["#FFA500", "#FFB347", "#FFD700", "#FFFF00", "#FF6347", "#FF4500", "#FF8C00", "#FFDAB9"];
    colorDesert = ["#F4A460", "#D2B48C", "#BC8F8F", "#CD853F", "#8B4513", "#FFDEAD", "#FFE4B5"];
    colorCyber = ["#7a04eb", "#120458", "#fe75fe","#ff00a0"];
    colorWinter = ["#87CEFA", "#ADD8E6", "#B0C4DE", "#B8D9F1", "#D1E7F9", "#4169E1", "#4682B4", "#6495ED", "#6CA6CD", "#7FB3D5"];
colorBlackBlue = ["#333333","#4682B4"];
colorBlackYellow = ["#333333","#FFD700"];
colorBlackGreen = ["#333333","#2E8B57"];
colorBlackRed = ["#333333","#A52A2A"];
colorBlueYellow = ["#FFD700","#4682B4"];
colorBlueGreen = ["#4682B4","#2E8B57"];
colorBlueRed = ["#4682B4","#A52A2A"];
colorRedGreen = ["#2E8B57","#A52A2A"];
colorYellowGreen = ["#2E8B57","#FFD700"];
colorYellowRed = ["#A52A2A","#FFD700"];
    

const scaleRatio = 3508/4960;
function setupCanvas() {
  const height2 = round(min(windowWidth, windowHeight * scaleRatio) / scaleRatio);
  const width2 = round(height2 * scaleRatio);
  createCanvas(width2, height2);
  pixelDensity(2);
  noStroke();
}


function setup() {
  var seed = fxrand() * 2 ** 32;
  randomSeed(seed);
  noiseSeed(seed); 
  setupCanvas(); 

  noise2Scale = 50 / width;
  noise2Scale2 = 200 / width;
  numShapes = 16200 //round(fxrand()*145800)+16200;
  numSpirals = 4
  cornerSpiralsX = [-1, 1, -1, 1]; // X coordinates for the corner spirals
  cornerSpiralsY = [-1, -1, 1, 1]; // Y coordinates for the corner spirals
  radialStrength = 1000 // round(fxrand()*3000)+50
  cornerSpacing = 1 //fxrand()*1+1
  paramScale = 600//round(fxrand()*300)+600 //recommended 0
  shapeIrregularity = 1 //fxrand()*2
  noiseStrength = 20 //round(fxrand()*28)+2;
  noiseScale = map(noiseStrength, 2, 20, 0.02, 0.2);
  trypStrength = 20; //round(fxrand()*20)+10
  turbu = 0//fxrand()*7+7 
  noiseCrisp = 10 // round(fxrand()*9) +1
  noise2Strength = 0.1 //fxrand()*0.3 +0.1
  dropletsSizeContrast= 2// fxrand()2+2
  colorArrays = [colorConfetti];
  randomColorArray = random(colorArrays);
  prob1=0.25; //fxrand()*1
  prob2=0.45; //fxrand()*1
  prob3=0.15; //fxrand()*1
  gridSpacing = 10 //fxrand()*28+2
  colorConstrast= 40//fxrand()*80+20
  ellipseSize= 1 //fxrand()*3.5+0.5
  strokecolortrigg= 1.1 //1.05/2 //fxrand()*0.95+1.05
  highlightOpacity =map(ellipseSize,0.5,3.5,100,50)
  noiseScaleTexture1 = 0.05//fxrand()+0.05*0.75;
  noise2Power= 3//round(fxrand()*5+1)
  ellipseCount = 7//fxrand()+5*15;
  shapez()

  getBg = shapesFills[0] // randomColorArray[0]
  /* getBg2 = randomColorArray[1]
  if (randomColorArray.length >= 2){
       getBg3 = randomColorArray[2]
  }
  */
    // Generate the shape dimensions array
  for (let i = 0; i < shapesX.length; i++) {
    shapeHeights.push(2*ellipseSize)//floor(random(2, 6))*ellipseSize);
    shapeWidths.push(2*ellipseSize)//floor(random(2, 6))*ellipseSize);
  }
    for (let i = 0; i < 50; i++) {
    randomWidthFactors.push(random(2 / 6));
    randomHeightFactors.push(random(2 / 6));
  }
  
  noLoop();
}

function draw(){
  //background(getBg);
  //background(30)
  //background(255)
  //background(15, 0, 0);
  background(15, 0, 20);
  //background("#1f1f1f")
  if (strokeC){
      stroke(30)
  strokeWeight(0.25)
  } else {
   noStroke();
  }
    if (colorAlgoTrigger){
    shapez2()  
    }
    else {
     shapez3()
    }
  if(cornerSpirals){
    drawCornerSpirals();
    //noiseStrength = round(fxrand()*8)+2;
    //turbu = 1//fxrand()*7 
     }
  if (noise2Trigger){
        noise2()
  }

  
}

function windowResized() {
  	setupCanvas();
    redraw()
}


function shapez(){
  let noiseX = 0;
  let noiseY = 0;
  let noiseVal = 0;
  let currentColorArray = randomColorArray;
let cols = Math.floor(width / gridSpacing);
let rows = Math.floor(height / gridSpacing);

let paddingLeft = (width - (cols * gridSpacing)) / 2;
let paddingTop = (height - (rows * gridSpacing)) / 2;
    for (let y = 0; y < height; y += gridSize) {
    let row = [];
    for (let x = 0; x < width; x += gridSize) {
      let angle = noise(x * 0.01, y * 0.01) * TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);
      row.push(v);
    }
    vectors.push(row);
  }
  for(let i=0; i<numShapes; i++) {
     
    if (spiralMethod){
      triptych = false;
      let spiralAngle = map(i, 0, numShapes, 0, TWO_PI * radialStrength);
      let spiralRadius = map(i, 0, numShapes, 0, width);
      xx = cos(spiralAngle) * spiralRadius + width /2;
      yy = sin(spiralAngle) * spiralRadius + height /2;
      shapesX[i] = xx/ width;
      shapesY[i] = yy/ height;
    } 
    else if (grid){
      cornerSpirals = false;
      triptych = false;
      droplets =false;
      numShapes = cols * rows;
      xx = (i % cols) * gridSpacing + gridSpacing / 2 + paddingLeft;
      yy = Math.floor(i / cols) * gridSpacing + gridSpacing / 2 + paddingTop;
      shapesX[i] = xx / width;
      shapesY[i] = yy / height;
   } 
    else if (superposedGrid){
      cornerSpirals = false;
      triptych = false;
      droplets =false;
      shapeHeights.push(floor(random(2, 6))*ellipseSize);
      shapeWidths.push(floor(random(2, 6))*ellipseSize);
      let x = random(width);
      let y = random(height);
      xx = round(x / gridSpacing) * gridSpacing  + paddingLeft;
      yy = round(y / gridSpacing) * gridSpacing  + paddingTop;
      shapesX[i] = xx / width;
      shapesY[i] = yy / height;
    } else if (flowGrid) {
    xx = fxrand()*1;
    yy = fxrand()*1;  
    let gridX = floor(xx * (width / gridSize));
    let gridY = floor(yy * (height / gridSize));
    let v = vectors[gridY][gridX];

    // The position on the vector line is determined by adding a scaled version of the vector to the grid point
    let linePos = createVector(gridX * gridSize, gridY * gridSize);
    linePos.add(v.mult(gridSize));

    shapesX[i] = linePos.x / width;
    shapesY[i] = linePos.y / height;
    }
    else {

    //blob
   /*xx = map(noise(i * 0.001, 0), 0, 1, shapeSpacing, width );
   yy = map(noise(0, i * 0.001), 0, 1, shapeSpacing, height);

  // Store normalized coordinates
  shapesX[i] = xx / width;
  shapesY[i] = yy / height;*/

    xx = fxrand()*1;
    yy = fxrand()*1;  
    shapesX[i] = xx;
    shapesY[i] = yy;
    }
 
    if(triptych){
      let sineValue = sin(xx*9.43) * noiseStrength * trypStrength;
      noiseValue1 = noise(xx*paramScale*noiseScale, yy*paramScale*noiseScale) * noiseStrength * sineValue;
    shapesRads[i] = noiseValue1
    } 
    if(droplets){
    triptych=false;
    spiralmethod=false;
    let angle = random(TWO_PI);
    let noiseDirX = cos(angle);
    let noiseDirY = sin(angle);

    if (random(1) > 0.5) {
      noiseX = 0;
      noiseY = random(height);
    } else {
      noiseX = random(width);
      noiseY = 0;
    }

    // calculate noise value based on distance from noise line
    noiseVal = abs((xx - noiseX) * noiseDirY - (yy - noiseY) * noiseDirX);
    noiseVal = noiseVal / width * 2; // normalize to range of 0 to 2
    noiseVal = noiseVal - 1; // shift range to -1 to 1
    noiseVal = abs(noiseVal); // create a smooth transition from one side to the other
    noiseVal = pow(noiseVal, dropletsSizeContrast); // exaggerate the contrast

    shapesRads[i] = noiseVal * noiseStrength;
          
    if(billy){} 
    } else {
    noiseValue = noise(xx*paramScale*noiseScale, yy*paramScale*noiseScale) * noiseStrength 
    shapesRads[i] = noiseValue
    }
    if (colorAlgo){

  let prob = fxrand()*1; // Generate a random number between 0 and 1
  if (prob < prob1) {
    index = 0; // 25% chance of picking the first color
  } else if (prob < prob2) {
    index = 1; // 25% chance of picking the second color
  } else if (currentColorArray.length >=2 && prob < prob3){
    index = 2; 
  } else {
    // Half the probability of the previous index
    index = floor(random(3, currentColorArray.length)); // Pick a random index from 2 to the end of the array
  }
  shapesFills[i]=currentColorArray[index]; // Use the selected color
    } else {
      shapesFills[i] = random(colorCraie);
    }


    
    turbulence = map(noise(xx*0.01*paramScale, yy*0.01*paramScale), 0, 1, -5, 5)*turbu ;
    shapesRads[i] += turbulence ;
    shapesRads[i] /= paramScale;

        for(let j=0; j<50; j++) {
      let paintValueX = noise(shapesX[i] * width + j, shapesY[i] * height) * shapeIrregularity;
      let paintValueY = noise(shapesX[i] * width, shapesY[i] * height + j) * shapeIrregularity; 
      paintValueXArr.push(paintValueX);
      paintValueYArr.push(paintValueY);
    }
  }
}

function getModifiedColor(baseColor, x, y, noiseScale) {
  let r = red(baseColor);
  let g = green(baseColor);
  let b = blue(baseColor);

  r += (noise(x * noiseScale, y * noiseScale) * 2 - 1) * colorConstrast;
  g += (noise(x * noiseScale + 100, y * noiseScale + 100) * 2 - 1) * colorConstrast;
  b += (noise(x * noiseScale + 200, y * noiseScale + 200) * 2 - 1) * colorConstrast;

  return color(constrain(r, 0, 255), constrain(g, 0, 255), constrain(b, 0, 255));
}
function drawBackgroundEllipsesForShape(i, shapeX, shapeY, shapeRadX, shapeRadY) {


  // Calculate the center of the shape
  let centerX = shapeX * width;
  let centerY = shapeY * height;

  let originalColor = color(shapesFills[i]);
  let r = red(originalColor);
  let g = green(originalColor);
  let b = blue(originalColor);

if (texture1Trigger){
    let gridSize = 1; 
    let ellipseSizeb = shapesRads[i] * width*2.5; 
    let colortexture1a = colortexture1 ? '#070606' : '#f1f1f1';
    let originalColorComputed = color(originalColor);
    let halfEllipseSize = ellipseSizeb / 2;
    drawingContext.globalAlpha = 0.4;
    noStroke();

    for (let x = 0; x < ellipseSizeb; x += gridSize) {
        for (let y = 0; y < ellipseSizeb; y += gridSize) {
            let distance = dist(x - halfEllipseSize, y - halfEllipseSize, 0, 0);
            if (distance < halfEllipseSize) {
                let noiseScale = noise((shapeX * width + x) * noiseScaleTexture1, (shapeY * height + y) * noiseScaleTexture1);
                let c = lerpColor(
                    originalColorComputed,
                    color(colortexture1a),
                    noiseScale
                );
                let canvasX = shapeX * width + x - halfEllipseSize;
                let canvasY = shapeY * height + y - halfEllipseSize;

                fill(c);
                ellipse(canvasX, canvasY, gridSize, gridSize);

                texture1Data.push({
                    canvasX: canvasX,
                    canvasY: canvasY,
                    color: c
                });
            }
        }
    }
    drawingContext.globalAlpha = 1; 
}


  if (texture2Trigger){
    if (texture2varia){
      ellipseSizec = shapesRads[i] * width/2;
    } else {
      ellipseSizec = shapesRads[i] * width*1.5;
    }

  let noiseScale = 3; // adjust this value to change the granularity of the noise
  for (let x = 0; x < ellipseSizec; x+=noise2Power) {
    for (let y = 0; y < ellipseSizec; y+=noise2Power) {
        let newColor;
      let distance = dist(x - ellipseSizec / 2, y - ellipseSizec / 2, 0, 0);
      if (colortexture3){
        newColor = color(r - 50, g - 50, b - 50)
      } else {
        newColor = color(r + 50, g + 50, b + 50)
      }
     
      if (distance < ellipseSizec / 2) {
        drawingContext.globalAlpha = 0.5; 
        let c = lerpColor(
          color(originalColor),
          color(newColor),
          noise((x + shapeX) * noiseScale, (y + shapeY) * noiseScale)
        );
        let canvasX = x + (width * shapeX) - (ellipseSizec / 2);
        let canvasY = y + (height * shapeY) - (ellipseSizec / 2);   
        fill(c);
        noStroke();
        ellipse(canvasX, canvasY, 10, 10);
       drawingContext.globalAlpha = 1; 
      texture2Data.push({
      canvasX: canvasX,
      canvasY: canvasY,
      color: c
    });
      }
    }
  }}
 
  if (texture3Trigger){
  let ellipseSizea = shapesRads[i] * width*2;
  for (let i = 0; i < ellipseCount; i++) {
    let newColor;
    if (colortexture2){
      newColor = color(r - 50, g - 50, b - 50);
    } else {
      newColor = color(r + 50, g + 50, b + 50);
    }
    let angle = random(TWO_PI);
    let distanceX = random(shapeRadX - ellipseSizea, shapeRadX + ellipseSizea); 
    let distanceY = random(shapeRadY - ellipseSizea, shapeRadY + ellipseSizea); 
    let x = centerX + cos(angle) * distanceX;
    let y = centerY + sin(angle) * distanceY;    
    let noiseFactor = 0.01;
    let nX = x * noiseFactor * 0.005;
    let nY = y * noiseFactor * 0.005;
    let noiseValue = noise(nX, nY);
drawingContext.globalAlpha = 0.8; 
    strokeWeight(0.2)
    stroke(newColor);
    noFill()
    ellipse(
      x + noiseValue * 10,
      y + noiseValue * 10,
      ellipseSizea + noiseValue * 10,
      ellipseSizea + noiseValue * 10
    );
        drawingContext.globalAlpha = 1;  
        texture3Data.push({
      x: x + noiseValue * 10,
      y: y + noiseValue * 10,
      size: ellipseSizea + noiseValue * 10,
      color: newColor
    });
}}}

function shapez2() {
  push();
          let highlightIndex = Math.floor(random(4));
  for (let i = 0; i < shapesX.length; i++) {
      let shapeHeightz = shapeHeights[i];
      let shapeWidthz = shapeWidths[i];
    let x;let y;
    for (let j = 0; j < 50; j++) { // number of dots in the shape
      let angle = j * TWO_PI / 50;
      if (pointsHorizontal){
      x = shapesX[i] * width + shapesRads[i] * width / randomWidthFactors[j] * cos(angle);
      y = shapesY[i] * height + shapesRads[i] * width / 2 * sin(angle);
      } else {
      x = shapesX[i] * width + shapesRads[i] * width / 2 * cos(angle);
      y = shapesY[i] * height + shapesRads[i] * width / randomHeightFactors[j] * sin(angle);
      }

      let modColor = getModifiedColor(shapesFills[i], x, y, 0.005);
      fill(modColor);
      ellipse(x , y , shapeWidthz, shapeHeightz);
      if (texturedColorAlgo){

        let highlightX = x + shapeWidthz * cornerTextureX[highlightIndex]; // Adjust the X position of the highlight
      let highlightY = y - shapeHeightz * cornerTextureY[highlightIndex]; // Adjust the Y position of the highlight
      fill(255, 255, 255, highlightOpacity);
      ellipse(highlightX, highlightY, shapeWidthz*0.4, shapeHeightz*0.4); 
      }

    }
  }
  pop();
}
function shapez3() {
  push();
  
  for (let i = 0; i < shapesX.length; i++) {
   let shapeX = shapesX[i];
    let shapeY = shapesY[i];
    let shapeRadX = shapesRads[i];
    let shapeRadY = shapesRads[i];

    // check for collision with all previously drawn ellipses
    let collision = false;
    for (let {x, y, radX, radY} of drawnEllipses) {
      let distX = shapeX - x;
      let distY = shapeY - y;
      let radiusSumX = 0.3 * (shapeRadX + radX);
      let radiusSumY = 0.3 * (shapeRadY + radY);
      if (distX*distX + distY*distY < radiusSumX*radiusSumX + radiusSumY*radiusSumY) {
        collision = true;
        break;
      }
    }
    let originalColor = color(shapesFills[i]);
    let whiteColor = color(255, 255, 255);
    let highlightColor = lerpColor(originalColor, whiteColor, 0.3); // Adjust the 0.3 value to control the brightness

  if(strokecolora){
        // Draw highlight shape
    fill(highlightColor);
    drawShape(i,shapesX[i], shapesY[i], shapesRads[i] * strokecolortrigg, shapesRads[i] * strokecolortrigg); // Slightly larger
  }
    
    fill(originalColor);
    // Create a clipping mask for the current shape
    drawingContext.save();
        if (notTouch){
      if (!collision) {
      drawShape(i, shapeX, shapeY, shapeRadX, shapeRadY);
      drawnEllipses.push({x: shapeX, y: shapeY, radX: shapeRadX, radY: shapeRadY});
      } 
    } else {
      drawShape(i, shapesX[i], shapesY[i], shapesRads[i], shapesRads[i]);    
    }
    drawingContext.clip();
push()
    // Draw the background ellipses within the clipping mask
    drawBackgroundEllipsesForShape(i, shapesX[i], shapesY[i], shapesRads[i], shapesRads[i]);
pop()
    // Restore the drawing context state
    drawingContext.restore(); 
  }
  pop();
}
function drawShape(i,shapeX, shapeY, shapeRadX, shapeRadY) {

  if (forbiddenSetting) {
    rectMode(CENTER);
    rect(shapeX * width, shapeY * height, shapeRadX * width, shapeRadY * width);
  } else {
    beginShape();
    let shapeHeightz = shapeHeights[i];
    let shapeWidthz = shapeWidths[i];
    for(let j=0; j<50; j++) { // number of vertices in the ellipse
      let angle = j * TWO_PI / 50;
      let x = shapeX * width + shapeRadX * width / shapeHeightz * cos(angle);
      let y = shapeY * height + shapeRadY * width / shapeWidthz * sin(angle);
      let paintValueX = paintValueXArr[i*50+j];
      let paintValueY = paintValueYArr[i*50+j];
      x += paintValueX;
      y += paintValueY;

      vertex(x, y);
      
    }
    
    endShape(CLOSE);
    
  }

}

function drawCornerSpirals() {
  for (let i = 0; i < 4; i++) {
    push();
    translate(cornerSpiralsX[i] * (width - width / 2) / cornerSpacing, cornerSpiralsY[i] * (height - height / 2) / cornerSpacing);
    for (let j = 0; j < shapesX.length; j++) {
      fill(shapesFills[j]);
      beginShape();
      let shapeHeightz = shapeHeights[i];
      let shapeWidthz = shapeWidths[i];
      for (let k = 0; k < 50; k++) {

        let angle = k * TWO_PI / 50;
        let x = shapesX[j] * width + shapesRads[j] * width / shapeHeightz * cos(angle);
        let y = shapesY[j] * height + shapesRads[j] * width / shapeWidthz * sin(angle);

        let paintValueX = paintValueXArr[j * 50 + k];
        let paintValueY = paintValueYArr[j * 50 + k];
        x += paintValueX;
        y += paintValueY;
        vertex(x, y);
      }
      endShape(CLOSE);
    }
    pop();
  }
}

function noise2() {
  push();
  loadPixels();
  let d = pixelDensity();
  for (let x = 0; x < width * d; x++) {
    for (let y = 0; y < height * d; y++) {
      let noiseVal = noise(x * noise2Scale*noiseCrisp, y * noise2Scale2*noiseCrisp) - 0.5;
			noiseVal *= 255 * noise2Strength;
      let index = round(4 * (y * width * d + x));
			pixels[index] += noiseVal;
			pixels[index + 1] += noiseVal;
			pixels[index + 2] += noiseVal;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  pop();
}
