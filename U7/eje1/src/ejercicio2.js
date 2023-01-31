let tarea = document.getElementById("tarea");
let lista = document.getElementById("tareas");
let l = localStorage

function añadir() {
  let taskCont = l.length;
  l.setItem(taskCont, tarea.value);
  window.location.reload();
}

for (let i = 0; i < l.length; i++) {
  const element = l.key(i);
  let li = document.createElement("li");
  li.innerHTML = l.getItem(element);
  lista.appendChild(li);
}

window.añadir = añadir;