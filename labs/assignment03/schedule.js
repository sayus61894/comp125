var schedule = document.getElementsByTagName("nav")[0].getElementsByTagName("li")[3];

function orderLink(){
    var scheduleWind = window.open("./calendar/calendar.html", "_blank", "height=0, width=0");
    var scheduleWidth = screen.availWidth*.7;
    var scheduleHeight = screen.availHeight*.7;
    scheduleWind.focus();
    scheduleWind.resizeTo(scheduleWidth, scheduleHeight);
    scheduleWind.moveTo((screen.availWidth-scheduleWidth)/2, (screen.availHeight-scheduleHeight)/2);
    window.setTimeout(function(){scheduleWind.close()}, 5000);
}



function setupPage(){
    var navBar = document.getElementsByTagName("ul")[0];
    var location = document.createElement("li");
    var locationLink = document.createElement("a");
    locationLink.href = "https://alorestaurant.com/"
    var linkText = document.createTextNode("Location")
    locationLink.appendChild(linkText);
    location.appendChild(locationLink);
    navBar.appendChild(location);

    schedule.addEventListener("click", orderLink, false);

}

window.addEventListener("load", setupPage, false);