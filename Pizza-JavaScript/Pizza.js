function getReceipt() {     //initializes funtion so it can pass to functions and gros lines by line into receipt
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {     //check all size to select array element that is checked
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";  //assign checked size to text1
        }
    }
    if (selectedSize === "Personal Pizza") {        //assign cost to sizeTotal based on size selected
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;   //assign size cost to runningTotal
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);    //call topping function and pass on variables
};

function getTopping(runningTotal, text1) {  //initialize topping variables and array
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {  //check all toppings to select array elements that are checked
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"; //add selected toppings to toppingArray
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {     //calc topping cost if first topping is free
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);   //add toppings to running total
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping -1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;  //print selected size and toppings
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong><h3>"; //print cost
};