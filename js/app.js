// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


registrarrEventListeners();
function registrarrEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

}


// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }

}

function leerDatosCurso(curso) {

    // Crear un objeto con el contenido del curso actual
    console.log(curso.querySelector('img'));
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {


    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img scr="${curso.imagen}" with="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}" > X </a></td>
        `;
        contenedorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}