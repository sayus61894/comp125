var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var regularOrderNames = [ "", "", "", "Parth Patel", "", "", "", "", "", "", "Parth Patel", "", "", "", "", "", "", "Parth Patel", "", "", "", "", "", "", "Parth Patel", "", "", "", "","", ""];

var regularFood = [ "", "", "", "indian", "", "", "", "", "", "", "indian", "", "", "", "", "", "", "indian", "", "", "", "", "", "", "indian", "", "", "", "", "", ""]

var regularDiningOption = [ "", "", "", "TakeOut", "", "", "", "", "", "", "TakeOut", "", "", "", "", "", "", "TakeOut", "", "", "", "", "", "", "TakeOut", "", "", "", "", "", ""]

var count = 0;
var dateNum = 1;
var days = document.getElementsByTagName("td");

function fillHeader(){
    while(count < 7){
        document.getElementsByTagName("th")[count].textContent = daysOfWeek[count];
        count++;
    }
    count = 0;
}

function fillDates(){
    for(count = 0; count < days.length; count++){
        if(days[count].getAttribute("class") === "diff-month" || days[count].getAttribute("class") === "weekend diff-month"){
            continue;
        }else{
            days[count].textContent = dateNum;  
            days[count].setAttribute("id", dateNum); 
            dateNum++;
        }
    }
    count = 0;
}

function fillRegularOrder(){
    for(count = 0; count < dateNum; count++){
        if(regularOrderNames[count] != "" && count+1 < 32){
            var order = document.createElement("div");
            var regularOrderInfo = document.createTextNode(regularOrderNames[count]+"-"+regularFood[count]+"-"+regularDiningOption[count]);
            order.appendChild(regularOrderInfo);
            document.getElementById(count+1).appendChild(order);
        }else{
            continue;
        }
    }
}

function submitOrder(){
    var day = document.getElementById("datePicker").value.split("-");
    var name = document.getElementById("name").value;
    var order = document.getElementById("foodType").value;
    var eatingOption = document.getElementById("diningOption").value;
    if(day[1] != 07){
        alert("Orders for this month are not available yet, sorry.");
    }else{
        for(var i = 0;  i < dateNum; i++){
            if(i === Number(day[2])){
                var newOrder = document.createElement("div");
                var orderInfo = document.createTextNode(name + "-" + order + "-" + eatingOption);
                newOrder.appendChild(orderInfo);
                document.getElementById(i).appendChild(newOrder);
                alert("Order Placed");
            }
        }
    }
}

function fillCalendar(){
    fillHeader();
    fillDates();
    fillRegularOrder();

}

document.getElementById("addOrder").addEventListener("click", submitOrder, false);
window.addEventListener("load", fillCalendar, false);
