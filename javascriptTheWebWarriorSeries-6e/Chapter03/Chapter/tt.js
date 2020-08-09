/*  JavaScript 6th Edition
    Chapter 03
    Chapter case
    Tipton Turbines
    Variables and functions
    Author: Parth Patel
    Date:   2020-06-09
    Filename: tt.js
*/

//  global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents = ["Lightning", "Combines", "Combines", "Combines",
                "Lightning", "Lightning", "Lightning", "Lightning",
                "Barn Raisers", "Barn Raisers", "Barn Raisers",
                "Sodbusters", "Sodbusters", "Sodbusters",
                "Sodbusters", "(off)", "River Raiders",
                "River Raiders", "River Raiders", "Big Dippers",
                "Big Dippers", "Big Dippers", "(off)",
                "Sodbusters", "Sodbusters", "Sodbuesters",
                "Combines", "Combines", "Combines", "(off)",
                "(off)"];
var gameLocation = ["away", "away", "away", "away", "home", "home",
                    "home", "home", "home", "home", "home", "away",
                    "away", "away", "away", "", "away", "away", "away",
                    "away", "away", "away", "", "home", "home", "home",
                    "home", "home", "home", "", ""];

var count = 0;

function fillHeaders(){
    while (count < 7){
        document.getElementsByTagName("th")[count].textContent = daysOfWeek[count];
        count++;
    }
    count = 0;
}

function fillDates(){
    do{
        document.getElementById("08-"+(count+1)).getElementsByTagName("p")[0].innerHTML = count+1;
        count++;
    }while(count < 31);
    count = 0;
}

function fillOpponents(){
    for(count = 0; count < opponents.length; count++){
        var oppoInfo = document.getElementById("08-"+(count+1)).getElementsByTagName("p")[1];

        // using multiple if statements
        /* 
        if(gameLocation[count] === "away"){
            oppoInfo.innerHTML = "@ ";
        }
        if(gameLocation[count] === "home"){
            oppoInfo.innerHTML = "vs ";
        }
        */

        // using nested ternary operators
        //(gameLocation[count] != "") ? ((gameLocation[count] === "away") ? oppoInfo.innerHTML = "@ " : oppoInfo.innerHTML = "vs "): oppoInfo.innerHTML = "";

        // using nested if statements
        /* 
        if(gameLocation[count] === "away"){
            oppoInfo.innerHTML = "@ ";
        }else{
            if(gameLocation[count] === "home"){
                oppoInfo.innerText = "vs ";
            }
        }
        */

        switch(gameLocation[count]){
            case "away":
                oppoInfo.innerHTML = "@ ";
                break;
            case "home":
                oppoInfo.innerHTML = "vs ";
                break;
            default:
                oppoInfo.innerHTML = "";
        }
        
        oppoInfo.innerHTML += opponents[count];
    }
}

function fillCalendar() {
    fillHeaders();
    fillDates();
    fillOpponents();
}

if(window.addEventListener){
    window.addEventListener("load", fillCalendar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", fillCalendar);
}

