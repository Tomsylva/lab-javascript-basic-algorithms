// I working with John and Luis :)

//iteration 1

console.log("I'm ready!");

const hacker1 = "Tom";

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "John";

console.log(`The navigator's name is ${hacker2}.`);

// iteration 2

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} letters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} letters.`);
} else {
  console.log(`You both have equally long names, ${hacker1.length} characters long.`);
};

// iteration 3

for (letter of hacker1){
  console.log(letter.toUpperCase())
};

for (let i = hacker2.length - 1; i >= 0; i--){
  console.log(hacker2[i]);
};

if(hacker1.localeCompare(hacker2) > 0){
  console.log("The driver's name goes first");
} else if(hacker1.localeCompare(hacker2) < 0){
  console.log("The navigator's name goes first")
} else {
  console.log("You have the same name!")
`
`}

//Number of words in a string

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, tortor nec hendrerit dapibus, lacus est malesuada nunc, et tempus lorem libero in ligula. Aenean id nisl blandit, rutrum sem vel, mollis metus. Vestibulum rutrum pharetra pellentesque. Curabitur molestie dictum luctus. Maecenas eu lorem vitae nulla ultrices tincidunt. Donec bibendum faucibus sem id hendrerit. Integer finibus diam quis felis hendrerit vestibulum. Vestibulum tristique augue at libero faucibus hendrerit. Praesent sed viverra dui. Nulla in pulvinar neque. Vivamus rhoncus porta eleifend. Duis interdum fringilla libero, at convallis enim. Mauris mollis auctor ante at sodales. Curabitur ultricies velit justo, id dignissim metus lacinia vitae. Curabitur aliquam dui quis neque eleifend lobortis. Morbi et venenatis odio. Morbi rhoncus ut lorem vel facilisis. Nullam elementum commodo volutpat. Praesent augue orci, posuere a nunc eget, interdum placerat leo. Sed ornare vitae ante ut convallis. Sed fringilla orci ac nisi sollicitudin, tincidunt accumsan ipsum accumsan. In condimentum tristique massa, vel placerat erat molestie in. Donec cursus vel turpis at placerat. In hac habitasse platea dictumst. Maecenas at sem libero. Praesent quis nibh condimentum, commodo lacus id, varius ante. Mauris vulputate consectetur fermentum. Quisque vel dapibus elit. Nullam vestibulum convallis odio eu fermentum. Donec iaculis eu tellus et aliquam. Praesent vehicula ligula at arcu gravida varius. Vestibulum varius enim nec porta viverra. Ut imperdiet bibendum feugiat. Suspendisse sodales, erat nec semper eleifend, ligula sem ultricies arcu, id ultricies nisi dolor dignissim nibh. Ut vel est ante. Aliquam dapibus velit sapien, sit am et sodales augue mattis ac. Aenean sit amet urna turpis. Fusce congue purus ut nisl scelerisque placerat. Nulla sed tortor nunc. Nullam tincidunt ac felis vitae faucibus. Suspendisse porttitor in massa in sodales. Fusce a arcu sed massa posuere tempor.`;

let wordCount = 0;

for(let i = 0; i < text.length; i++){
  if (text[i] === " "){
    wordCount += 1;
  }
};

console.log(`The number of words is ${wordCount + 1}.`)

//number of times "et" appears // "et" is latin for and so shouldn't be followed by ".", but woulod break the code in this instance

let etCount = 0;

for(let i = 0; i < text.length; i++){
  if (text[i].toLowerCase() === " " && text[i + 1].toLowerCase() === "e" && text[i + 2] === "t" && text[i + 3] === " "){
    etCount += 1;
  }
};

console.log(`The number of instances of "et" is ${etCount}.`)

//palindrome exercise - not complete

const tacoCat = "Taco cat";
const iHateThatGuy = "Tom is the worst"; //control test - not a palindrome
const racecar = "Racecar"; //Reuben reference, anyone?

// create two counters, one forwards and one backwards
//if not a alphanumeric character, skip character
//check letter at index of each counter against each other (in lower case). If same, repeat loop
//if two counters meet (index is the same or within one space of each other), then string is a palindrome - console.log 
//if indecies do not match, break and console.log that it is not a palindrome

//we did not figure this out without looking into function examples on the internet. 

for (let i = 0; i < tacoCat.length; i++){

  if (!(/[a-zA-Z]/).test(tacoCat[i])){
      continue;
    }

  for (let j = tacoCat.length-1; j >= 0; j--){

    if (!(/[a-zA-Z]/).test(tacoCat[j])){
      continue;
    }

    if (tacoCat[i].toLowerCase() === tacoCat[j].toLowerCase()){
      continue;

      if (i === j || i === (j - 1)){
        console.log("This is a palindrome!")
        break;
      }

      //restart loop

    } else {
      console.log("Not a palindrome");
      break;
    }
  } 
}



//from freecodecamp.org

/* function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama"); */