// Obtener los botones por su id
const texto = document.getElementById('texto');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');

// Agregar event listeners a cada botón
function limpiarEstilos() {
    texto.classList.remove('estilo1', 'estilo2', 'estilo3');
}
boton1.addEventListener('click', () => {
    limpiarEstilos();
    texto.classList.add('estilo1');
});

boton2.addEventListener('click', () => {
    limpiarEstilos();
    texto.classList.add('estilo2');
});

boton3.addEventListener('click', () => {
    limpiarEstilos();
    texto.classList.add('estilo3');
});

boton4.addEventListener('click', limpiarEstilos);