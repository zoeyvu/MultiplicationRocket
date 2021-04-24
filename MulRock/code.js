var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0deea998-93bc-4036-90af-ecaf01e9fd4c","cae9922e-991b-4720-a282-8cfd2a04b3c0","fc571791-495c-4858-a2bc-0d9d5a85037d","44e1ffed-00b1-4544-a974-839c377c977d","99c68d6e-eb76-4ea0-be42-eb3439fb1a5e"],"propsByKey":{"0deea998-93bc-4036-90af-ecaf01e9fd4c":{"name":"rocket","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":11,"looping":true,"frameDelay":12,"version":"KZt7QTJQhD2MW5OanuFpDCHRl1IYhUPA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1536,"y":2048},"rootRelativePath":"assets/0deea998-93bc-4036-90af-ecaf01e9fd4c.png"},"cae9922e-991b-4720-a282-8cfd2a04b3c0":{"name":"meteo1r","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":6,"looping":true,"frameDelay":12,"version":"eL5SxM6kC9wFzSScIq5xXWI.B1GTCyzw","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1536},"rootRelativePath":"assets/cae9922e-991b-4720-a282-8cfd2a04b3c0.png"},"fc571791-495c-4858-a2bc-0d9d5a85037d":{"name":"meteo1l","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":6,"looping":true,"frameDelay":12,"version":"C1klMY1qYMiNIjZ1axu6TrtgpMMWk.S_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1536},"rootRelativePath":"assets/fc571791-495c-4858-a2bc-0d9d5a85037d.png"},"44e1ffed-00b1-4544-a974-839c377c977d":{"name":"meteo2r","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":6,"looping":true,"frameDelay":60,"version":"37sqrBDoXde09d3a7osAWht27VYnJbfJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1536},"rootRelativePath":"assets/44e1ffed-00b1-4544-a974-839c377c977d.png"},"99c68d6e-eb76-4ea0-be42-eb3439fb1a5e":{"name":"meteo2l","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":6,"looping":true,"frameDelay":12,"version":"83KV_zpicnMvpUSPW5Y2oBPqICLG7CFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1536},"rootRelativePath":"assets/99c68d6e-eb76-4ea0-be42-eb3439fb1a5e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

1201// Sprites
var rocket = createSprite( 200, 300);
rocket.setAnimation("rocket");
rocket.scale = 0.10;
rocket.visible = false;
rocket.setCollider("rectangle", 0, -5, 15, 35, 0);
rocket.debug = true;

var meteo1R = createSprite(randomNumber(200, 500), 600);
meteo1R.setAnimation("meteo1r");
meteo1R.scale = 0.10;
meteo1R.visible = false;
meteo1R.setCollider("rectangle", 5, -5, 25, 50, 45);
meteo1R.debug = true;

var meteo2R = createSprite(randomNumber(150, 500), 600);
meteo2R.setAnimation("meteo2r");
meteo2R.scale = 0.10;
meteo2R.visible = true;
meteo2R.setCollider("rectangle", 5, -5, 25, 50, 45);
meteo2R.debug = true;


var meteo1L = createSprite(randomNumber(-100, 150), 600);
meteo1L.setAnimation("meteo1l");
meteo1L.scale = 0.10;
meteo1L.visible = false;
meteo1L.setCollider("rectangle", -5, -5, 25, 50, -45);
meteo1L.debug = true;

var meteo2L = createSprite(randomNumber(-100, 150), 600);
meteo2L.setAnimation("meteo2l");
meteo2L.scale = 0.10;
meteo2L.visible = false;
meteo2L.setCollider("rectangle", -5, -5, 25, 50, -45);
meteo2L.debug = true;

//Multiplication Variables
var a = randomNumber(2, 10);
var b = randomNumber(2, 10);
var answer = a*b;
var input = 0;
var answerX = 0;
var score = 0;
var life = 3;
var mode = 0;
var velocity = 3;



function draw() {
  playSound("http://soundimage.org/wp-content/uploads/2016/07/Fantasy_Game_Background_Looping.mp3", true);
   //SetModes
  if (mode == 0) {
    introPage();
  } else if (mode == 1) {
    playMode();
  } else if (mode == 2) {
    timesTable();
  } else if (mode == 3) {
    aboutMode();
  } else if (mode == 4) {
    overMode();
  }
  
  //Testing part
  //background(rgb(28, 7, 71));
  //background("white");
  //meteoMoving(); //166
  //console.log(position)

  
  
  drawSprites();
}

//----- PROBLEMS
function playMode() {
  background(rgb(28, 7, 71));
  meteoMoving();
  setQuestion();
  setMeteoVisible();
  checkHit();
  if ((life == 0)|| (life < 0)) {
      mode = 4;
    };
}

function questionRibbon() {
  fill(rgb(165, 135, 140));
  rect(0, 330, 400, 70);
  textSize(30);
}

function setQuestion() {
  //Draw Ribbon
  questionRibbon();
  //reset variables
  if(keyWentDown("ENTER")) {
  //meteoStart();
  checkCorrect();
  a = randomNumber(2, 10);
  b = randomNumber(0, 10);
  answer = a*b;
  input = 0;
  }
  //Draw the objects
  setVisible(true);
  fill("black");
  textSize(32);
  textFont("Courier New");
  text(a, 40, 375);
  text("x",125, 375);
  text(b, 190, 375);
  text("=", 265, 375);
  getInput();
  text(input , 310, 375);
  fill("white");
  //Score and life
  textSize(18);
  text("life:", 15, 30);
  text(life, 70, 30);
  textSize(22);
  text(score, 15, 60);
}

function getInput() {
  if (keyWentDown("1")){
    input = input*10 + 1;
  }
  if (keyWentDown("2")){
    input = input*10 + 2;
  }
  if (keyWentDown("3")){
    input = input*10 + 3;
  }
  if (keyWentDown("4")){
    input = input*10 + 4;
  }
  if (keyWentDown("5")){
    input = input*10 + 5;
  }
  if (keyWentDown("6")){
    input = input*10 + 6;
  }
  if (keyWentDown("7")){
    input = input*10 + 7;
  }
  if (keyWentDown("8")){
    input = input*10 + 8;
  }
  if (keyWentDown("9")){
    input = input*10 + 9;
  }
  if (keyWentDown("0")){
    input = input*10 + 0;
  }
}

function checkCorrect() {
    getInput();
    if (input == answer) {
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound6.mp3", false);
    rocketMoving();
    score = score + 3;
    } else { //---I want LIFE decrease when rocket hits Meteo, not when we wrong
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound12.mp3", false);
    score = score - 1;
    }
}

function rocketMoving() {
  rocket.x = answer * 4; //Chane it to escape value later!!!!!!!!!!!!!
}

function meteoMoving() {
  setVisible(true);
  meteo1R.setVelocity( 0 - velocity, velocity);
  meteo2R.setVelocity( 0 - velocity, velocity);
  meteo1L.setVelocity( velocity, velocity);
  meteo2L.setVelocity( velocity, velocity);
  if (score > 8*velocity) {
    velocity = velocity + 1;
  }
  meteoStartLoop();
}

function meteoStart() {
  if(answer*4 > 200) {
    if (meteo1L.y > 400) {
      meteo1L.x = rocket.x - rocket.y;
      meteo1L.y = 0;
      meteo1L.visible = false
    } else {
      meteo2L.x = rocket.x - rocket.y;
      meteo2L.y = 0;
      meteo2L.visible = false
    }
  } else if (answer*4 <= 200) {
    if (meteo1R.y > 400) {
      meteo1R.x = rocket.x + rocket.y;
      meteo1R.y = 0;
      meteo1R.visible = false
    } else if (meteo1R != meteo2R) {
      meteo2R.x = rocket.x + rocket.y;
      meteo2R.y = 0;
      meteo2R.visible = false
    }
  };
}

function meteoStartLoop () {
  if ((meteo1R.y > 400) || (meteo2R.y > 400) || (meteo1L.y > 400) || (meteo2L.y > 400)) {
    meteoStart();
  }
}

function checkHit() {
  if ((meteo1L.x == rocket.x) && (meteo1L.y == rocket.y)) {
    loseLife();
  }
  if ((meteo2L.x == rocket.x) && (meteo2L.y == rocket.y)) {
    loseLife();
  }
  if ((meteo1R.x == rocket.x) && (meteo1R.y == rocket.y)) {
    loseLife();
  }
  if ((meteo2R.x == rocket.x) && (meteo2R.y == rocket.y)) {
    loseLife();
  }
}

function loseLife () {
  life = life - 1;
  background("red");
  playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound12.mp3", false);
} 


//----- INTRO PAGE
function introPage() {
  background(rgb(28, 7, 71));
  setVisible(false);
  fill("white");
  textFont("Courier New");
  textSize(32);
  text("Multiplication", 80, 100);
  text("Rocket", 80, 140);
  
  
  textSize(16);
  text("Press the number to choose...", 80, 350);
  textSize(22);
  text("[1]", 80, 250);
  text("Start", 120, 250); 
  text("[2]", 80, 280);
  text("Times table", 120, 280); 
  text("[3]", 80, 310);
  text("About", 120, 310);
  
  //Set the commanders
  setMode();
}

function setMode() {
  if (keyDown("0")) {
    mode = 0; //Set back to IntroPage
    life = 5;
    score = 0;
    rocket.x = 200;
    velocity = 3;
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound4.mp3", false);
  };
  if (keyDown("1")) {
    mode = 1; //Set the screen into Playmode
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound4.mp3", false);
  };
  if (keyDown("2")) {
    mode = 2; //"2" means guideMode
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound4.mp3", false);
  }
  if (keyDown("3")) {
    mode = 3; //"3" means aboutMode!!!!!!!!!!!!!!!
    playSound("http://www.pacdv.com/sounds/interface_sound_effects/sound4.mp3", false);
  }
  if (life == 0) { 
    mode = 4; //set to overScreen
  }
}

function timesTable() {
  background(rgb(28, 7, 71));
  setVisible(false);
  fill("White");
  textSize(25);
  textFont("Courier New");
  var  x = 42;
  var  y = 50;
  text("------------------------", 19,64)
  for (var i = 1; i < 14; i++ ) {
    text("|", x, y );
    y = y + 24;
  }
  x = 25;
  y = 50;
  //Draw the times table
  for (var j = 1; j < 10; j++) {
    for (var i = 1; i < 10; i++) {
      text( i*j, x, y);
      x = x + 40;
    }
  y = y + 35;
  x = 25;
};
  //draw the ComeBack button
  textSize(20);
  text("Press [0] to go back...", 25, 370);
  setMode();
}
 function aboutMode() {
  background(rgb(28, 7, 71));
  setVisible(false);
  fill("White");
  textSize(20);
  textFont("Courier New");
  text("Creator: Zoey Nguyen Vu", 70, 100);
  text("January, 2018", 70, 135);
  text("ICS3C class", 70, 170);
  text("Teacher: Ms. DiTiberio", 70, 205);
  text("SJAM Secondary School", 70, 240);
  textSize(15);
  text("█░░█ █▀▀█ ▀█░█▀ █▀▀ 　 █▀▀ █░░█ █▀▀▄ ", 45, 270);
  text("█▀▀█ █▄▄█ ░█▄█░ █▀▀ 　 █▀▀ █░░█ █░░█ ", 45, 285);
  text("▀░░▀ ▀░░▀ ░░▀░░ ▀▀▀ 　 ▀░░ ░▀▀▀ ▀░░▀ ", 45, 300);
  textSize(20);
  text("Press [0] to go back...", 70, 350);
  setMode();
 }

//----GAME OVER
function overMode() {
  background(rgb(28, 7, 71));
  setVisible(false);
  textFont("Courier New");
  fill("white");
  textSize(30);
  text("Congratulation!", 70, 100);
  textSize(20);
  text("Your Score", 70, 180);
  textSize("50");
  text(score, 70, 230);
  textSize(20);
  text("Press [0] to go back...", 70, 330);
  setMode();
}

//other function
function setVisible(set){
  rocket.visible = set;
}

function setMeteoVisible() {
    if (meteo1R.y != 0) {
    meteo1R.visible = true
  } else {
    meteo1R.visible = false
  }
  
    if (meteo2R.y != 0) {
    meteo2R.visible = true
  } else {
    meteo2R.visible = false
  }
  
    if (meteo1L.y != 0) {
    meteo1L.visible = true
  } else {
    meteo1L.visible = false
  }
   if (meteo2L.y != 0) {
    meteo2L.visible = true
  } else {
    meteo2L.visible = false
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
