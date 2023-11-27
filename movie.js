class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getPG(){
        if(this.rating=="PG"){
        return`${this.title},${this.studio},${this.rating}`;
    }
}
}
var c1= new Movie("Casino Royale","Eon Productions","PG");
console.log(c1.getPG());