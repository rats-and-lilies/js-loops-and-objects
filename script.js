//1
console.log ("+++numbers+++") 
let num = [];
for (let i= 0; i< 10; i++) {
     console.log(i+1);
}


//2
console.log("+++evens+++")
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


//3
console.log("+++animals+++");
let animals = ["dog", "cat", "rabbit", "parrot"];
console.log(animals);
for (let animal of animals) {
    console.log("You should get a " + animal + " because " + animal + "s make wonderful pets!")
}

//4
console.log("+++colors+++")
let colors = ["red", "green", "blue", "yellow"];
console.log(colors)

colors.reverse();
console.log(colors);

//5
console.log("+++Me+++")
const me = {
    name: "Lilith",
    age: "30",
    favoriteColor: "purple"
}
console.log(me)
console.log( me.name + " is " + me.age + " and her favorite color is " + me.favoriteColor + ".")

//6
me.hobby = "making music"
console.log(me.name + " likes " + me.hobby + ".")
console.log(me)

//7 
console.log("+++books+++")
let books = [ 
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: "310"
    },

    {
        title: "Redwall",
        author: "Brian Jaques",
        pages: "352"
    },

    {
        title: "The Crystal Shard",
        author: "R.A Salvatore",
        pages: "336",
        isFavorite: true
    },
];

for (let i = 0; i < books.length; i++) {
    console.log( 
       `${books[i].title} by ${books[i].author} - ${books[i].pages}.`
    )
}


//8
console.log("+++my favorite book+++")
for (let i = 0; i < books.length; i++) {
    if (books[i].isFavorite === true)
        console.log(`${books[i].title} by ${books[i].author} - ${books[i].pages}.`
        )
    }

