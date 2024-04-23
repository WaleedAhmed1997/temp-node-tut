// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
require("./07.mind-grenade.js");

const names = require("./04.names.js");
const sayHi = require("./05.utils.js");
const data = require("./06.alternative-flavor.js");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data);
// console.log(names);
