// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 103


// const isLoggedIn = false
// const outsideTemp = null
// let userEmail =;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

//const bigNumber = 8472374234093284

// const bigNumber = 2372163721n

// // Reference ( Non primitive)

// //Array, Objects, Functions

// const heroes= ["shaktiman", "naagraaj", "doga"]

// let myObj = {
// name : "shishir"
// age : 22
// }

// const myFunction = function(){
//  console.log("Hello world")
// }
// console.log(typeof bigNumber);

//**************************** *

// Stack(Primitive), Heap(Non-primitive)

// let myYoutubename = "Shishir"

// let anothername = myYoutubename
// anothername = "Chai aur code"


// console.log(anothername);
// console.log(anothername);

let user = {
    email : "user@google.com",
    upi : "ramdas"

}


let user2 = user

user2.email = "ram@google.com"

console.log(user.email);
console.log(user2.email);