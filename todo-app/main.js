
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
    let task = {
        id: generateRandomId(),
        taskContent: inputArea.value,
        isComplete: false
    }
    taskList.push(task)
    console.log(taskList)
    render();
}

function render(){

    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].isComplete == true){
            resultHTML += `<div class="tasks">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="taskDelete('${taskList[i].id}')">Delete</button>
        </div>
    </div>`;
        } else {
        resultHTML += `<div class="tasks">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button onclick="taskDelete('${taskList[i].id}')">Delete</button>
        </div>
    </div>`;
    }
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            render();
            break;
        }
    }
}

function taskDelete(id){
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList.splice(i, 1);
            render();
            break;
        }
    }
}

function generateRandomId(prefix = 'task') {
    // 현재 시간과 랜덤 값을 기반으로 ID 생성
    return `${prefix}_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
}