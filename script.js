
function addtask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    //empty task handling
    if(!taskInput.value){
        return alert {""}
    }

    //create the new list item in todo list
    var list = document.createElement("list");
    list.textContent = taskInput.value;

    

    //Now create the REMOVE button in todo list
    var remove.button = document.createElement("button");
    removebutton.textContent = "REMOVE";
    removebutton.className = "remove-btn";
    removebutton.oneclick = function () {
        taskList.removeChild(list);
    }


}
