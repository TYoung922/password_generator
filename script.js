// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let symbols = [
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "_",
//   "+",
//   ";",
//   "~",
//   "?",
//   ",",
//   ".",
//   "/",
//   ":",
// ];
// let alphaLower = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let alphaUpper = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

let alphaLower = "abcdefghijklmnopqrstuvwxyz";
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+{}:;~?,./";

function generatePass() {
  let length = parseInt(document.querySelector("#length").value, 10);
  let password = "";
  let charSet = "";
  charSet += alphaLower;
  if (document.getElementById("uppercase").checked) {
    charSet += alphaUpper;
  }
  if (document.getElementById("numbers").checked) {
    charSet += numbers;
  }
  if (document.getElementById("symbols").checked) {
    charSet += symbols;
  }
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  document.querySelector("#password").value = password;
}
