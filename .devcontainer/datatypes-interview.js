//  Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt, 

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail = undefined;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34780274629348940449243n




//writing = undefined not needed


// Reference  (Non primitive)

// Array , Objects, Functions

// const heroes = ["shaktiman", "nagraj", "doga"]

// let myObj = {
//     name : "shishir",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello Astha")
// }

// console.log(typeof outsideTemp)

//*************************************************



// Stack(Primitve), Heap (Reference)

// let myYoutubeName = "shishirYt.com"

// let anotherName = myYoutubeName

// anotherName = "chaiaurcode"

// console.log(myYoutubeName)
// console.log(anotherName)

let user1 = {
    email: "user@google.vom",
    upi:"123"
}

let user2 = user1

user2.email = "shishir@gmail.com"

console.log(user1.email);
console.log(user2.email);