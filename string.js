const name = "vansh"
const repoCount = 50

// console.log(name + repoCount + "value" );

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Vansh.oo')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring (0,5)

console.log(newString);

const anotherString = gameName.slice (-8, 4)

console.log(anotherString);

const newStringOne = "    vansh     "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vansh.com/vansh%38kirtishahi"

console.log(url.replace ('%38', '-'));

// console.log(url.includes ('vansh'));        True
// console.log(url.includes ('djdjdhjd'));     Fasle

console.log(gameName.split ('.'));