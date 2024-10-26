const coding = [ "js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){ 
//     console.log(item)
// })

// coding.forEach( (abc) => {
//     console.log(abc)

// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// } )


const myCOding = [
    {
        languageName : "javascript",
        languageFile : "JS"
    },
    {
        languageName : "javascript",
        languageFile : "JS"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "PY"
    }
]


myCOding.forEach( (item) => {
console.log(item.languageName);
})