let tarea = document.getElementById("tarea");
// let lista = document.getElementById("tareas");

function añadir() {
    // let tareas = localStorage.getItem("tarea");
    let l = localStorage
    let valor = l.getItem("tarea")
    let array = [valor];
    console.log(valor)
    array.push(tarea.value);
    let a = JSON.stringify(array);
    console.log(a);

    

      l.setItem("tarea",tarea.value);
    // l.setItem("tareas", JSON.stringify(array));
    // let tareas = JSON.parse(l.getItem("tareas"));
    // tareas.push(tarea.value);
    // l.setItem("tareas", JSON.stringify(tareas));

    // console.log(tareas[0]);
    // let li = document.createElement("li");
    // li.innerHTML = l.tarea;
    // lista.appendChild(li);
    // console.log(l);
}

window.añadir = añadir;