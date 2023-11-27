class Person{
    constructor(name,age,gender,qualification){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }


getdetails(){
    return `${this.name},${this.age},${this.gender},${this.qualification}`;
}
}

var c1= new Person("Ilakia Selvi","18","male","BE");
console.log("this is my name"+c1.name);
console.log("My age is:"+c1.age);
console.log("My Gender is:"+c1.gender);
console.log("myqualification is:"+c1.qualification);

