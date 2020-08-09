function calculateTotal() {
    var totalCost = 0.00;
    var chicken = document.getElementById("item1");
    var halibut = document.getElementById("item2");
    var burger = document.getElementById("item3");
    var salmon = document.getElementById("item4");
    var salad = document.getElementById("item5");

    (chicken.checked) ? totalCost += 8.00 : totalCost += 0.00;
    (halibut.checked) ? totalCost += 9.00 : totalCost += 0.00;
    (burger.checked) ? totalCost += 8.00 : totalCost += 0.00;
    (salmon.checked) ? totalCost += 13.00 : totalCost += 0.00;
    (salad.checked) ? totalCost += 6.00 : totalCost += 0.00;
    totalCost *= 107;
    alert("Your total is $" + (totalCost / 100).toFixed(2));

}

document.getElementById("submit").addEventListener("click", calculateTotal, false);