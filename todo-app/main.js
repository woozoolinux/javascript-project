
// 유저가 값을 입력한다
// + 버튼을 클릭하면 할 일이 추가된다
// delete 버튼을 누르면 할 일이 삭제된다
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 간다
// 진행 중 끝남 탭을 누르면 언더바가 이동한다
// 끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let inputArea = document.getElementById("input-text");
let buttonArea = document.getElementById("button-area");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];  // 할 일을 담을 배열 생성
let filterList = [];
let mode;

inputArea.addEventListener("focus", function(){ this.value = ""})
buttonArea.addEventListener("click", addTask);

console.log(tabs)

for (let i=1;i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event) {
        filter(event);
    });
}

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
    console.log("current mode", mode)
    list = taskList;
    if (mode == "all") {
        list = taskList;
    } else if (mode == "ongoing" || mode == "done") {
        list = filterList;
    }

    let resultHTML = '';

    for (let i = 0; i < list.length; i++){
        if (list[i].isComplete == true){
            resultHTML += `<div class="tasks">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="taskDelete('${list[i].id}')">Delete</button>
        </div>
    </div>`;
        } else {
        resultHTML += `<div class="tasks">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="taskDelete('${list[i].id}')">Delete</button>
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
            secondFIlter();
            break;
        }
    }
}

function taskDelete(id){
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList.splice(i, 1);
            secondFIlter();
            break;
        }
    }
}


function filter(event){

    mode = event.target.id;

    var underline = document.getElementById('under-line'); // under-line 요소 가져오기

    // 모드에 따라 under-line의 색상 변경
    if (mode == "all") {
        underline.style.left = '0px'; // 전체 탭의 밑줄 CSS
    } else if (mode == "ongoing") {
        underline.style.left = '70px'; // 진행 중 탭의 밑줄 CSS
    } else if (mode == "done") {
        underline.style.left = '140px'; // 끝남 탭의 밑줄 CSS
    }
    
    if (mode == "all") {
        render();
    } else if(mode == "ongoing") {
        filterList = [];
        for (let i = 0; i < taskList.length; i++){
            if (taskList[i].isComplete == false){
                filterList.push(taskList[i])
            }
            
        }
        render();
    } else if (mode == "done"){
        filterList = [];
        for (let i = 0; i < taskList.length; i++){
            if (taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
            
         } 
         render();
    }

}

function generateRandomId(prefix = 'task') {
    // 현재 시간과 랜덤 값을 기반으로 ID 생성
    return `${prefix}_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
}

function secondFIlter(){

    if (mode == "all") {
        render();
    } else if(mode == "ongoing") {
        filterList = [];
        for (let i = 0; i < taskList.length; i++){
            if (taskList[i].isComplete == false){
                filterList.push(taskList[i])
            }
            
        }
        render();
    } else if (mode == "done"){
        filterList = [];
        for (let i = 0; i < taskList.length; i++){
            if (taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
            
         } 
         render();
    }

}