
def calcular_pago(producto, cantidad, precio_usdt):
    total_usdt = precio_usdt * cantidad
    tasa_eth = 3500  # Simulado
    total_eth = total_usdt / tasa_eth
    return f"Total a pagar: {total_usdt:.2f} USDT | {total_eth:.5f} ETH"

print(calcular_pago("Camiseta NFT", 2, 30))
