// 이 게임은 1~100사의의 숫자를 맞추는 게임이다.
// 1~100 사이의 숫자를 컴퓨터가 생성해 computerNum 변수에 담는다.
// 유저는 input 박스에 1~100까지의 숫자를 입력하고 GO 버튼을 클릭한다.
// 버튼을 클릭하면 숫자를 비교하는 함수가 실행된다.
// 유저 입력 값이 computerNum 보다 작으면 UP!!을 출력한다.
// 유저 입력 값이 computerNum 보다 크면 Down!!을 출력한다.
// 유저의 입력 기회는 7번으로 제한한다.
// 7번이 넘어가면 Go button이 비활성화 된다.
// reset 이라는 버튼이 있는데 이 버튼을 누르면 기회가 초기화되고 computerNum도 초기화 된다.
// 즉 게임을 다시 플레이 할 수 있게된다.
// 또한 유저가 정답을 맞춰도 GO buttion이 비활성화 된다.

let computerNum;

function randomNumGen() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}

randomNumGen();
console.log("정답:", computerNum);


let numArea = document.getElementById("input-number");
let buttonArea = document.getElementById("button-area");
let resetArea = document.getElementById("reset-area");
let resultArea = document.getElementById("result-area");
let imageArea = document.getElementById("feedback-image");
let count = 7;
let history = [];

buttonArea.addEventListener("click", play);
resetArea.addEventListener("click", reset);
numArea.addEventListener("focus", function () {
  numArea.value = "";
});

function play() {

  if ( history.includes(numArea.value) ){
    resultArea.textContent = "이미 입력한 번호입니다!!";
    return;
  }

  
  count--;
  if (numArea.value > 100 || numArea.value < 1) {
    resultArea.textContent = "1~100사이의 숫자만 입력 가능합니다.";
    return;
  }
  if (computerNum > numArea.value) {
    resultArea.textContent = `${count} 번의 기회가 남았습니다.`;
    imageArea.src = "images/up.webp"
  } else if (computerNum < numArea.value) {
    resultArea.textContent = `${count} 번의 기회가 남았습니다.`;
    imageArea.src = "images/down.webp"
  } else {
    resultArea.textContent = "정답입니다!!";
    imageArea.src = "images/congratulations.webp"
    gameEnd();
  }

  history.push(numArea.value)

  if (count < 1) {
    gameEnd();
    resultArea.textContent = "7번 모두 실패하였습니다.";
    imageArea.src = "images/fail.webp"
    return;
  }
}

function gameEnd() {
  buttonArea.disabled = true;
  count = 7;
}

function reset() {
  buttonArea.disabled = false;
  count = 7;
  randomNumGen();
  console.log("정답:", computerNum);
  imageArea.src = "images/main.webp"
  resultArea.textContent = ""
  numArea.value = "";
  resultArea.textContent = "도전 시작!";
  history = [];
}
