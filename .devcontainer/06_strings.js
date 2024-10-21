// const name = "shishir"
// const repoCount = 50

// //console.log(name + repocount + "valur");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String("Shihsir-As");

// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("S"))

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice (-8,4)
console.log(anotherString)


const newStringOne = "     shihsir      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://shishir.com/shihir%20acharya"

console.log(url.replace("%20",'-'))

console.log(url.includes('astha'))

console.log(gameName.split('-'))