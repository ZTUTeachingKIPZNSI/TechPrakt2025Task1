let TaskName = document.getElementById("createTask");

TaskName.addEventListener("click", () => {
    let TaskValue = document.getElementById("TaskValue").value;  
    let newTask = document.createElement("li");
    newTask.textContent = TaskValue;  
    document.getElementById("TaskList").appendChild(newTask); 
});
