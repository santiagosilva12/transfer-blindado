"""
Transfer Blindado - Aplicação Flask
Site Institucional de Transporte Executivo Blindado e Aviação Executiva
"""

from flask import Flask, render_template, request, redirect, url_for, send_from_directory

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.after_request
def add_no_cache_headers(response):
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    return response

# Dados estruturados das Capitais atendidas
CAPITAIS = [
    {
        "nome": "São Paulo (Sede)",
        "slug": "sao-paulo",
        "tag": "Centro de Operações Principal",
        "imagem": "/static/images/capitais/sao-paulo.jpg",
        "descricao": "Hub executivo com frota dedicada e prontidão imediata 24 horas nos aeroportos de Congonhas e Guarulhos."
    },
    {
        "nome": "Rio de Janeiro",
        "slug": "rio-de-janeiro",
        "tag": "Base Santos Dumont & Galeão",
        "imagem": "/static/images/capitais/rio-de-janeiro.jpg",
        "descricao": "Segurança balística intransigente para translados corporativos, hotéis da orla e polos de energia."
    },
    {
        "nome": "Brasília",
        "slug": "brasilia",
        "tag": "Atendimento Diplomático & Governamental",
        "imagem": "/static/images/capitais/brasilia.jpg",
        "descricao": "Protocolos rigorosos de confidencialidade e escoltas para ministérios, embaixadas e tribunais superiores."
    },
    {
        "nome": "Fortaleza",
        "slug": "fortaleza",
        "tag": "Hub Nordeste",
        "imagem": "/static/images/capitais/fortaleza.jpg",
        "descricao": "Recepção VIP no Aeroporto Pinto Martins e deslocamentos blindados com máxima discrição e pontualidade na orla e centros de convenções."
    },
    {
        "nome": "Recife",
        "slug": "recife",
        "tag": "Polo Corporativo & Suape",
        "imagem": "/static/images/capitais/recife.jpg",
        "descricao": "Atendimento exclusivo a executivos do complexo portuário, Boa Viagem e região metropolitana."
    },
    {
        "nome": "Belo Horizonte",
        "slug": "belo-horizonte",
        "tag": "Polo Mineração & Siderurgia",
        "imagem": "/static/images/capitais/belo-horizonte.jpg",
        "descricao": "Translados de Confins à Savassi e cidades históricas com frota de SUVs e sedans blindados de alto padrão."
    },
    {
        "nome": "Salvador",
        "slug": "salvador",
        "tag": "Bahia Executiva",
        "imagem": "/static/images/capitais/salvador.jpg",
        "descricao": "Translados de luxo para executivos, delegações internacionais e eventos corporativos de grande porte."
    },
    {
        "nome": "Porto Alegre",
        "slug": "porto-alegre",
        "tag": "Sul Corporativo",
        "imagem": "/static/images/capitais/porto-alegre.jpg",
        "descricao": "Prontidão no Salgado Filho e atendimento especializado para indústrias e holdings do agronegócio."
    },
    {
        "nome": "Curitiba",
        "slug": "curitiba",
        "tag": "Hub Sul & Tecnologia",
        "imagem": "/static/images/capitais/curitiba.jpg",
        "descricao": "Excelência e pontualidade cirúrgica nos principais centros financeiros e industriais da capital paranaense."
    },
    {
        "nome": "Goiânia",
        "slug": "goiania",
        "tag": "Centro-Oeste & Agronegócio",
        "imagem": "/static/images/capitais/goiania.jpg",
        "descricao": "Soluções completas com conexão terrestre e helipontos estratégicos para líderes do agrobusiness."
    },
    {
        "nome": "Vitória",
        "slug": "vitoria",
        "tag": "Logística Portuária & Óleo e Gás",
        "imagem": "/static/images/capitais/vitoria.jpg",
        "descricao": "Mobilidade executiva blindada cobrindo a Grande Vitória e principais plantas industriais costeiras."
    },
    {
        "nome": "Cuiabá",
        "slug": "cuiaba",
        "tag": "Capital do Agro",
        "imagem": "/static/images/capitais/cuiaba.jpg",
        "descricao": "Veículos robustos com blindagem de alta performance para frentes executivas e viagens intermunicipais."
    },
    {
        "nome": "Belém",
        "slug": "belem",
        "tag": "Portal da Amazônia",
        "imagem": "/static/images/capitais/belem.jpg",
        "descricao": "Recepção VIP e logística segura para missões de sustentabilidade, mineração e comitivas internacionais."
    },
    {
        "nome": "Natal",
        "slug": "natal",
        "tag": "Nordeste Estratégico",
        "imagem": "/static/images/capitais/natal.jpg",
        "descricao": "Translados de alto escalão entre aeroportos internacionais, resorts corporativos e centros de convenções."
    },
    {
        "nome": "Teresina",
        "slug": "teresina",
        "tag": "Polo Médico & Corporativo",
        "imagem": "/static/images/capitais/teresina.jpg",
        "descricao": "Atendimento dedicado com motoristas executivos certificados em direção defensiva e evasiva."
    },
    {
        "nome": "João Pessoa",
        "slug": "joao-pessoa",
        "tag": "Paraíba Executiva",
        "imagem": "/static/images/capitais/joao-pessoa.jpg",
        "descricao": "Discrição absoluta e conforto de classe mundial para diretores, conselheiros e investidores."
    },
    {
        "nome": "Aracaju",
        "slug": "aracaju",
        "tag": "Sergipe Corporativo",
        "imagem": "/static/images/capitais/aracaju.jpg",
        "descricao": "Cobertura sob demanda com padrão unificado de segurança, elegância e rastreamento telemétrico."
    }
]

# Categorias Terrestres Detalhadas com Modelos para Carrosséis Individuais (5 Carrosséis no total)
CATEGORIAS_TERRESTRES = [
    {
        "id": "sedan",
        "slug": "sedan",
        "nome": "Sedan",
        "icone": "bi-car-front",
        "titulo_galeria": "GALERIA DE VEÍCULOS SEDAN",
        "subtitulo_galeria": "Sedans Executivos e de Luxo com Proteção Balística e Conforto Máximo",
        "imagem_padrao": "/static/images/fleet-sedan-sketch.png",
        "modelos": [
            {
                "id": "sedan-luxo-blindado",
                "nome": "Sedan de Luxo Blindado",
                "subtitulo": "Sofisticação Máxima, Prestígio VIP e Máxima Segurança",
                "exemplo": "Mercedes-Benz",
                "capacidade": "3 Passageiros VIP + 2 Bagagens Grandes",
                "tag": "Luxo VIP",
                "tag_icone": "bi-award-fill",
                "destaques": ["Acabamento em Couro Nobre", "Blindagem Ultra-Lightweight", "Serviço de Bordo Executivo", "Máxima Discrição e Sigilo"],
                "imagem": "/static/images/fleet-sedan-sketch.png",
                "param_reserva": "Sedan de Luxo Blindado"
            },
            {
                "id": "sedan-executivo-blindado",
                "nome": "Sedan Executivo Blindado",
                "subtitulo": "Conforto Superior com Blindagem Nível III-A",
                "exemplo": "Toyota Corolla / Ford Fusion / BYD Song",
                "capacidade": "3 a 4 Passageiros + 2 Bagagens",
                "tag": "Blindado III-A",
                "tag_icone": "bi-shield-lock-fill",
                "destaques": ["Blindagem Nível III-A Certificada", "Ar-condicionado Dual Zone", "Wi-Fi 5G & Água Premium", "Motorista Profissional"],
                "imagem": "/static/images/fleet-sedan-corolla-sketch.png",
                "param_reserva": "Sedan Executivo Blindado"
            },
            {
                "id": "sedan-convencional",
                "nome": "Sedan Convencional",
                "subtitulo": "Eficiência e Discrição para Deslocamentos Corporativos",
                "exemplo": "Toyota Corolla / Nissan Sentra / Volkswagen Jetta",
                "capacidade": "4 Passageiros + 2 Bagagens",
                "tag": "Convencional",
                "tag_icone": "bi-car-front",
                "destaques": ["Translados Corporativos Diários", "Ar-condicionado Digital", "Condução Confortável e Segura", "Excelente Custo-Benefício"],
                "imagem": "/static/images/fleet-sedan-corolla-sketch.png",
                "param_reserva": "Sedan Convencional"
            },
            {
                "id": "taxi-sedan-blindado",
                "nome": "Táxi Blindado",
                "subtitulo": "Mobilidade Urbana Ágil com Proteção Balística em Corredores",
                "exemplo": "Sedans Médios Homologados Táxi Blindado Nível III-A",
                "capacidade": "3 a 4 Passageiros + Bagagens",
                "tag": "Táxi Blindado",
                "tag_icone": "bi-shield-check",
                "destaques": ["Acesso a Faixas Exclusivas e Corredores", "Blindagem Nível III-A", "Agilidade no Trânsito Urbano", "Tarifa Padronizada"],
                "imagem": "/static/images/fleet-sedan-taxi-sketch.png",
                "param_reserva": "Táxi Blindado"
            },
            {
                "id": "taxi-convencional",
                "nome": "Táxi Convencional",
                "subtitulo": "Agilidade em Deslocamentos Urbanos Rápidos e Conexões",
                "exemplo": "Sedans Executivos Categoria Táxi Homologado",
                "capacidade": "4 Passageiros + Bagagem",
                "tag": "Táxi",
                "tag_icone": "bi-clock-history",
                "destaques": ["Circulação em Corredores de Ônibus", "Deslocamento Rápido em Capitais", "Disponibilidade Imediata"],
                "imagem": "/static/images/fleet-sedan-taxi-sketch.png",
                "param_reserva": "Táxi Convencional"
            }
        ]
    },
    {
        "id": "suv",
        "slug": "suv",
        "nome": "SUV",
        "icone": "bi-shield-shaded",
        "titulo_galeria": "GALERIA DE VEÍCULOS SUV",
        "subtitulo_galeria": "SUVs Executivos de Médio e Grande Porte com Blindagem e Espaço Superior",
        "imagem_padrao": "/static/images/fleet-suv-sketch.png",
        "modelos": [
            {
                "id": "suv-luxo-blindado",
                "nome": "SUV de Luxo Blindado",
                "subtitulo": "O Topo de Linha Mundial em Blindagem, Conforto e Tecnologia",
                "exemplo": "Cadillac Escalade / Range Rover Vogue / BMW X7 Blindados",
                "capacidade": "4 a 6 Passageiros VIP + Amplo Bagageiro",
                "tag": "Luxo VIP",
                "tag_icone": "bi-award-fill",
                "destaques": ["Acabamento Ultra-Luxo", "Blindagem de Última Geração", "Sistema Multimídia Executivo", "Máximo Espaço e Conforto"],
                "imagem": "/static/images/fleet-suv-escalade-sketch.png",
                "param_reserva": "SUV de Luxo Blindado"
            },
            {
                "id": "suv-executivo-blindado",
                "nome": "SUV Executivo Blindado",
                "subtitulo": "Porte Imponente, Tração 4x4 e Segurança Balística Robusta",
                "exemplo": "Toyota SW4 Diamond / Land Rover Discovery Blindados",
                "capacidade": "4 a 6 Passageiros + 4 Bagagens",
                "tag": "Executivo 4x4",
                "tag_icone": "bi-shield-fill-check",
                "destaques": ["Tração Integral 4x4 Inteligente", "Blindagem Nível III-A Ultra-Lightweight", "Amplo Espaço para Comitivas", "Telemetria e Rastreamento"],
                "imagem": "/static/images/fleet-suv-sketch.png",
                "param_reserva": "SUV Executivo Blindado"
            },
            {
                "id": "suv-convencional",
                "nome": "SUV Convencional",
                "subtitulo": "Espaço Amplo, Robustez e Conforto para Viagens e Traslados",
                "exemplo": "Land Rover Discovery / Toyota SW4 / Jeep Commander",
                "capacidade": "6 a 7 Passageiros + Bagagens",
                "tag": "Convencional",
                "tag_icone": "bi-car-front",
                "destaques": ["Capacidade para Famílias e Equipes", "Tração Confiável em Qualquer Terreno", "Conforto Rodoviário Superior"],
                "imagem": "/static/images/fleet-suv-landrover-sketch.png",
                "param_reserva": "SUV Convencional"
            },
            {
                "id": "taxi-suv-blindado",
                "nome": "Táxi SUV Blindado",
                "subtitulo": "Deslocamentos Urbanos em SUV com Acesso a Faixas e Blindagem",
                "exemplo": "SUVs Médios Homologados Táxi com Blindagem III-A",
                "capacidade": "4 Passageiros + 3 Bagagens",
                "tag": "Táxi Blindado",
                "tag_icone": "bi-shield-check",
                "destaques": ["Acesso a Corredores Expressos", "Blindagem Balística Nível III-A", "Conforto Elevado no Asfalto", "Tarifa Padronizada"],
                "imagem": "/static/images/fleet-suv-taxi-sketch.png",
                "param_reserva": "Táxi SUV Blindado"
            },
            {
                "id": "taxi-suv-convencional",
                "nome": "Táxi SUV Convencional",
                "subtitulo": "Agilidade Urbana em SUV com Corredores e Amplo Porta-malas",
                "exemplo": "Land Rover Discovery / SUVs Executivos Categoria Táxi Homologado",
                "capacidade": "4 Passageiros + 3 Bagagens",
                "tag": "Táxi",
                "tag_icone": "bi-clock-history",
                "destaques": ["Acesso Rápido a Faixas e Corredores", "Conforto Elevado para Bagagens", "Disponibilidade Imediata"],
                "imagem": "/static/images/fleet-suv-landrover-taxi-sketch.png",
                "param_reserva": "Táxi SUV Convencional"
            }
        ]
    },
    {
        "id": "van",
        "slug": "van",
        "nome": "Van & Mini Van",
        "icone": "bi-truck",
        "titulo_galeria": "GALERIA DE VEÍCULOS VANS & MINI VANS",
        "subtitulo_galeria": "Vans Executivas e Mini Vans para Comitivas, Delegações e Famílias",
        "imagem_padrao": "/static/images/fleet-van-sketch.png",
        "modelos": [
            {
                "id": "van-executiva-blindada",
                "nome": "Van Executiva Blindada",
                "subtitulo": "Segurança Balística em Grupo para Delegações e Autoridades",
                "exemplo": "Mercedes-Benz Sprinter Blindada Nível III-A",
                "capacidade": "12 a 15 Passageiros + Compartimento Bagageiro",
                "tag": "Blindada III-A",
                "tag_icone": "bi-shield-lock-fill",
                "destaques": ["Blindagem Balística Nível III-A", "Vidros Blindados Curvos", "Comunicação Criptografada", "Espaço Amplo para Equipes"],
                "imagem": "/static/images/fleet-van-sketch.png",
                "param_reserva": "Van Executiva Blindada"
            },
            {
                "id": "van-corporativa",
                "nome": "Van Corporativa Convencional",
                "subtitulo": "Transporte Eficiente e Pontual para Eventos e Congressos",
                "exemplo": "Mercedes-Benz Sprinter Executiva / Renault Master",
                "capacidade": "15 a 18 Passageiros + Bagagens",
                "tag": "Convencional",
                "tag_icone": "bi-car-front",
                "destaques": ["Ar-condicionado com Dutos Individuais", "Som Ambiente & Conectividade", "Logística Pontual para Grupos"],
                "imagem": "/static/images/fleet-van-sketch.png",
                "param_reserva": "Van Corporativa"
            },
            {
                "id": "mini-van-luxo-blindada",
                "nome": "Mini Van de Luxo Blindada",
                "subtitulo": "Acabamento de Alto Padrão com Blindagem Nível III-A",
                "exemplo": "Mercedes-Benz Classe V Blindada / Lexus LM",
                "capacidade": "4 a 6 Passageiros + 5 Bagagens",
                "tag": "Blindada III-A",
                "tag_icone": "bi-shield-lock-fill",
                "destaques": ["Blindagem Balística Nível III-A", "Poltronas Reclináveis em Couro", "Wi-Fi 5G & Telas Individuais", "Isolamento Acústico Avançado"],
                "imagem": "/static/images/fleet-minivan-sketch.png",
                "param_reserva": "Mini Van de Luxo Blindada"
            },
            {
                "id": "mini-van-executiva",
                "nome": "Mini Van Executiva",
                "subtitulo": "Conforto e Eficiência para Traslados de Diretorias e Famílias",
                "exemplo": "Kia Carnival / Chrysler Pacifica / Mercedes-Benz Classe V",
                "capacidade": "6 a 7 Passageiros + Bagagens",
                "tag": "Executivo",
                "tag_icone": "bi-car-front",
                "destaques": ["Portas Elétricas com Acesso Fácil", "Ar Climatizado Tri-Zone", "Conforto Rodoviário Superior", "Amplo Espaço de Bagagem"],
                "imagem": "/static/images/fleet-minivan-sketch.png",
                "param_reserva": "Mini Van Executiva"
            }
        ]
    },
    {
        "id": "onibus",
        "slug": "onibus",
        "nome": "Ônibus",
        "icone": "bi-bus-front",
        "titulo_galeria": "GALERIA DE VEÍCULOS ÔNIBUS",
        "subtitulo_galeria": "Ônibus Leito e Micro-ônibus para Viagens, Grandes Comitivas e Convenções",
        "imagem_padrao": "/static/images/fleet-bus-sketch.png",
        "modelos": [
            {
                "id": "onibus-leito-turismo",
                "nome": "Ônibus Leito Turismo",
                "subtitulo": "O Padrão Mais Alto em Viagens Rodoviárias de Longa Distância",
                "exemplo": "Marcopolo Paradiso G8 1800 DD / Scania Leito Cama",
                "capacidade": "26 a 32 Poltronas Leito-Cama",
                "tag": "Leito Turismo",
                "tag_icone": "bi-award-fill",
                "destaques": ["Poltronas Reclináveis 180° Tipo Leito", "Wi-Fi a Bordo & Frigobar Completo", "Toalete Climatizado", "Coordenação de Rota 24/7"],
                "imagem": "/static/images/fleet-bus-sketch.png",
                "param_reserva": "Ônibus Leito Turismo"
            },
            {
                "id": "onibus-executivo-comitivas",
                "nome": "Ônibus Executivo Comitivas",
                "subtitulo": "Deslocamentos Corporativos em Massa com Total Conforto e Segurança",
                "exemplo": "Marcopolo Paradiso 1200 / Volvo B380R Executivo",
                "capacidade": "42 a 46 Lugares Executivos",
                "tag": "Executivo",
                "tag_icone": "bi-people-fill",
                "destaques": ["Ar-condicionado Central Climatizado", "Monitores e Sistema de Áudio Integrado", "Bagageiro de Grande Porte para Cargas"],
                "imagem": "/static/images/fleet-bus-sketch.png",
                "param_reserva": "Ônibus Executivo"
            },
            {
                "id": "micro-onibus-executivo",
                "nome": "Micro-ônibus Executivo",
                "subtitulo": "Agilidade em Acessos Urbanos e Conforto para Grupos Médios",
                "exemplo": "Marcopolo Senior / Volare Fly 9 Executivo",
                "capacidade": "20 a 26 Passageiros",
                "tag": "Micro-ônibus",
                "tag_icone": "bi-bus-front",
                "destaques": ["Acesso Fácil a Centros Urbanos e Hotéis", "Bancos Reclináveis Soft Touch", "Suspensão Pneumática Confortável"],
                "imagem": "/static/images/fleet-microbus-sketch.png",
                "param_reserva": "Micro-ônibus Executivo"
            },
            {
                "id": "onibus-fretamento-eventos",
                "nome": "Ônibus Fretamento & Eventos",
                "subtitulo": "Logística Coordenada para Grandes Feiras, Congressos e Convenções",
                "exemplo": "Frotas Homologadas para Fretamento Contínuo",
                "capacidade": "44 a 50 Passageiros",
                "tag": "Fretamento",
                "tag_icone": "bi-calendar-check",
                "destaques": ["Coordenação Central de Tráfego e Pontualidade", "Motoristas Qualificados com Escala", "Frota Padronizada e Monitorada"],
                "imagem": "/static/images/fleet-bus-sketch.png",
                "param_reserva": "Ônibus Fretamento"
            }
        ]
    }
]

# Dados estruturados das Frotas (Geral & Frota Aérea)
FROTA = [
    # Categoria Terrestre (1 a 5 - Estilo Sketch CAD / Ilustração Técnica)
    {
        "id": "sedan",
        "numero": "01",
        "tipo": "terrestre",
        "nome": "Sedan",
        "subtitulo": "Sedan Luxo & Executivo Blindado",
        "exemplo": "Mercedes-Benz / Toyota Corolla / Ford Fusion / BYD Song",
        "capacidade": "3 a 4 Passageiros + 2 Bagagens Grandes",
        "blindagem": "Nível III-A Certificada pelo Exército",
        "destaques": ["Vidros Balísticos de Última Geração", "Ar-condicionado Dual Zone", "Wi-Fi 5G & Água Premium", "Motorista Bilíngue Treinado"],
        "estilo_imagem": "sketch",
        "imagem": "/static/images/fleet-sedan-sketch.png",
        "comprimento": "5.289 mm",
        "escala": "1:25 ISO",
        "chassis": "REINFORCED HD",
        "param_reserva": "Sedan Luxo Blindado"
    },
    {
        "id": "suv",
        "numero": "02",
        "tipo": "terrestre",
        "nome": "SUV",
        "subtitulo": "SUV Executivo de Grande Porte Blindado",
        "exemplo": "Cadillac Escalade / Land Rover Defender & Range Rover / Toyota SW4 Diamond",
        "capacidade": "4 a 6 Passageiros + 4 Bagagens Grandes",
        "blindagem": "Nível III-A Ultra-Lightweight",
        "destaques": ["Tração Integral 4x4 Inteligente", "Privacidade com Película Balística", "Sistema de Telemetria Operacional", "Comunicação Criptografada"],
        "estilo_imagem": "sketch",
        "imagem": "/static/images/fleet-suv-sketch.png",
        "comprimento": "5.382 mm",
        "escala": "1:25 ISO",
        "chassis": "4x4 HEAVY DUTY",
        "param_reserva": "Sedan Executivo Blindado"
    },
    {
        "id": "mini-van",
        "numero": "03",
        "tipo": "terrestre",
        "nome": "Mini Van",
        "subtitulo": "Mini Van Executiva de Conforto Superior",
        "exemplo": "Mercedes-Benz Classe V / Kia Carnival VIP",
        "capacidade": "6 Passageiros VIP + 5 Bagagens Grandes",
        "blindagem": "Nível III-A Opcional ou Convencional",
        "destaques": ["Poltronas Individuais Reclináveis", "Mesa de Reunião Retrátil", "Portas com Acionamento Elétrico", "Espaço de Carga Amplo"],
        "estilo_imagem": "sketch",
        "imagem": "/static/images/fleet-minivan-sketch.png",
        "comprimento": "5.155 mm",
        "escala": "1:25 ISO",
        "chassis": "EXTENDED VIP",
        "param_reserva": "Van"
    },
    {
        "id": "van",
        "numero": "04",
        "tipo": "terrestre",
        "nome": "Van",
        "subtitulo": "Van Executiva de Alta Capacidade",
        "exemplo": "Mercedes-Benz Sprinter 416 Executiva / 517 VIP",
        "capacidade": "10 a 16 Passageiros + Compartimento Bagageiro",
        "blindagem": "Nível III-A Sob Demanda / Convencional",
        "destaques": ["Assentos em Couro Soft Touch", "Iluminação Cênica em LED", "Tomadas Individuais USB e 110V", "Monitor Executivo Integrado"],
        "estilo_imagem": "sketch",
        "imagem": "/static/images/fleet-van-sketch.png",
        "comprimento": "6.967 mm",
        "escala": "1:25 ISO",
        "chassis": "SPRINTER VIP CABIN",
        "param_reserva": "Van"
    },
    {
        "id": "onibus",
        "numero": "05",
        "tipo": "terrestre",
        "nome": "Ônibus",
        "subtitulo": "Ônibus Leito Turismo & Comitivas Corporativas",
        "exemplo": "Marcopolo Paradiso G8 / Scania Touring Executivo",
        "capacidade": "26 a 44 Passageiros + Grande Volume de Cargas",
        "blindagem": "Segurança Estrutural & Escolta Dedicada",
        "destaques": ["Poltronas Leito-Cama Reclináveis", "Toalete a Bordo & Frigobar", "Sistema de Áudio e Vídeo Individual", "Coordenação de Rota 24/7"],
        "estilo_imagem": "sketch",
        "imagem": "/static/images/fleet-bus-sketch.png",
        "comprimento": "14.000 mm",
        "escala": "1:50 ISO",
        "chassis": "SCANIA / VOLVO TOURING",
        "param_reserva": "Ônibus"
    },
    # Frota Aérea (Fotografia Executiva Real)
    {
        "id": "aviao-jato",
        "numero": "06",
        "tipo": "aerea",
        "nome": "Avião a Jato",
        "subtitulo": "Aviação Executiva & Jatos de Alta Performance",
        "exemplo": "Embraer Phenom 300E / Cessna Citation XLS+ / Gulfstream G650",
        "capacidade": "6 a 12 Passageiros + Compartimento Dedicado",
        "blindagem": "Homologação ANAC & Padrões Internacionais",
        "destaques": ["Cabine Pressurizada Silenciosa", "Acesso aos Principais Terminais FBO"],
        "estilo_imagem": "foto",
        "imagem": "/static/images/fleet-jet-real.jpg",
        "param_reserva": "Avião a Jato"
    },
    {
        "id": "helicoptero",
        "numero": "07",
        "tipo": "aerea",
        "nome": "Helicóptero",
        "subtitulo": "Asas Rotativas para Mobilidade Urbana e Intercity",
        "exemplo": "Airbus Helicopters H130 / H145 / Bell 429 GlobalRanger",
        "capacidade": "4 a 7 Passageiros + Bagagem de Mão",
        "blindagem": "Homologação ANAC & Operação Bimotores",
        "destaques": ["Pousos em Helipontos", "Visão Panorâmica"],
        "estilo_imagem": "foto",
        "imagem": "/static/images/fleet-helicopter-real.jpg",
        "param_reserva": "Helicóptero"
    }
]


@app.route("/")
def index():
    return render_template("index.html", capitais=CAPITAIS, frotas=FROTA, categorias_terrestres=CATEGORIAS_TERRESTRES)


@app.route("/frota")
def frota():
    return redirect(url_for("index") + "#frota")


@app.route("/cotacao")
def cotacao():
    categoria_ativa = request.args.get("categoria", "sedan").lower()
    modelo_ativo = request.args.get("modelo", "")
    cat_atual = next((c for c in CATEGORIAS_TERRESTRES if c["slug"] == categoria_ativa), CATEGORIAS_TERRESTRES[0])
    return render_template(
        "cotacao.html",
        categoria_ativa=cat_atual["slug"],
        cat_atual=cat_atual,
        modelo_ativo=modelo_ativo,
        categorias_terrestres=CATEGORIAS_TERRESTRES,
        capitais=CAPITAIS
    )


@app.route("/reserva")
def reserva():
    # Suporta preenchimento rápido via query string (ex: ?servico=Sedan&cidade=São Paulo)
    servico_pre = request.args.get("servico", "")
    cidade_pre = request.args.get("cidade", "")
    return render_template("reserva.html", servico_pre=servico_pre, cidade_pre=cidade_pre, capitais=CAPITAIS)


# Atalhos para navegação institucional
@app.route("/quem-somos")
def quem_somos():
    return redirect(url_for("index") + "#quem-somos")


@app.route("/servicos")
def servicos():
    return redirect(url_for("index") + "#servicos")


@app.route("/capitais")
def capitais_route():
    return redirect(url_for("index") + "#capitais")


@app.route("/faq")
def faq():
    return redirect(url_for("index") + "#faq")


@app.route("/manifest.json")
def manifest():
    return send_from_directory(app.static_folder, "manifest.json", mimetype="application/manifest+json")


@app.route("/sw.js")
def service_worker():
    response = send_from_directory(app.static_folder, "sw.js", mimetype="application/javascript")
    response.headers["Service-Worker-Allowed"] = "/"
    return response


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
