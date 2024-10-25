// function sayMyName() {
// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")
// }

//sayMyName does not print
 //sayMyName()   //Prints

//  function addTwoNumbers(number1,number2){  //Parameters
//     //      let result = number1 + number2
//     //    console.log("Shishir")  
//     //    return result
//          return number1 + number2
//  }

// const result = addTwoNumbers(3,5)    //Arguments
 
// console.log("Result=" ,  result);

function logInUserMessage(username = "Astha"){
    if (!username){
        console.log("Please enter a name")
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Shishir"))
console.log(logInUserMessage());