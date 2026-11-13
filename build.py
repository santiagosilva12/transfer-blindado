"""
Script de geração estática para publicação no Netlify / GitHub Pages.
Gera os arquivos HTML estáticos renderizados a partir do Flask e copia a pasta static.
"""
import os
import shutil
from app import app, CAPITAIS, FROTA, CATEGORIAS_TERRESTRES, SEO_CATEGORIAS
from flask import render_template

DIST_DIR = os.path.join(os.path.dirname(__file__), "dist")


def build_static_site():
    print("Iniciando geração estática do site Transfer Blindado...")

    if os.path.exists(DIST_DIR):
        shutil.rmtree(DIST_DIR)
    os.makedirs(DIST_DIR, exist_ok=True)

    # Copiar pasta static completa
    static_src = os.path.join(os.path.dirname(__file__), "static")
    static_dest = os.path.join(DIST_DIR, "static")
    shutil.copytree(static_src, static_dest)
    print("[OK] Pasta static copiada com sucesso.")

    # Copiar manifest.json e sw.js para a raiz do dist/ (suporte nativo PWA)
    for pwa_file in ("manifest.json", "sw.js"):
        src_pwa = os.path.join(static_src, pwa_file)
        if os.path.exists(src_pwa):
            shutil.copy2(src_pwa, os.path.join(DIST_DIR, pwa_file))
    print("[OK] Arquivos PWA (manifest.json e sw.js) copiados para a raiz de dist/.")

    # Renderizar index.html, reserva.html e cotacao.html dentro do contexto de suas rotas
    with app.test_request_context("/"):
        # 1. index.html
        rendered_index = render_template(
            "index.html",
            capitais=CAPITAIS,
            frotas=FROTA,
            categorias_terrestres=CATEGORIAS_TERRESTRES
        )
        with open(os.path.join(DIST_DIR, "index.html"), "w", encoding="utf-8") as f:
            f.write(rendered_index)
        print("[OK] index.html renderizado em dist/index.html")

    with app.test_request_context("/reserva"):
        # 2. reserva.html
        rendered_reserva = render_template(
            "reserva.html",
            servico_pre="",
            cidade_pre="",
            capitais=CAPITAIS
        )
        with open(os.path.join(DIST_DIR, "reserva.html"), "w", encoding="utf-8") as f:
            f.write(rendered_reserva)
        print("[OK] reserva.html renderizado em dist/reserva.html")

    with app.test_request_context("/cotacao"):
        # 3. cotacao.html (Tela Dedicada com 4 Categorias e Seleção Completa)
        rendered_cotacao = render_template(
            "cotacao.html",
            categoria_ativa="sedan",
            cat_atual=CATEGORIAS_TERRESTRES[0],
            modelo_ativo="",
            categorias_terrestres=CATEGORIAS_TERRESTRES,
            capitais=CAPITAIS
        )
        with open(os.path.join(DIST_DIR, "cotacao.html"), "w", encoding="utf-8") as f:
            f.write(rendered_cotacao)
        print("[OK] cotacao.html renderizado em dist/cotacao.html")

    # 4. Renderizar páginas dedicadas para cada categoria de veículo da frota (SEO com index.html)
    for cat in CATEGORIAS_TERRESTRES:
        slug = cat["slug"]
        seo = SEO_CATEGORIAS.get(slug, {})
        with app.test_request_context(f"/frota/{slug}"):
            rendered_frota = render_template(
                "index.html",
                capitais=CAPITAIS,
                frotas=FROTA,
                categorias_terrestres=CATEGORIAS_TERRESTRES,
                categoria_ativa=slug,
                seo_title=seo.get("title", ""),
                seo_description=seo.get("description", "")
            )
            cat_dir = os.path.join(DIST_DIR, "frota", slug)
            os.makedirs(cat_dir, exist_ok=True)
            with open(os.path.join(cat_dir, "index.html"), "w", encoding="utf-8") as f:
                f.write(rendered_frota)
        print(f"[OK] Categoria {slug} renderizada em dist/frota/{slug}/index.html")

    # 5. Criar arquivo de regras de redirecionamento do Netlify (_redirects)
    redirects_content = """/manifest.json /manifest.json 200
/sw.js      /sw.js           200
/frota/sedan          /frota/sedan/index.html          200
/frota/suv            /frota/suv/index.html            200
/frota/taxi           /frota/taxi-executivo/index.html 301
/frota/taxi-executivo /frota/taxi-executivo/index.html 200
/frota/van            /frota/van/index.html            200
/frota/onibus         /frota/onibus/index.html         200
/frota                /frota/sedan/index.html          301
/sedan                /frota/sedan/index.html          301
/suv                  /frota/suv/index.html            301
/taxi                 /frota/taxi-executivo/index.html 301
/taxi-executivo       /frota/taxi-executivo/index.html 301
/van                  /frota/van/index.html            301
/onibus               /frota/onibus/index.html         301
/cotacao              /frota/sedan/index.html          301
/cotacao/*            /frota/sedan/index.html          301
/reserva    /reserva.html    200
/servicos   /#servicos       301
/capitais   /#capitais       301
/quem-somos /#quem-somos     301
/faq        /#faq            301
/*          /index.html      200
"""
    with open(os.path.join(DIST_DIR, "_redirects"), "w", encoding="utf-8") as f:
        f.write(redirects_content)
    print("[OK] dist/_redirects gerado para roteamento do Netlify.")

    print("\n[SUCESSO] Site estatico gerado com sucesso na pasta 'dist/'!")


if __name__ == "__main__":
    build_static_site()
