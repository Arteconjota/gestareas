let ul = document.getElementById("tareas");

function creatingTasks() {
    let li = document.createElement("li");
    li.innerText = prompt("Escribe la tarea");
    if (li.innerText != "") {
        ul.appendChild(li);
    } else {
        alert("Debes escribir una tarea.")
    }
}

function changeDisplay() {
    ul.style.display = "flex";
}