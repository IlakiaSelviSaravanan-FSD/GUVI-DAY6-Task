class Person{
    constructor(name,age,gender,qualification,nationality,maritalstatus,phonenumber){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
        this.nationality=nationality;
        this.maritalstatus=maritalstatus;
        this.phonenumber=phonenumber;

    }


getdetails(){
    return `${this.name},${this.age},${this.gender},${this.qualification},${this.nationality},$(this.maritalstatus),$(this.phonenumber)`;
}
}

var c1= new Person("Ilakia Selvi","18","male","BE","Indian","married","+911234567891");
console.log("this is my name"+c1.name);
console.log("My age is:"+c1.age);
console.log("My Gender is:"+c1.gender);
console.log("myqualification is:"+c1.qualification);
console.log("My nationality:"+c1.nationality);
console.log("my maritalstatus is: "+c1.maritalstatus);
console.log("My phonenumber is:"+c1.phonenumber);
