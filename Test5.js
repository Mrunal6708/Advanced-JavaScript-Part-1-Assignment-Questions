const person1 ={
    name : "Mander",
    age : 14,
};

const person2 ={
    name : "Mrunal",
    age : 23,
};

function introduce(){
    console.log( "Hello, I'm " +this.name+ ", and I'm "+this.age+ "years old.")
}

introduce.call(person2);