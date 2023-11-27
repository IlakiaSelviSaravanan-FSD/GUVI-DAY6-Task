class Uberprice{
    constructor(priceperminute,distancetravelled, basefare){
        
        this.distancetravelled=distancetravelled;
        this.basefare=basefare;
        
        this.priceperminute=priceperminute;
    }
   getprice(){
    var totalpricepermin= this.distancetravelled * this.priceperminute;
    var totalprice= this.basefare + totalpricepermin;
    return totalprice;

   }
}



var calculator=new Uberprice(50,80,60)
console.log(calculator.getprice());