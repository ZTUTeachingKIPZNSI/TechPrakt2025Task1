let TaskName = document.getElementById("createTask");
var i=0;
TaskName.addEventListener("click", () => {
    let TaskValue = document.getElementById("TaskValue").value;  
    let newTask = document.createElement("li"); 
    let numberTask = `Завдання ${i}: `;
    newTask.textContent = numberTask + TaskValue; 

    document.getElementById("TaskList").appendChild(newTask);
    i++; 
    document.getElementById("TaskValue").value = "";
});
