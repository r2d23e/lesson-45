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
//-------------------------------//
let nm;
let ages = []

for (let item of Masiv) {
    item.income = item.age + 200
    if (item.name == "Saidbek") {
        nm = item
    }
    if (item.age > +20) {
        ages.push(item)
    }
}
console.log(ages);
console.log(nm);
//-------------------------------//

for (let item of Masiv) {
    if (item.age >= 20) {
        ages.push(item)
    }
}
//-------------------------------//
let find_el = Masiv.find(item => item.name == "Saidbek")

console.log(find_el);
//-------------------------------//
let filt = Masiv.filter(item => item.age >= 20)
console.log(filt);
//-------------------------------//






let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
users = users.sort((a, b) => a - b)

let user2 = users.map

console.log();