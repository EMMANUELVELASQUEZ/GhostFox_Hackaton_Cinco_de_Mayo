
function recomendarProductos(pregunta) {
    pregunta = pregunta.toLowerCase();
    if (pregunta.includes("camiseta")) {
        return ["Camiseta NFT edición especial", "Camiseta con logo Ethereum Veracruz", "Camiseta Glow Crypto"];
    } else if (pregunta.includes("wallet") || pregunta.includes("llave")) {
        return ["Wallet segura Astar", "Wallet Ethereum Soenium", "Wallet multicadena PRO"];
    } else if (pregunta.includes("envío")) {
        return ["Envíos express", "Envíos internacionales", "Entrega local gratis"];
    } else {
        return ["Producto no encontrado, prueba otra palabra clave"];
    }
}

// Ejemplo de uso
console.log(recomendarProductos("¿Tienen camisetas?"));
