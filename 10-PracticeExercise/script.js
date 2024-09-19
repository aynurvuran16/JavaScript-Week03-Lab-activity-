/* ## 01. 
For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
Find the average marks of the entire class. */

let marks = [85, 97, 44, 37, 76, 60];

let totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
let averageMarks = totalMarks / marks.length;

console.log(averageMarks); // Output: 66.5

/*# 02.For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer*/

let prices = [250, 645, 300, 900, 50];

let finalPrices = prices.map(price => price * 0.9);

console.log(finalPrices); // Output: [225, 580.5, 270, 810, 45]

/*# 03.Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix” */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company from the array
companies.shift();
console.log(companies); // Output: ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

// b. Remove Uber and Add Ola in its place
let indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
    companies[indexOfUber] = "Ola";
}
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix"]

// c. Add Amazon at the end
companies.push("Amazon");
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]




