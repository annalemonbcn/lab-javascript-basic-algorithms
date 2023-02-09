// Iteration 1: Names and Input
let hacker1 = 'Anna';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nacho';
console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals
// Si hacker1>hacker2
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if(hacker2.length > hacker1.length){
    // Si hacker2>hacker1
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    //Si hacker2 == hacker1
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops
// hacker1 in mayus
let hacker1Mayus = '';
for(let i = 0; i < hacker1.length; i++){
  hacker1Mayus += hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1Mayus);

// hacker2 in reverse
let hacker2Reverse = '';
for(let i = hacker2.length-1; i >= 0; i--){
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

// Depending on the lexicographic order of the strings
if(hacker1.localeCompare(hacker2) === 1){
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === -1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
