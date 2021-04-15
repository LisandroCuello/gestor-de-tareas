document.getElementById('formulario').addEventListener('submit', guardarTarea);

function guardarTarea(e){
	
	let titulo = document.getElementById('titulo').value;
	let descripcion = document.getElementById('descripcion').value;

	const tarea = {
		titulo,
		descripcion
	};

	if (localStorage.getItem('tareas') === null) {
		let tareas = [];
		tareas.push(tarea);
		localStorage.setItem('tareas', JSON.stringify(tareas));
	} else {
		let tareas = JSON.parse(localStorage.getItem('tareas'));
		tareas.push(tarea);
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}
	
	obtenerTareas();
	document.getElementById('formulario').reset();
	e.preventDefault();
}

function obtenerTareas(){
	let tareas = JSON.parse(localStorage.getItem('tareas'));
	let vista = document.getElementById('tarea');

	vista.innerHTML = '';

	for(let i = 0; i < tareas.length; i++){
		let titulo = tareas[i].titulo;
		let descripcion = tareas[i].descripcion;

		vista.innerHTML += `<div class="card mb-2">
			<div class="card-body">
				<p>${titulo} - ${descripcion}</p>
				<a class="btn btn-outline-danger" onclick="eliminarTarea('${titulo}')">
				Eliminar
				</a>
			</div>
		</div>`
	}
}

function eliminarTarea(titulo){
 let tareas = JSON.parse(localStorage.getItem('tareas'));

 for(let i = 0; i < tareas.length; i++){
 	if(tareas[i].titulo == titulo){
 		tareas.splice(i, 1);
 	}
 }
 localStorage.setItem("tareas", JSON.stringify(tareas));
 obtenerTareas();
}

obtenerTareas();