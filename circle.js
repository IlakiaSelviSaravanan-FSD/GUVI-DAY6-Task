class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;

    }
getCircumference(){
    return 2*Math.PI* this.radius;
    
}

getArea(){
    return Math.PI * this.radius * this.radius;
    
}
getColor(){
    return `${this.color}`;
}
toString(){
    return `this circle with radius $(this.radius)and color,$(this.color)` ;
}
}
var c1= new Circle(8,"red");

console.log("the color of radius:"+c1.getColor());
console.log("the value of area :"+c1.getArea().toFixed(2));
console.log("the value of circumference:",+c1.getCircumference().toFixed(2));
