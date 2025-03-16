function agregarItem() {
    //Ubico el nodo del div con id 'listaTareas':
    let listaTareas = document.getElementById("listaTareas");
    console.log("Elemento listaTareas: ", listaTareas);

    //Genero un div donde se incluirá el texto con la nueva tarea:
    let div = document.createElement("div");
    let textoTarea = prompt("Añade el texto de la tarea");
    //Comprobación duplicidad:
    let counter = 1;
    if  (counter != 0) {
        let elementoMensaje = document.getElementById("mensaje");
        let textoMensaje = document.createElement("p");
    //Comprobación de errores:
    if(textoTarea === "" || textoTarea.length === 0) {
        elementoMensaje.style.display = "flex";

        let mensaje = "¡El nombre de la tarea no puede estar vacío!"
        textoMensaje.textContent = mensaje;

        elementoMensaje.appendChild(textoMensaje);
        counter = 0;
    }
    else {
        div.textContent = textoTarea;
        div.className = "tarea";
        console.log("Nuevo elemento div: ", div);
        
        //Genero un div donde se contendrán los botones:
        let divBotones = document.createElement("div");
        divBotones.className = "botones";
    
        //Creamos un botón dentro de la tarea para eliminarla:
        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Eliminar tarea";
        buttonDelete.className = "delete";
        buttonDelete.onclick = function () {
        eliminarItem(this); //Se usa 'this' ya que elimina este mismo elemento.
        };
        //También creamos un botón dentro de la tarea para CHECK:
        let buttonCheck = document.createElement("button");
        buttonCheck.textContent = "Tarea hecha";
        buttonCheck.className = "check";
        buttonCheck.onclick = function () {
        tareaCheck(this); //Se usa 'this' ya que elimina este mismo elemento.
        };
    
        listaTareas.appendChild(div);
        div.appendChild(divBotones);
        divBotones.appendChild(buttonCheck);
        divBotones.appendChild(buttonDelete);
        }
    }
}

function eliminarItem(buttonDelete) {
    buttonDelete.parentNode.parentNode.remove();
};

function tareaCheck(buttonCheck) {
    buttonCheck.parentNode.parentNode.style.backgroundColor = "grey";
    buttonCheck.parentNode.parentNode.style.boxShadow = "0 0 5px black";
    buttonCheck.parentNode.parentNode.style.border = "solid 1px black";

}

let agregarTarea = document.getElementById("agregarTarea");
console.log(agregarTarea);
agregarTarea.onclick = function () {
    agregarItem()
};