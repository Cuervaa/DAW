function agregarLinea() {
    const lista = document.getElementById("lista");

    const nuevaLinea = document.createElement("li");

    // Contenido por defecto
    nuevaLinea.textContent = "Nueva línea";

    // Insertarlo en la ul
    lista.appendChild(nuevaLinea);
}

function eliminarLinea() {
    const lista = document.getElementById("lista");

    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    } else {
        alert("No hay líneas que eliminar.");
    }
}

function modificarLinea() {
    const lista = document.getElementById("lista");

    // Si no hay elementos
    if (!lista.firstElementChild) {
        alert("No hay líneas que modificar.");
        return;
    }

    // Pedimos el número de línea al usuario
    const numero = parseInt(prompt("¿Qué línea quieres modificar? (1, 2, 3, ...)"));

    if (isNaN(numero) || numero <= 0 || numero > lista.children.length) {
        alert("Número no válido.");
        return;
    }

    // Obtener el nuevo texto
    const nuevoTexto = prompt("Introduce el nuevo texto:");

    if (nuevoTexto === null || nuevoTexto.trim() === "") {
        alert("Texto no válido.");
        return;
    }
    lista.children[numero - 1].textContent = nuevoTexto;
}