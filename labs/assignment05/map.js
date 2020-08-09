//Map related

var options = {
    center: {lat: 43.879483, lng: -78.942547},
    zoom: 14
};
var map;
function initMap(){
    map = new google.maps.Map(document.getElementById("map"), options)
    markerStuff();
}

//marker related
var marker;
function markerStuff(){
        marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: '8Bit Beans!'
    });
    marker.setMap(map);  
    marker.addListener('click', show); 
}

function show(){
    map.zoom = 16;
    var infoWindow = new google.maps.InfoWindow({
        content: content
    });
    infoWindow.open(map, marker);
    marker.addListener("click", function(){
            map.zoom = 14;
            markerStuff();
        
    });
}

var content = '<div id="info">' +
    '<h1>8Bit Beans</h1>'+
    '<p>8Bit Beans is a restaurant located in Downtwon Whitby, Ontario. They are a cafe and lounge, that serve food and drinks while customers enjoy each others company. If that is not enough, they have retro arcade games to enjoy as well. Their selection includes: Street Fighter 2, Space Invaders, Ms. Pac-Man, etc.</p>'+
    '<br><p>Please visit <a target="_blank" href="https://www.8bitbeans.com/">this link</a> to go their page and see more info!<p>'
                + '</div>';

