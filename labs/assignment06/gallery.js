$(document).ready(function(){

    var image = [];
    var count = 0;
    var xmlTimeAmount = [];
    var current;

    /*$.ajax({
        type: 'GET',
        url: 'covers.xml',
        dataType: 'xml',
        error: function(e){
            alert("There was an issue with loading the file.");
        },

        success: function(response){
            $(response).find('cover').each(function(){
                var fileName = $(this).find("fileName").text();
                image.push(fileName);
                console.log(fileName);});
            alert("file loaded");
            count = image.length;

            }
            console.log("done loading");
            for (let index = 0; index < 100; index++) {
                var imageNum = index % 2;
                console.log(image[imageNum]);
                
            };
    });*/

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
            current = xmlTimeAmount[0];

            var timer = function(){
                //setInterval(function(){
                    clearInterval(start);
                    //console.log(current);
                    count++;
                    //console.log(count);
                    $("img").fadeOut(300, function(){ $("img").attr('src', "../assignment06/images/"+image[count % image.length]); }).fadeIn(300);
                    current = xmlTimeAmount[count % image.length];
                    start = setInterval(timer, current);
                    //setTimeout(timer, xmlTimeAmount[count % image.length]);
            //}, xmlTimeAmount[count % image.length]);
            }
            //3000);
        
            var start = setInterval(timer, current);
        
        //Previous Button Clicked
            $("#previous").click(function(){
                clearInterval(start);
                if(count === 0){
                    count = image.length;
                    $("img").fadeOut(500, function(){ $("img").attr('src', "../assignment06/images/"+image[image.length-1]) }).fadeIn(500);
                    count--;
                }else{
                    count--;
                    //console.log(count % image.length);
                    $("img").fadeOut(500, function(){ $("img").attr('src', "../assignment06/images/"+image[count % image.length])}).fadeIn(500);
                };
                //setTimeout(timer, 500);
            });


        //Next Button Clicked
            $("#next").click(function(){
                clearInterval(start);
                count++;
                //console.log(count % image.length);
                $("img").fadeOut(500, function(){ $("img").attr('src', "../assignment06/images/"+image[count % image.length])}).fadeIn(500);
                //setTimeout(timer, 500);
            });
        
        //Reload Function
            $("#reload").click(function(){
                location.reload();
            });
            //var timer = switchPicture();

        }
    }

})
