
function buscarProducto(keyword) {
    const productos = ["camiseta", "gorra", "wallet", "sticker", "token", "llave"];
    return productos.filter(p => p.toLowerCase().includes(keyword.toLowerCase()));
}

console.log(buscarProducto("wal"));
