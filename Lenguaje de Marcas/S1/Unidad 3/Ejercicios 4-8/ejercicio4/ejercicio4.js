const euro_a_DOLAR = 1.10;
const euro_a_LIBRA = 0.85;

document.getElementById("convertir").addEventListener("click", function () {

    // Accedemos al valor del input
    const cantidadEuros = document.getElementById("euros").value;

    if (cantidadEuros === "" || cantidadEuros < 0) {
        alert("Por favor, introduce una cantidad válida en euros.");
        return;
    }

    let dolares = cantidadEuros * euro_a_DOLAR;
    let libras = cantidadEuros * euro_a_LIBRA;

    document.getElementById("resultadoDolares").textContent =
        `${cantidadEuros} € equivalen a ${dolares.toFixed(2)} dólares`;

    document.getElementById("resultadoLibras").textContent =
        `${cantidadEuros} € equivalen a ${libras.toFixed(2)} libras`;
});