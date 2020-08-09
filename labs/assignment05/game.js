var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var numHeroKilled = 0;
var speed = 0;
var speedVar = 1;
canvas.width = 576;
canvas.height = 576;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);
var list = document.body;

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
    bgReady = true;
};
bgImage.src = "images/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
    heroReady = true;
};
heroImage.src = "images/Idle.png";

var hero = {};

var reset = function(){
    heroImage.src = "images/Idle.png";
    hero.x = (Math.random()*(canvas.width-50));
    hero.y = (Math.random()*(canvas.height-50));
    //if(hero.x > 500 || hero.y > 500){
    //    reset();
    //}
    //console.log(hero.x+" "+hero.y);
};

canvas.addEventListener("click",clickingEvent, false );

function clickingEvent(e){
    //console.log("clicked: x = " + e.clientX +" y = "+ e.clientY);
    //console.log("hero: "+hero.x + " " + hero.y);
    var bounds = canvas.getBoundingClientRect();
    var mouseX = e.clientX-bounds.left;
    var mouseY = e.clientY-bounds.top;
    killedOrNot(mouseX, mouseY);
    setTimeout(reset, 300);
    clearInterval(speed);
    console.log(1500/speedVar);
    speed = setInterval(reset, 1500/speedVar);
}

function killedOrNot(x, y){
    if(x <= (hero.x + 105) && x > (hero.x) && y <= (hero.y+105) && y > (hero.y+20)){
        numHeroKilled++;
        speedVar++;
        //console.log(numHeroKilled);
        scoreCard.textContent = numHeroKilled;
        heroImage.src = "images/dead.png";
    }else{
        console.log("here");
    }
};

var render = function(){
    if(bgReady){
        ctx.drawImage(bgImage, 0, 0);
    }
    if(heroReady){
        ctx.drawImage(heroImage, hero.x, hero.y, 100 ,100);
    }
};



var main = function () {
    render();
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
reset();
main();


var resetScore = document.getElementById("resetScore");
resetScore.addEventListener("click", resetAll, false);
function resetAll(){
    location.reload();
}

var resetSpeed = document.getElementById("resetSpeed");
resetSpeed.addEventListener("click", beginnersSpeed, false);
function beginnersSpeed(){
    speedVar = 1;
    clearInterval(speed);
    speed = setInterval(reset, 1500/speedVar);
}

var scoreCard = document.getElementById("actualScore");

/*
function setupPage(){
    var navBar = document.getElementsByTagName("ul")[0];
    var game = document.createElement("li");
    game.className = "currentPage";
    var gameLink = document.createElement("a");
    gameLink.href = "game.html";
    var linkText = document.createTextNode("Game")
    gameLink.appendChild(linkText);
    game.appendChild(gameLink);
    navBar.appendChild(game);
}

window.addEventListener("load", setupPage, false);
*/