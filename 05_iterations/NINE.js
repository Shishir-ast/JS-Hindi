const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log( ` acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 3 )

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )


console.log(myTotal);

const myShoppingcart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Data science",
        price : 299
    },
    {
        itemName : "Banka",
        price : 2999
    },
    {
        itemName : "JS course",
        price : 2999
    }
]
const acc = 9
const priceToPay = myShoppingcart.reduce((item) => acc + item.price, 0 )

console.log(priceToPay)


