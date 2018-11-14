var $ = function (id) { //This function provided by instructor
    return document.getElementById(id);
}

function coinCounter() { //coinCounter() code created by me

var cents = document.getElementById("myCents").value;
    
    //quarters
    var quarters = parseInt(cents/25);
    cents = cents - (25*quarters);
    document.getElementById("quarters").value = quarters;
    
    //dimes
    var dimes = parseInt(cents/10);
    cents = cents - (10*dimes);
    document.getElementById("dimes").value = dimes;
    
    //nickels
    var nickels = parseInt(cents/5);
    cents = cents - (5*nickels);
    document.getElementById("nickels").value = nickels;
    
    //pennies
    var pennies = parseInt(cents);
    document.getElementById("pennies").value = pennies;

}
