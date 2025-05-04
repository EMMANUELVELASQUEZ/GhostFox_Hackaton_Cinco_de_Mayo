
def recomendar_productos(pregunta):
    pregunta = pregunta.lower()
    if "camiseta" in pregunta:
        return ["Camiseta NFT edición especial", "Camiseta con logo Ethereum Veracruz", "Camiseta Glow Crypto"]
    elif "wallet" in pregunta or "llave" in pregunta:
        return ["Wallet segura Astar", "Wallet Ethereum Soenium", "Wallet multicadena PRO"]
    elif "envío" in pregunta:
        return ["Envíos express", "Envíos internacionales", "Entrega local gratis"]
    else:
        return ["Producto no encontrado, prueba otra palabra clave"]

# Simula una pregunta
print(recomendar_productos("¿Tienen camisetas?"))
