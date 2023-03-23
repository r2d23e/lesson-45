let Masiv = [
    {
        name: "Saidbek",
        age: 13,

    }, {
        name: "Odik",
        age: 13,

    }, {
        name: "Pasha",
        age: 32,

    }, {
        name: "Alisher",
        age: 42,

    },
]

let ages = []
for (let item of Masiv) {
    if (item.age >= 20) {
        ages.push(item)
    }
}
let filt = Masiv.filter(item => item.age >= 20)
for (let item of Masiv) {
    item.income = item.age + 200
}

console.log(filt);
console.log(ages);




let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
users = users.sort((a, b) => a - b)

let user2 = users.map

console.log();