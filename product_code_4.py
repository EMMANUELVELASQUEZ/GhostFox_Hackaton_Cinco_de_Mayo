
def calcular_envio(pais, total_compra):
    if pais.lower() == "méxico" and total_compra > 100:
        return "¡Envío gratis a todo México!"
    else:
        return "Costo de envío: 8 USDT"

print(calcular_envio("México", 120))
