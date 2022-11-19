const whitekeys = ["a", "s", "d", "f", "j", "k", "l"];
const blackkeys = ["w", "e", "i", "o"];

/* Key array and note function to push keys to array */

const keys = [
  "c-key",
  "c-sharp-key",
  "d-key",
  "d-sharp-key",
  "e-key",
  "f-key",
  "f-sharp-key",
  "g-key",
  "a-key",
  "a-sharp-key",
  "b-key",
];

const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

/* Function for changing background color*/

const keyPlay = function (event) {
  event.target.style.backgroundColor = "#ff0000";
};

const keyReturn = function (event) {
  event.target.style.backgroundColor = "";
};

/* Calling the event listener onmousedown/mouseup to change background*/

let eventAssignment = function (note) {
  note.onmousedown = function () {
    keyPlay(event);
  };
  note.onmouseup = function () {
    keyReturn(event);
  };
};

notes.forEach(eventAssignment);

const changebutton = document.getElementById("changebutton");

changebutton.addEventListener("click", function handleClick() {
  const initialText = "Change to Keyboard Mode";

  if (changebutton.textContent.includes(initialText)) {
    changebutton.textContent = "Change to Piano Chord Mode";
    keyboardletters();
  } else {
    changebutton.textContent = initialText;
    pianochordletters();
  }
});

/* Function for toggling display properties of 'how to' paragraph*/

const showhowto = () => {
  document.getElementById("h1title").style.display = "none";
  document.getElementById("hiddenhowto").style.display = "initial";
};

document.getElementById("howto").addEventListener("click", showhowto);

/* Functions for calling id elements from index.html and assigning their corresponding MP3's */

function aMajor() {
  document.getElementById("a-key");
  new Audio("mp3-files/amajor.mp3").play();
}
function aSharp() {
  document.getElementById("a-sharp-key");
  new Audio("mp3-files/asharp.mp3").play();
}
function bMajor() {
  document.getElementById("b-key");
  new Audio("mp3-files/bmajor.mp3").play();
}
function cMajor() {
  document.getElementById("c-key");
  new Audio("mp3-files/cmajor.mp3").play();
}
function cSharp() {
  document.getElementById("c-sharp-key");
  new Audio("mp3-files/csharp.mp3").play();
}
function dMajor() {
  document.getElementById("d-key");
  new Audio("mp3-files/dmajor.mp3").play();
}
function dSharp() {
  document.getElementById("d-sharp-key");
  new Audio("mp3-files/dsharp.mp3").play();
}
function eMajor() {
  document.getElementById("e-key");
  new Audio("mp3-files/emajor.mp3").play();
}
function fMajor() {
  document.getElementById("f-key");
  new Audio("mp3-files/fmajor.mp3").play();
}
function fSharp() {
  document.getElementById("f-sharp-key");
  new Audio("mp3-files/fsharp.mp3").play();
}
function gMajor() {
  document.getElementById("g-key");
  new Audio("mp3-files/gmajor.mp3").play();
}

/* Adding event listeners to each key -> need to re-review this and the above 
functions as iterating through the keys/notes array at the top of the file 
will likely be better for reduced code and better readability*/

document.getElementById("a-key").addEventListener("click", aMajor);
document.getElementById("a-sharp-key").addEventListener("click", aSharp);
document.getElementById("b-key").addEventListener("click", bMajor);
document.getElementById("c-key").addEventListener("click", cMajor);
document.getElementById("c-sharp-key").addEventListener("click", cSharp);
document.getElementById("d-key").addEventListener("click", dMajor);
document.getElementById("d-sharp-key").addEventListener("click", dSharp);
document.getElementById("e-key").addEventListener("click", eMajor);
document.getElementById("f-key").addEventListener("click", fMajor);
document.getElementById("f-sharp-key").addEventListener("click", fSharp);
document.getElementById("g-key").addEventListener("click", gMajor);

/* Assigning new strings for keyboard mode, this function is called within the if/else statement on line 53 */

function keyboardletters() {
  document.getElementById("b-key").innerHTML = "S";
  document.getElementById("c-key").innerHTML = "D";
  document.getElementById("d-key").innerHTML = "F";
  document.getElementById("e-key").innerHTML = "J";
  document.getElementById("f-key").innerHTML = "K";
  document.getElementById("g-key").innerHTML = "L";
  document.getElementById("a-sharp-key").innerHTML = "W";
  document.getElementById("c-sharp-key").innerHTML = "E";
  document.getElementById("d-sharp-key").innerHTML = "I";
  document.getElementById("f-sharp-key").innerHTML = "O";
}

/* Assigning old strings for Piano Chord mode, this function is called within the if/else statement on line 53 */

function pianochordletters() {
  document.getElementById("b-key").innerHTML = "B";
  document.getElementById("c-key").innerHTML = "C";
  document.getElementById("d-key").innerHTML = "D";
  document.getElementById("e-key").innerHTML = "E";
  document.getElementById("f-key").innerHTML = "F";
  document.getElementById("g-key").innerHTML = "G";
  document.getElementById("a-sharp-key").innerHTML = "A#";
  document.getElementById("c-sharp-key").innerHTML = "C#";
  document.getElementById("d-sharp-key").innerHTML = "D#";
  document.getElementById("f-sharp-key").innerHTML = "F#";
}

/* Object literal definitions for keyup + keydown */

const Action = {
  playAKey() {
    document.getElementById("a-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/amajor.mp3").play();
  },
  playBKey() {
    document.getElementById("b-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/bmajor.mp3").play();
  },
  playCKey() {
    document.getElementById("c-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/cmajor.mp3").play();
  },
  playDKey() {
    document.getElementById("d-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/dmajor.mp3").play();
  },
  playEKey() {
    document.getElementById("e-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/emajor.mp3").play();
  },
  playFKey() {
    document.getElementById("f-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/fmajor.mp3").play();
  },
  playGKey() {
    document.getElementById("g-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/gmajor.mp3").play();
  },
  playASharpKey() {
    document.getElementById("a-sharp-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/asharp.mp3").play();
  },
  playCSharpKey() {
    document.getElementById("c-sharp-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/csharp.mp3").play();
  },
  playDSharpKey() {
    document.getElementById("d-sharp-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/dsharp.mp3").play();
  },
  playFSharpKey() {
    document.getElementById("f-sharp-key").style.backgroundColor = "#ff0000";
    new Audio("mp3-files/fsharp.mp3").play();
  },
  removeBackground() {
    document.getElementById("a-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("b-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("c-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("d-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("e-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("f-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("g-key").style.backgroundColor = "#FFFFFF";
    document.getElementById("a-sharp-key").style.backgroundColor = "#000000";
    document.getElementById("c-sharp-key").style.backgroundColor = "#000000";
    document.getElementById("d-sharp-key").style.backgroundColor = "#000000";
    document.getElementById("f-sharp-key").style.backgroundColor = "#000000";
  },
};

/* Asigning keys for keyboard mode */

const keyAction = {
  a: { keydown: Action.playAKey, keyup: Action.removeBackground },
  s: { keydown: Action.playBKey, keyup: Action.removeBackground },
  d: { keydown: Action.playCKey, keyup: Action.removeBackground },
  f: { keydown: Action.playDKey, keyup: Action.removeBackground },
  j: { keydown: Action.playEKey, keyup: Action.removeBackground },
  k: { keydown: Action.playFKey, keyup: Action.removeBackground },
  l: { keydown: Action.playGKey, keyup: Action.removeBackground },
  w: { keydown: Action.playASharpKey, keyup: Action.removeBackground },
  e: { keydown: Action.playCSharpKey, keyup: Action.removeBackground },
  i: { keydown: Action.playDSharpKey, keyup: Action.removeBackground },
  o: { keydown: Action.playFSharpKey, keyup: Action.removeBackground },
};

/* Function for calling "keydown and keyup" ev types from the above object literal */

const keyHandlers = (ev) => {
  if (ev.repeat) return;
  if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
  keyAction[ev.key][ev.type]();
};

["keydown", "keyup"].forEach((evType) => {
  document.addEventListener(evType, keyHandlers);
});
