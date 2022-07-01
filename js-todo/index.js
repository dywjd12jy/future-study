// var a = addElement();
// // onload; // null
// // document.body.onload = addElement();
// // console.log(a);

function addElement() {
  let newLi = document.createElement("li");
  let newText = document.createTextNode("밑에 추가하기");
  newLi.appendChild(newText);

  let currentUl = document.getElementById("ul");
  currentUl.appendChild(newLi);
  // document.body.insertBefore(newLi, currentUl);
  return 1 + 1;
}

// function add(a, b) {
//   return a + b;
// }

// var a = add;
// var b = add(1,2);

// a,function add(a,b){
//     return a + b;
// }
// b3
// function A() {
//   1 + 1;
// }
// let B = A();
// console.log(B);

///////////////////////////////

let currentUl = document.getElementById("ul");
const input = document.querySelector(".input");
// input.addEventListener("onkeyup", () => {})
input.onkeyup = (e) => {
  if (e.keyCode === 13) {
    addBtn();
  }
};
// const inputEnter = input.onkeyup

function addBtn() {
  const makeLi = document.createElement("li"); //li 생성
  const makeInput = document.createElement("input"); //input 생성
  const makeP = document.createElement("p"); //p 생성
  const makeBtn = document.createElement("button"); //button 생성
  const makeBtnText = document.createTextNode("삭 제"); //button text 생성
  makeLi.appendChild(makeInput); //li > input
  makeLi.appendChild(makeP); //li > p
  makeLi.appendChild(makeBtn);
  makeBtn.appendChild(makeBtnText);

  function btnClick(event) {
    console.log("123");
    const removeTarget = event.target.parentElement;
    removeTarget.remove();
  }

  makeBtn.onclick = btnClick;

  // btnClick();
  const a = 1; // btnClick();

  // makeBtn.onclick = "btnClick()";
  // makeBtn.onclick = null;

  // makeBtn.onclick();

  // 이거랑
  // makeInput.setAttribute("type", "checkbox");
  makeInput.type = "checkbox";
  const inputValue = input.value; //인풋 값 가져오기
  const inputValueText = document.createTextNode(inputValue); //인풋 값 텍스트노드로 전환
  makeP.appendChild(inputValueText); //만들어낸 li태그.의 자식요소로.가져온 인풋값

  // const makeLi = {
  //   childrens: [inputValueText],
  //   appendChild: (inputValueText) => {
  //     makeLi.childrens.push(inputValueText);
  //     return inputValueText;
  //   },
  // };
  if (inputValue === "") {
    alert("텍스트를 입력하세요");
  } else {
    currentUl.appendChild(makeLi);
    input.value = null;
  }
  if (makeInput.checked) {
  }
}

// function a() {
//   return 1;
// }

// const r = a();
// // const r = 1;

// // const valueLi = makeLi.appendChild(inputValueText);
// // const valueLi = makeLi.appendChild() 의 리턴 값이 대입된다. makeLi > inputValueText

// // Object = 객체
// const obj = {
//   name: "총명",
//   changeName: (변경할이름) => {
//     return 변경할이름;
//   },
// }; // 변수 obj 에 객체를 대입해준다.

// // 주소 적을때
// // 북구 운암동 ~
// // 광주광역시 북구 운암동
// // 광주광역시.북구.운암동

// const obj2 = {
//   // key 는 : 이전이 키 : 이후가 값
//   name: "총명",
//   // 함수도, 배열도 다 넣을수 있다.
//   changeName: (변경할이름) => {
//     obj2.name = 변경할이름;
//     return 변경할이름;
//   },
// };

// const name = obj2.name; // obj2의 name 값이 변수 name 에 대입된다.

// function changeName(변경할이름) {
//   return 변경할이름;
// }

// const name3 = changeName("정요");
// // name3 의 값은 ? -> 정요

// //
// const name2 = obj2.changeName("정요");
// // name2의 대입된 값은 ? -> 정요
// // img/apple.png;
// // const name4 = obj2.name;
