// Tasas de conversión
const TASAS = {
    dolar: 1.10,
    libra: 0.85,
    yen: 130
};
document.getElementById("convertir").addEventListener("click", function () {

    const eurosInput = document.getElementById("euros").value;
    const monedaSeleccionada = document.getElementById("moneda").value;
    const aplicarDescuento = document.getElementById("descuento").checked;
    if (eurosInput === "" || eurosInput < 0) {
        alert("Introduce una cantidad válida en euros.");
        return;
    }
    let cantidad = parseFloat(eurosInput);
    // Aplicar descuento si corresponde
    if (aplicarDescuento) {
        cantidad = cantidad * 0.90;  // 10% de descuento
    }
    // Realizar conversión según moneda elegida
    const tasa = TASAS[monedaSeleccionada];
    const resultado = cantidad * tasa;
    document.getElementById("resultado").textContent =
        `Resultado: ${resultado.toFixed(2)} ${monedaSeleccionada}`;
});
