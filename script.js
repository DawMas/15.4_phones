'use strict';

(function () {

    function Phone(brand, price, color, ram, size) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.ram = ram;
        this.size = size;
    }

    Phone.prototype.printInfo = function () {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "."+" It has "+this.ram+"GB RAM memory and "+this.size+" inches screen.");
    }

    Phone.prototype.printFunctions = function(){
        console.log(this.brand +" is available in media markt")
    }

    var SamsungGS6 = new Phone ("Samsung", 2000, "black", 2, 6);
    var iPhone6S = new Phone("Apple", 2250, "silver", 3, 5.5);
    var OnePlusOne = new Phone("OnePlus", 1800, "white", 2.5, 5)

    SamsungGS6.printInfo();
    SamsungGS6.printFunctions();
    iPhone6S.printInfo();
    iPhone6S.printFunctions();
    OnePlusOne.printInfo();
    OnePlusOne.printFunctions();

    
})();

