
def buscar_producto(keyword):
    productos = ["camiseta", "gorra", "wallet", "sticker", "token", "llave"]
    return [p for p in productos if keyword.lower() in p]

print(buscar_producto("wal"))
