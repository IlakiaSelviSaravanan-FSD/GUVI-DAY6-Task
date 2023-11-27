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
toString(){
    return `this circle with radius $(this.radius),$(this.color) `;
}
}
var c1= new Circle(8);
console.log("the value of area :"+c1.getArea().toFixed(2));
console.log("the value of circumference:",+c1.getCircumference().toFixed(2));