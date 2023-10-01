// ********************* ARRAYS *********************


const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ["Ironman", "superman"]
const myArr2 = new Array (1, 2, 3, 4)

// console.log(myArr[1]);


// Arrays Method --------------

// myArr.push(15)
// myArr.pop()

// myArr.unshift(8)    [8, 1, 2, 3, 4, 5, 6]
// myArr.shift()         [ 2, 3, 4, 5, 6 ]

// console.log(myArr.includes(8));             false
// console.log(myArr.indexOf(3));                 2 

const newArr = myArr.join ()
// console.log(typeof newArr);                 string
// console.log(myArr);                         [ 1, 2, 3, 4, 5, 6 ]


//  Slice // Splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);

// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


//     Arrays Used for the react.js and node.js----------------------

const marvel_heros = ["Ironman", "Spiderman", "Thor", "Hulk", "Ben10"]

const dc_heros = ["batman", "superman", "akshay kumar"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, 4, 5, 6,[4, 5, 6, 7[9, 8, 7]]]

const real_another_array = another_array.flat(1)

console.log(real_another_array);

console.log(Array.isArray("vansh"));
console.log(Array.from("Lorem"));
console.log(Array.from({name: "vansh"}));     // intresting because  []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));