
function addtask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    //create the new list item in todo list
    var list = document.createElement("list");
    list.textContent = taskInput.value;

    /*handling empty task*/
    if(!taskInput.value){
        return alert("you can make an empty list (SORRY)");
    }
    //Now create the REMOVE button in todo list
    var removebutton = document.createElement("button");
    removebutton.textContent = "REMOVE";
    removebutton.className = "remove-btn";
    removebutton.onclick = function () {
        taskList.removeChild(list);
    };

    //adding click event to mark as completed
    list.oneclick = function () {
        list.classList.toggle("compeleted");
    };

    // Append the remove button to the list item
    list.appendChild(removebutton);

    //Apend the list item to the task list
    taskList.appendChild(list);

    //clearing the input field
    taskInput.value = '';
};
