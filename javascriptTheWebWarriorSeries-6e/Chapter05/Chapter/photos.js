/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Parth Patel
 *    Date:   2020-06-30

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figCount = 3;

/* add src values to img elements based on order specified in photoOrder array */
function populateFigures(){
   var filename;
   var currentFig;
   if(figCount === 3){
      for(var i = 1; i < 4; i++){
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i-1];
         currentFig.src = filename;
      }
   }else{
      for(var i = 0; i < 5;i++){
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* switch to 5-figure preview */
function previewFive(){
   var articleE1 = document.getElementsByTagName("article")[0];

   //create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";

   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";

   lastFigure.appendChild(lastImage);
   //articleE1.appendChild(lastFigure);
   articleE1.insertBefore(lastFigure, document.getElementById("rightarrow"));

   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   //articleE1.appendChild(firstFigure);
   articleE1.insertBefore(firstFigure, document.getElementById("fig2"));

   document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
   figCount = 5;

   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if(numberButton.addEventListener){
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   }else if(numberButton.attachEvent){
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
}

function previewThree(){
   var articleE1 = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   articleE1.removeChild(document.getElementById("fig1"));
   articleE1.removeChild(document.getElementById("fig5"));
   figCount = 3;
   if(numberButton.addEventListener){
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   }else if(numberButton.attachEvent){
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("click", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   
}

/* create event listeners for right arrow, left arrow, and center figure image */
function createEventListeners(){
   var leftarrow = document.getElementById("leftarrow");
   if(leftarrow.addEventListener){
      leftarrow.addEventListener("click", leftArrow, false);
   }else if(leftarrow.attachEvent){
      leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if(rightarrow.addEventListener){
      rightarrow.addEventListener("click", rightArrow, false);
   }else if(rightarrow.attachEvent){
      rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if(mainFig.createEventListeners){
      mainFig.addEventListener("click", zoomFig, false);
   }else if(mainFig.attachEvent){
      mainFig.attachEvent("onclick", zoomFig);
   }

   var showAllButton = document.querySelector("#fiveButton p");
   if(showAllButton.addEventListener){
      showAllButton.addEventListener("click", previewFive,false);
   }else if(showAllButton.attachEvent){
      showAllButton.attachEvent("onclick", previewFive);
   }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}