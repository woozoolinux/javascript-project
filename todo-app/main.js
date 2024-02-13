
// 유저가 값을 입력한다
// + 버튼을 클릭하면 할 일이 추가된다
// delete 버튼을 누르면 할 일이 삭제된다
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 간다
// 진행 중 끝남 탭을 누르면 언더바가 이동한다
// 끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let inputArea = document.getElementById("input-text");
let buttonArea = document.getElementById("button-area");
let taskList = [];  // 할 일을 담을 배열 생성

buttonArea.addEventListener("click", addTask);

function addTask(){
    taskList.push(inputArea.value)
    console.log(taskList)
    render();
}

function render(){
    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++){
        resultHTML += `<div class="tasks">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
        
    }

    document.getElementById("task-board").innerHTML = resultHTML; 
}