// https://github.com/avijitsaha01/third-assignment-js

// Kilometer To Meter converter calculator Function
function kilometerToMeter(km){
    if(km <= 0){
        return "Give value greater than zero";
    }else{
        var meter = 1000 * km;

        return meter;
    }
}
var result  = kilometerToMeter(5);
console.log(result);



// Budget Calculator Function
function budgetCalculator(watch, mobile, laptop) {
    if(watch <= 0 || mobile <= 0 || laptop <= 0){
        return "Please Give quntity minimum 1 pice"
    }else{
    var priceOfWatch  = 50  * watch;
    var priceOfMobile = 100 * mobile;
    var priceOfLaptop = 500 * laptop;
    var totalPrice    = priceOfWatch + priceOfMobile + priceOfLaptop;
    }
    return totalPrice;
}

var result = budgetCalculator(1,2,3);
console.log(result);



// Hotel room rent cost calculator
function hotelCost(days) {
    var totalCost = 0;
    if(days <= 0){
        return "Please give vaild Day input";
    }else{
        if(days <= 10){
            totalCost = days * 100;
        }else if(days <= 20){
            var firstTenDays  = 10 * 100;
            var remaining     = days  - 10;
            var secondTenDays = remaining * 80;
                totalCost = firstTenDays + secondTenDays;
        }else{
            var firstTenDays  = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining     = days - 20;
            var onwardsDays   = remaining * 50;
                totalCost     = firstTenDays + secondTenDays + onwardsDays;
        }
    
        return totalCost;
    }
}
var result = hotelCost(1);
console.log(result);




// Find the bigger String from an Array
function megaFriend(arry) {
    var name = "";
    for (var i = 0; i < arry.length; i++) {
      if (name.length < arry[i].length) {
        name = arry[i];
      }
    }

    return name;
  }
  var friendsName = ['Alia Bhatt', 'Deepika Padukone', 'Shraddha Kapoor', 'Kangana Ranaut', 'Anushka Sharma', 'Katrina Kaif'];
  var result = megaFriend(friendsName);
  console.log(result);
