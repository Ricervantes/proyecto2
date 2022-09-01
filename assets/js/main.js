const nombreInput = document.getElementById("nombreInput");
const numeroInput = document.getElementById("numeroInput");
const direccionInput = document.getElementById("direccionInput");
let contactos = localStorage.getItem("contactos") ? JSON.parse(localStorage.getItem("contactos")) : [];
const Local = window.localStorage;
let editando = false;
let contactoPrevio = {};

const listadoContactos = document.getElementById('listado-contactos');
// PARA GUARDARLO
function agregarContacto() {
    if (editando) {
        contactos = contactos.map((contacto) => {
            if (contacto.nombre === contactoPrevio.nombre) {
                contacto.nombre = nombreInput.value;
                contacto.telefono = numeroInput.value;
                contacto.direccion = direccionInput.value;
            }
            return contacto;
        });
        localStorage.setItem("contactos", JSON.stringify(contactos));
        nombreInput.value = "";
        numeroInput.value = "";
        direccionInput.value = "";
        actualizarLista();
        editando = false;
    } else {
        const nuevoContacto = new Contacto(nombreInput.value, numeroInput.value, direccionInput.value);
        contactos.push(nuevoContacto);
        localStorage.setItem("contactos", JSON.stringify(contactos));
        nombreInput.value = "";
        numeroInput.value = "";
        direccionInput.value = "";
        actualizarLista();
    }
    console.log(contactos);

}


function actualizarLista() {
    listadoContactos.innerHTML = "";
    console.log(contactos);
    contactos.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = "Nombre: " + contacto.nombre;
        const telefono = document.createElement("p");
        telefono.textContent = "telefono: " + contacto.telefono;
        li.appendChild(telefono);
        const direccion = document.createElement("p");
        direccion.textContent = "Direccion: " + contacto.direccion;
        li.appendChild(direccion);
        li.classList.add("list-group-item");
        const btnEliminar = document.createElement("btnEliminar");

        const iconoBasura = document.createElement("i");
        iconoBasura.classList.add("fa", "fa-trash");
        btnEliminar.appendChild(iconoBasura);

        btnEliminar.classList.add("btn", "btn-danger", "float-inherit", "mr-2" );
        btnEliminar.addEventListener("click", () => deleteIndividual(contacto.nombre));
        li.appendChild(btnEliminar);

        const btnedit = document.createElement("button");
        btnedit.classList.add("btn", "btn-warning", "float-inherit", "mr-2");

        const iconoEdit = document.createElement("i");
        iconoEdit.classList.add("fa", "fa-edit");
        btnedit.appendChild(iconoEdit);

        btnedit.addEventListener("click", () => editar(contacto.nombre, contacto.telefono, contacto.direccion));
        li.appendChild(btnedit);

        listadoContactos.appendChild(li);
    });
}

function deleteIndividual(nombre) {
    contactos = contactos.filter(contacto => contacto.nombre !== nombre);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    actualizarLista();
}

function limpiarStorage() {
    localStorage.clear();
    contactos = [];
    actualizarLista();
}

function editar(nombre, telefono, direccion) {
    editando = true;
    contactoPrevio.nombre = nombre;
    nombreInput.value = nombre;
    numeroInput.value = telefono;
    direccionInput.value = direccion;
}


(() => {
    actualizarLista();
})();