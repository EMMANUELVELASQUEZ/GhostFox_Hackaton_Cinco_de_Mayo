
productos = [
    {"nombre": "Camiseta NFT", "precio": 30, "token": "USDT"},
    {"nombre": "Wallet personalizada", "precio": 120, "token": "ETH"},
    {"nombre": "Stickers edición especial", "precio": 10, "token": "USDC"}
]

def mostrar_productos():
    return [f"{p['nombre']} - {p['precio']} {p['token']}" for p in productos]

print(mostrar_productos())
