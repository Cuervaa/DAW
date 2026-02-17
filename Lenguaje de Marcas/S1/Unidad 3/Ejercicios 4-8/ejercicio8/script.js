function crearLista(datos) {
    const tabla = document.getElementById("tablaUsuarios").getElementsByTagName('tbody')[0];
    datos.forEach(usuario => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = usuario.id;
        fila.insertCell(1).innerText = usuario.name.split(" ")[0];
        fila.insertCell(2).innerText = usuario.name.split(" ")[1] || '';
        fila.insertCell(3).innerText = usuario.email;
    });
}
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => crearLista(datos))
    .catch(error => console.error("Error al cargar los datos:", error));