var bird = {
  genus: "corvus",
  species: "convax",
  commonName: "raven",
  calltype: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
  "what up": false
};

var bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  callType: "roar",
  quote: "",
  maxOffspring: 3,
  noisy: true,
  deadly: true
};

var bookOfKnowledge = {
  "lunch time": "12:30 PM",
  "the ultimate answer": 42,
  bestSong: "Lonnie's Lament",
  earth: "mostly harmless."
};

var answer = window.confirm("click ok, get true. CLick cancel, get false");
if (answer === true) {
  console.log("you said true");
} else if (answer === false) {
  console.log("you said false");
}

var read = window.prompt("Type Yes or No or Maybe. then click ok.");
//I can use tolower with var char
if (answer === "Yes") {
  console.log("you said Yes");
} else if (answer === "Maybe") {
  console.log("you siad maybe");
} else if (answer === "No") {
  console.log("you said no ");
} else {
  console.log("you rebel you");
}

switch (read) {
  case "Yes":
    console.log("You said yes");
    break;
  case "Maybe":
    console.log("you said maybe");
    break;
  case "NO":
    console.log("you said No");
    break;
  default:
    console.log("you rebel you!");
    break;
}

var animal = "cat";
//animal="dog";

animal === "cat"
  ? console.log("you will be a cat herder.")
  : console.log("you will be a dog catcher.");

var job = animal === "cat" ? "cat herder" : "dog catcher";

var thing = 12;
thing = "twelve";

typeof thing;

var pageName = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];

for (var i = 0; i < pageName.length; i++) {
  if (document.title === pageName[i]) {
    console.log("we are here " + pageName[i]);
    break;
  } else {
    console.log("we are not here " + pageName[i]);
  }
}

for (var i = 0; i < pageName.length; i++) {
  var currentPageTitle = pageName[i];
  if (document.title === currentPageTitle) {
    console.log("we are here " + currentPageTitle);
    break;
  } else {
    console.log("we are not here " + currentPageTitle);
  }
}

for (var p in pageName) {
  console.log(p, pageName[p]);
}

var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog"
};

pages.first;

for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}

console.log("Arf");
console.log("Woof");
console.log("Meow");
console.log("Mooooooooo");

function speak() {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Mooooooooo");
}

function fuddify(speech) {
  if (typeof speech !== "string") {
    console.error("nice twy, wabbit");
    return;
  }

  //otherwise make it sound like elmer fudd
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "W");

  return speech;
}

function isEven(num) {
  return num % 2 === 0;
}

function speakSomething(what, howMany) {
  //  what = (typeof what !=="undefined")? what : "Default Speech";
  //  howMany = (typeof howMany )!=="undefined" ? howMany : 10 ;
  for (var i = 0; i < howMany; i++) {
    console.log(what + "(" + i + ")");
  }
}

function addingMachine() {
  //initialize the total we'll be returning
  var total = 0;

  for (var i = 0; i < arguments.length; i += 1) {
    //grab the next number
    var number = arguments[i];

    //check if the argument is a number.
    //if so, add it to the running total
    if (typeof number === "number") {
      total += number;
    }
    //done- return the total
  }
  return total;
}

var calvin = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy"
};

function transmogrifier(calvin) {
  if (typeof calvin !== "object") {
    console.error("argument is of the wrong type");
    return;
  }

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  switch (randomNumber) {
    case 1:
      calvin.form = "tyrannosaurus";
      break;
    case 2:
      calvin.form = "grey wolf";
      break;
    case 3:
      calvin.form = "bengal tiger";
      break;
    case 4:
      calvin.form = "grizzly bear";
      break;
    case 5:
      calvin.form = "canary";
      break;
    default:
      //he stay humna
      calvin.form = "human boy";
      break;
  }
}

var newCalvin20 = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy"
};

function transmogrifierCopy2(newCalvin) {
  if (typeof calvin !== "object") {
    console.error("argument is of the wrong type");
    return;
  }

  var randomNumber = Math.floor(Math.random() * 5) + 1;
  //saving the form as a new variable
  var newForm = calvin.form;

  //modify the new form instead the form name: value pair inside the object reference
  switch (randomNumber) {
    case 1:
      newForm.form = "ajdbsfui";
      break;
    case 2:
      newForm.form = "gsdjhf";
      break;
    case 3:
      newForm.form = "besdkfha";
      break;
    case 4:
      newForm.form = "gdiufha";
      break;
    case 5:
      newForm.form = "cdsfiuahsea";
      break;
    default:
      //he stay humna
      newForm.form = "aldskjfhaj";
      break;
  }

  //return new object 
  return {
      name:calvin.name,
      bestFriend:calvin.bestFriend,
      form:newForm
  };

}

var speakSomething = function(what){
    what = what || "speaking!";

    for(var i =0;i<10;i++){
        console.log(what);
    }
};

window.setTimeout(speakSomething,5000);

var obj ={
    sayHello:function(){
        console.log("Hello");
    }
};

obj.sayHello;

"use strict";
"hello abraham";


var obj ={
 firstName: "Abraham",
 lastName: "Pierrot",
 DOB: "12/05/1993",
 occupation: "Software Developer"
};



var fruitArray = ["orange", "banana", "apple"];

for(var i=0;i<fruitArray.length;i++){
    console.log(fruitArray[i]);
}