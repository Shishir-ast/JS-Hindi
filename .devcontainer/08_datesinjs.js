//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 09, 06, 06, 03);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleDateString('default',{
    weekday: "long"
})