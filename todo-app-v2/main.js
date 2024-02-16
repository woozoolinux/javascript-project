

let inputArea = document.getElementById("task-input");
let addArea = document.getElementById("add-button");
let checkArea = document.getElementById("check-button");
let taskList = [];
addArea.addEventListener("click", addTask);


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
        if ( taskList[i].isComplete == false){
            resultHTML += `<div class="task-container">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="checkTask('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task-container">
            <div class="real-task">${taskList[i].taskContent}</div>
            <div>
                <button onclick="checkTask('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
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
                render();
                break;
            }
        }
}

function deleteTask(id){
    for (let i=0; i < taskList.length; i++){
        if (id === taskList[i].id){
            taskList.splice(i,1);
            render();
            break;
        }
    }

}