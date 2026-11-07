from PIL import Image

input_path = r"C:\Users\andre\.gemini\antigravity-ide\brain\c8f7251b-9c0d-431d-954a-7f6034884a0d\.user_uploaded\media_1793638225570.jpg"
output_path = r"c:\Users\andre\OneDrive\Área de Trabalho\Site Humberto\static\images\logo.png"

img = Image.open(input_path).convert("RGBA")
pixels = img.load()
w, h = img.size

# O fundo do logo tem luminância baixa (em torno de 20 a 45).
# Elementos do logo (escudo metálico e textos) têm luminância mais alta (a partir de 60 até 255).
# Vamos calcular o canal alpha pixel a pixel com transição suave (anti-aliasing)

t0 = 42.0  # Abaixo de t0 é 100% transparente
t1 = 80.0  # Acima de t1 é 100% opaco

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
        
        if lum <= t0:
            pixels[x, y] = (r, g, b, 0)
        elif lum >= t1:
            pixels[x, y] = (r, g, b, 255)
        else:
            # Interpolação suave
            norm = (lum - t0) / (t1 - t0)
            # Smoothstep
            smooth = norm * norm * (3.0 - 2.0 * norm)
            alpha = int(smooth * 255)
            pixels[x, y] = (r, g, b, alpha)

# Cortar áreas transparentes desnecessárias ao redor (crop bounding box)
bbox = img.getbbox()
if bbox:
    pad = 12
    box = (max(0, bbox[0] - pad), max(0, bbox[1] - pad), min(w, bbox[2] + pad), min(h, bbox[3] + pad))
    img = img.crop(box)

img.save(output_path, "PNG")
print("Logo com fundo removido com sucesso!")
print(f"Salvo em: {output_path} (Tamanho: {img.size})")
