
const productos = [
    { nombre: "Camiseta NFT", precio: 30, token: "USDT" },
    { nombre: "Wallet personalizada", precio: 120, token: "ETH" },
    { nombre: "Stickers edición especial", precio: 10, token: "USDC" }
];

function mostrarProductos() {
    return productos.map(producto => `${producto.nombre} - ${producto.precio} ${producto.token}`).join('\n');
}

console.log(mostrarProductos());
