$(document).ready(function(){
    var image = [];
    var xmlTimeAmount = [];
    var count = 0;

    var xmlRequest = new XMLHttpRequest();
    var xmlData;
    xmlRequest.open("GET", "covers.xml", true);
    xmlRequest.send();
    xmlRequest.onreadystatechange = function(){
        if( this.status == 200 && this.readyState == 4){
            xmlData = xmlRequest.responseXML;
            var covers = xmlData.getElementsByTagName("cover");
            var names = xmlData.getElementsByTagName("fileName");
            for(var i = 0; i < covers.length; i++){
                /*console.log(covers.length);
                console.log(names[i]);
                console.log(names[i].childNodes[0]);
                console.log(names[i].childNodes[0].nodeValue);*/
                image.push(names[i].childNodes[0].nodeValue);

                //console.log(covers[i].getElementsByTagName("time")[0].childNodes[0].nodeValue);
                xmlTimeAmount.push(covers[i].getElementsByTagName("time")[0].childNodes[0].nodeValue);
                //console.log(i + " -- " +image[i] + " : " + xmlTimeAmount[i]);
            }
        }
    }
})