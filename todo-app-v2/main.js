

let inputArea = document.getElementById("task-input");
let addArea = document.getElementById("add-button");
let checkArea = document.getElementById("check-button");
let allArea = document.getElementById("all");
let ongoingArea = document.getElementById("ongoing");
let doneArea = document.getElementById("done");
let underline = document.getElementById('under-line'); 
let taskList = [];
let filterList = [];
let mode = all;
addArea.addEventListener("click", addTask);
allArea.addEventListener("click", render);
allArea.addEventListener("click", allTask);
ongoingArea.addEventListener("click", ongoingTask);
doneArea.addEventListener("click", doneTask);
inputArea.addEventListener("focus", function() {
    this.value = "";
})


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
    list = taskList;
    if (mode == "ongoing" || mode == "done"){
        list = filterList;
    }

    for (let i = 0; i < list.length; i++){
        if ( list[i].isComplete == false){
            resultHTML += `<div class="task-container">
            <div class="task-decorate">${list[i].taskContent}</div>
            <div>
                <button class="check-button" onclick="checkTask('${list[i].id}')">Check</button>
                <button class="delete-button" onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task-container">
            <div class="task-decorate real-task">${list[i].taskContent}</div>
            <div>
                <button class="check-button" onclick="checkTask('${list[i].id}')">Check</button>
                <button class="delete-button" onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;           
        }

        
    }

    document.querySelector(".task-tab").innerHTML = resultHTML; 
}

function generateRandomId(prefix = 'id') {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
}

function checkTask(id){
        for (let i=0; i < taskList.length; i++){
            if (id === taskList[i].id){
                taskList[i].isComplete = !taskList[i].isComplete;
                console.log(taskList[i].isComplete)
                if(mode == "ongoing"){
                    ongoingTask();
                } else if (mode == "done"){
                    doneTask();
                } else {
                    render();
                }
                break;
            }
        }
}

function deleteTask(id){
    for (let i=0; i < taskList.length; i++){
        if (id === taskList[i].id){
            taskList.splice(i,1);
            if(mode == "ongoing"){
                ongoingTask();
            } else if (mode == "done"){
                doneTask();
            } else {
                render();
            }
            break;
        }
    }
}

function allTask(){
    underline.style.left = '0px';
    mode = "all"
    render();
}

function ongoingTask(){
    underline.style.left = '70px';
    filterList = [];
    for (let i=0; i < taskList.length; i++){
        if (taskList[i].isComplete == false){
            filterList.push(taskList[i]);           
        }
    }
    mode = "ongoing"
    render();
}

function doneTask(){
    underline.style.left = '140px';
    filterList = [];
    for (let i=0; i < taskList.length; i++){
        if (taskList[i].isComplete == true){
            filterList.push(taskList[i]);           
        }
    }
    mode = "done"
    render();
}