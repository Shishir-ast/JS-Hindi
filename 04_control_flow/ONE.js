// // If
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 40){
// console.log("Less than 50")
// } else {
//     console.log("Temperature is greater than 50")
// }


// // <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score>100){
//     var power = "fly" //Don't use var. It has global scope
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)



 const balance = 1000

// if(balance >500) console.log("test"),
// console.log("test two");  // Noob style

// if (balance < 500) {
// console.log("Less than 500")
// } else if (balance < 750){
//     console.log("Less than 750")
// } else {
//     console.log("less than 1250")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmali = true

if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmali){
    console.log("User logged in")
}


// Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// //val1 = null ?? 10
// // val1 = undefined ?? 15



// val1 = null ?? 10 ?? 15 
// console.log(val1)

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

