var a = addElement();
// onload; // null
// document.body.onload = addElement();
console.log(a);

function addElement() {
  let newDiv = document.createElement("div");
  let newCont = document.createTextNode("밑에 추가하기");
  newDiv.appendChild(newCont);

  let currnetP = document.getElementById("p");
  document.body.insertBefore(newDiv, currnetP);
  return 1 + 1;
}

function add(a, b) {
  return a + b;
}

// var a = add;
// var b = add(1,2);

// a,function add(a,b){
//     return a + b;
// }
// b3
function A() {
  1 + 1;
}
let B = A();
console.log(B);
