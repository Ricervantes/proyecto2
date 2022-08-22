const guardarContacto = (local, contacto) => {
    local.setItem(contacto.id, JSON.stringify(contacto));
    //este es para recargar y refrescar la pagina.
    window.location.href = '/';
}
//funcion de cargar o guardar contactos

const cargarContactos = (local) => {
    let claves = Object.keys(local);
    for (clave of claves) {
        let contacto = JSON.parse(local.getItem(clave));
        crearContacto(parentNode, contacto, local);
    }
}
const crearContacto=(parentNode, contacto,local) =>{

    let divContacto= document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar= document.createElement('span');

nombreContacto.innerHTML= contacto.nombre;
numeroContacto.innerHTML= contacto.numero;
direccionContacto.innerHTML= contacto.direccion;
iconoBorrar.innerHTML='delete_forever';

divContacto.classList.add('tarea');
iconoBorrar.classList.add('material-symbols-outlined', 'icono');
iconoBorrar.onclick = ()=>{
    local.removetItem(contacto.id);
    window.localStorage.href='/';
}

divContacto.appendChild(nombreContacto);
divContacto.appendChild(numeroContacto);
divContacto.appendChild(direccionContacto);
divContacto.appendChild(iconoBorrar);

parentNode.appendChild(divContacto);



}