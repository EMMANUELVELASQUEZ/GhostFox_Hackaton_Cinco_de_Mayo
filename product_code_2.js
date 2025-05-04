
function calcularPago(producto, cantidad, precioUSDT) {
    const totalUSDT = precioUSDT * cantidad;
    const tasaETH = 3500;  // Simulada
    const totalETH = totalUSDT / tasaETH;
    return `Total a pagar: ${totalUSDT.toFixed(2)} USDT | ${totalETH.toFixed(5)} ETH`;
}

console.log(calcularPago("Camiseta NFT", 2, 30));
