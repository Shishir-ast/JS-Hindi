// Singleton

//Object.create 

// Object literals

const mySym =Symbol("key1")

const JsUser = {
    "full name" : "Shishir",
    [mySym]: "myKey1",
    age : 19,
    location : "kathmandu",
    email : "shihisr@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["sunday", "monday"]
}

// console.log(JsUser.email);
// console.log(JsUser.isLoggedIn)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// JsUser.email = "astha@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "ramkumar"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}


console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);