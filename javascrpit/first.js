console.time("same");
console.log("hello Nitin Sharma");
console.log("hello");
console.log(34);
console.log(34+6);
console.log(true);
console.log([33,33,55,78,84,93]);
console.table({name: "Nitin",class: "BCA"});
console.warn("this is a warning");
// console.clear()

// console.assert(56>57," value>57 is not possoble");
console.error("this is an error")
// Variables
var name = "Nitin Sharma";
var cource;
var marks=55
console.log(name, cource, marks);
// Rules for creating javascript variables
// 1-cannot start with numbers 
// 2-can start with letters, numbers, _ or,$
// 3-are case sensitive
var city = "himachal pradesh"
console.log(city);
// const variable
const ownername = "prince thakur"
// ownername = "nitin sharma"
console.log(ownername);
const fruit = "mango"
console.log(fruit)
// let variable
{
  let city = "chandigarh";
console.log(city);
}
const arry1 = [12,33,45,65,75,75];
arry1.push(66);
console.log(arry1)
console.table({firstName: "arpit ", lastName: "thakur", class: "BCA", hobby: "dancing" })
console.timeEnd("same");