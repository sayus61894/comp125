var numSystem;
var gender;
var height;
var weight;
var bmr = 0;

function settingVar(){
    gender = document.getElementById("gender").value;
    weight = +document.getElementById("weight").value;
    age = +document.getElementById("age").value;
    
    if(numSystem == "imperial"){
        calculateImperial();
    }else{
        calculateMetric();
    }
}

function calculateMetric() {
    height = document.getElementById("heightBig").value * 100 + +document.getElementById("heightSmall").value;
    
    if(gender == "male"){
        bmr = 66.5 + (13750 * weight + 5003 * height - 6755 * age) / 1000;
    } else if(gender == "female"){
        bmr = 655 + (9563 * weight + 1850 * height - 4676 * age) / 1000;
    }
    finalValue();
}

function calculateImperial() {
    height = document.getElementById("heightBig").value * 12 + +document.getElementById("heightSmall").value;
    
    if(gender == "male"){
        bmr = 66 + (620 * weight + 1270 * height - 676 * age) / 100;
    } else if(gender == "female"){
        bmr = 655 + (435 * weight + 470 * height - 470 * age) / 100;
    }
    finalValue();
}

function finalValue(){
    if(document.getElementById("high").checked){
        intensity = 2.25;
    }else if(document.getElementById("moderate").checked){
        intensity = 1.76;
    }else{
        intensity = 1.53;
    }
    bmr *= intensity;
    alert("Your BMR is: \n" + bmr);
}

function clearFields(){
    document.getElementById("age").value = "";
    document.getElementById("heightBig").value = "";
    document.getElementById("heightSmall").value = "";
    document.getElementById("weight").value = "";
}

function metric(){
    numSystem = "metric";
    clearFields();
    document.getElementById("choice1").style.backgroundColor = "#655c56";
    document.getElementById("choice2").style.backgroundColor = "grey";
    document.getElementById("big").textContent = " m";
    document.getElementById("small").textContent = " cm";
    document.getElementById("weightLabel").textContent = " kg";
}

function imperial(){
    numSystem = "imperial";
    clearFields();
    document.getElementById("choice2").style.backgroundColor = "#655c56";
    document.getElementById("choice1").style.backgroundColor = "grey";
    document.getElementById("big").textContent = " ft";
    document.getElementById("small").textContent = " in";
    document.getElementById("weightLabel").textContent = " lbs";
}

document.getElementById("button").addEventListener("click", settingVar, false);
document.getElementById("choice1").addEventListener("click", metric, false);
document.getElementById("choice2").addEventListener("click", imperial, false);
window.addEventListener("load", metric, false);