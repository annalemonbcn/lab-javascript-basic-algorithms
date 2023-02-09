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


let longText = "et et annda et anna et";
// Bonus 1: count total words
// let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium feugiat sagittis. Proin massa metus, ultrices id dapibus sit amet, maximus sed massa. Sed consequat dictum mi ut feugiat. Donec id aliquet ipsum. Praesent leo enim, eleifend non lorem eget, venenatis luctus metus. Vestibulum blandit bibendum lorem quis pulvinar. Donec hendrerit lorem id eleifend congue. Nunc id urna vel nunc condimentum feugiat. Aliquam placerat, lorem nec mattis auctor, tellus orci gravida nisi, non ultricies tellus velit sed quam. In bibendum arcu est, id tincidunt dui dapibus id. Proin tristique lorem mollis tortor auctor dapibus. Nulla egestas libero vitae quam hendrerit, nec lobortis nisi gravida. Sed vitae neque sit amet est sollicitudin volutpat ut quis tellus. Etiam eu odio feugiat, congue arcu ac, congue eros. Nam rhoncus, neque et tempor eleifend, eros mi tristique erat, vitae volutpat velit augue ullamcorper diam. Nunc vitae mi eu lacus varius tincidunt. Morbi non auctor nisi. Ut massa nulla, dignissim a sapien nec, porta lacinia augue. Integer erat nibh, vulputate ac orci accumsan, pellentesque hendrerit urna. Nunc facilisis porttitor tellus a ultricies. Etiam sodales volutpat felis vel varius. Sed in enim nec risus volutpat feugiat ac non urna. Quisque scelerisque urna vel efficitur viverra. Mauris vel turpis justo. Nulla ac nulla suscipit, pharetra nunc a, ultricies urna. Curabitur laoreet, orci non dapibus pellentesque, eros diam fringilla diam, a porta lacus erat et augue. Sed sem turpis, porta eget nibh sollicitudin, venenatis sagittis arcu. Integer ac pharetra quam. Etiam facilisis enim urna, non bibendum erat tincidunt et. Ut pulvinar, felis a malesuada feugiat, neque quam vehicula felis, eu commodo tortor arcu et felis. Aenean eleifend quam id condimentum iaculis. Sed nec sem rutrum, vehicula velit ultrices, bibendum velit. Phasellus molestie ante elit, nec rutrum metus aliquam eu. Pellentesque efficitur turpis sed elementum ultricies.";

// Opt 1:
console.log(longText.split(" ").length);

//Opt 2:
let totalWords = 1;
for(let i = 0; i < longText.length; i++){
  if(longText[i] === " "){
    totalWords += 1;
  }
}
console.log(totalWords);

// Bonus 1: count total et
let totalEt = 0;
for (const value of longText) {
  if(longText[value] === "et"){
    totalEt +=1;
  }
}
console.log(totalEt);