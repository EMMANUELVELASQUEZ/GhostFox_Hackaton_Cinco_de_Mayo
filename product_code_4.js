
function calcularEnvio(pais, totalCompra) {
    if (pais.toLowerCase() === "méxico" && totalCompra > 100) {
        return "¡Envío gratis a todo México!";
    } else {
        return "Costo de envío: 8 USDT";
    }
}

console.log(calcularEnvio("México", 120));
