// // For

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element)

// }

// for (let i = 0; i <= 10 ; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Ineer value i s${j} and inner loop is ${i}`)
//         console.log(i + "*" + j + "=" + i*j )
//     }
    
// }

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}



// Breal and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`Value of I is ${index}`)
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`Value of I is ${index}`)
    
}

// Continue makes you skip one preocess