https://github.com/ShakhawatHossain-web/assignment3

function kilometerToMeter(meter){

// 1 kilometer = 1000 meter

var kilometer = meter * 1000;

return kilometer;

}

var result = kilometerToMeter(10);

console.log(result);
----------------------------------------

//watch=50, mobile=100, laptop=500

var items = [50, 100, 500];

function budgetCalculator(total){

return total;
}

var watch = budgetCalculator(items[0]*5); // 5 watch
var mobile = budgetCalculator(items[1]*2); // 2 mobile
var laptop = budgetCalculator(items[2]*3); // 3 laptop

var total = watch + mobile + laptop;

console.log(total);
--------------------------------------

function hotelCost(day){

    var rent = 0;

    //100/per day for first 10 days 
    if(day <= 10){

        rent = day * 100;

        }
    
    //80/per day for after 10 days     
    else if(day <= 20){
        var firstPart = 10 * 100;
        var nextDay = day - 10;
        var secondPart = nextDay * 80;
        rent = firstPart + secondPart;
        }
    
    //50/per day for after 20 days    
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80; 
        var nextDay2 = day - 20;
        var thirdPart = nextDay2 * 50;
        rent = firstPart + secondPart + thirdPart;
        }

    return rent;
    
    }
    
    var result = hotelCost(71);
    
    console.log(result);    

----------------------------------------------


var friend = ["Abul", "Kabul", "Salam", "Barkat", "Robiul", "Eriksson"]
function megaFriends(){


    return bigName

}
var friend = "Abul, Kabul, Salam, Barkat, Robiul, Eriksson";

var count = 0;

function megaFriend(friend){

    for(var i = 0; i < friend.length; i++){
        
        var char = friend[i];

        if(char == "Eriksson"){

        count++;

        }


    }

    return count;

}

console.log(count);