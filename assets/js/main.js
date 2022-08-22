const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');

const listadoTareas = document.querySelector('.listado-tareas');
// PARA GUARDARLO
const local = (Window.localStorage);

btnAgregarTarea.onclick= () => {

    let Contacto = {

        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(local, contacto);
}
cargarContactos(local, listadoTareas);