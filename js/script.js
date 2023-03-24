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
let new_arr = Masiv.map((item) => {
    return item.age + 200
})
console.log(new_arr);
//-------------------------------//
let new_arr2 = Masiv.map(item => item.age + 200)
console.log(new_arr2);
//-------------------------------//



//-------------------------------//
let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
users = users.sort((a, b) => a - b)
let user2 = users.map(item => item - 2)
console.log(users, user2);
//-------------------------------//
let user3 = users.some(item => item == 2)
console.log(user3);
//-------------------------------//
user3 = users.every(item => item == 2)
console.log(user3);
//-------------------------------//
users.forEach(item => {
    item = item + 2
})
console.log(users);