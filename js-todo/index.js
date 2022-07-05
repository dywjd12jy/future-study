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

let currentUl = document.getElementById("ul");
const input = document.querySelector(".input");
// input.addEventListener("onkeyup", () => {})
input.onkeyup = (e) => {
  if (e.keyCode === 13) {
    addBtn();
  }
};

function addBtn() {
  const makeLi = document.createElement("li"); //li 생성
  const makeP = document.createElement("p"); //p 생성
  const makeBtn = document.createElement("button"); //button 생성
  const makeBtnText = document.createTextNode("삭 제"); //button text 생성
  //
  const inputValue = input.value; //인풋 값 가져오기
  const inputValueText = document.createTextNode(inputValue); //인풋 값 텍스트노드로 전환
  //
  makeLi.appendChild(makeP); //li > p
  makeLi.appendChild(makeBtn);
  makeBtn.appendChild(makeBtnText);

  function btnClick(event) {
    const removeTarget = event.target.parentElement;
    removeTarget.remove();
  }
  makeBtn.onclick = btnClick;

  makeP.appendChild(inputValueText); //만들어낸 li태그.의 자식요소로.가져온 인풋값

  if (inputValue === "") {
    alert("텍스트를 입력하세요");
  } else {
    currentUl.appendChild(makeLi);
    input.value = null;
  }
  // if (makeInput.checked) {
  // }
}

// checkbox todo
// const checkBox = document.getElementById("checkBox");// input checkbox
// makeInput2.classList.add("checkBox");

// const checkList = document.getElementById("checkList"); //ul
// const checkOn = document.getElementById("checkOn");
// if (checkOn.checked === true) {
//   alert("체크");
// }
// console.log(checkOn.value);

function addBtn2() {
  const makeCheck = document.createElement("input");
  function todolistfunc() {
    makeCheck.type = "checkbox";
    makeCheck.name = "check";
  }
  // 1번쨰 방법
  const inputValue2 = document.getElementById("inputValue2"); //input text
  const BB = inputValue2.value;
  const AA = document.createTextNode(BB);

  todolistfunc();
  //
  // todo-list 에 들어갈 태그 추가
  const makeLi2 = document.createElement("li");
  const makeP2 = document.createElement("p");
  makeP2.appendChild(AA);
  makeLi2.appendChild(makeCheck);
  makeLi2.appendChild(makeP2);
  checkList.appendChild(makeLi2);
  inputValue2.value = null;
  makeCheck.classList.add("aaaa");
}

// allClick.addEventListener(`click`, function () {
//   aaaa.checked = true;
// });
const checkName = document.getElementsByName("check"); // 배열
const ABtn = document.getElementById("ABtn");

function allBtnInput() {
  if (ABtn.checked) {
    for (i = 0; i < checkName.length; i++) {
      checkName[i].checked = true;
      console.log("체크!!돼돼돼돼돼돼도대");
    }
  } else {
    for (i = 0; i < checkName.length; i++) {
      checkName[i].checked = false;
      console.log("체크지워져지워져");
    }
  }
}
function allBtn() {
  if (!checkName.checked) {
    for (i = 0; i < checkName.length; i++) {
      checkName[i].checked = false;
    }
  } else {
    for (i = 0; i < checkName.length; i++) {
      checkName[i].checked = true;
      console.log("체크!!돼돼돼돼돼돼도대");
    }
  }
}

function allBtn() {
  console.log("akdsj;j;af");
  // checkName[0].checked = true;
  checkName.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
