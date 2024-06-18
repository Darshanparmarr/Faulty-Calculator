let random = Math.random();
console.log(random);

let a = prompt('Enter 1st Number : ');
let b = prompt('Enter 2nd Number : ');
let c = prompt('Enter Operation to Performed ');

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
}

if (random>0.1){
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
  c=obj[c]
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}