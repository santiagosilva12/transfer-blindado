# TRANSFER BLINDADO - Site Institucional

Portal institucional de alto padrão para transporte executivo blindado e aviação executiva, desenvolvido com **Python (Flask)**, **Bootstrap 5**, **JavaScript Vanilla** e **CSS Customizado**.

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
- Python 3.9+ instalado
- Pip atualizado

### 2. Instalação das dependências
Abra o terminal na pasta raiz do projeto e execute:
```bash
pip install -r requirements.txt
```

### 3. Executando o servidor Flask local
```bash
python app.py
```
O servidor estará disponível em: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

### 4. Build estático para deploy (Netlify / GitHub Pages)
```bash
python build.py
```
Gera a pasta `dist/` pronta para deploy estático CDN de alta performance com todas as páginas HTML, imagens e assets.

---

## 🌐 Deploy no Netlify
1. **Via Netlify Drop (Mais rápido para validação de cliente)**:
   - Execute `python build.py`
   - Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
   - Arraste a pasta `dist` gerada
   - O link online estará disponível em segundos!

2. **Via Conexão com GitHub**:
   - Faça o push do projeto para seu repositório no GitHub
   - No Netlify, clique em **Add new site > Import an existing project > GitHub**
   - Configure:
     - **Build command**: `python build.py`
     - **Publish directory**: `dist`
   - O Netlify fará deploy contínuo a cada novo push!

---

## 📁 Estrutura de Arquivos

```
Site Humberto/
├── app.py                      # Rotas Flask (render_template para todas as páginas)
├── requirements.txt            # Dependências Python (Flask)
├── prompt - versão 1.txt       # Requisitos do cliente
├── README.md                   # Instruções de execução e documentação
├── static/
│   ├── css/
│   │   └── style.css           # Estilização luxuosa (Grafite, Preto Ônix e Dourado)
│   ├── js/
│   │   └── main.js             # JavaScript Vanilla (WhatsApp API, Swiper, Validação)
│   └── images/
│       ├── logo.svg            # Logotipo vetorial de luxo Transfer Blindado
│       ├── sketch-sedan.svg    # Sketch técnico blueprint do Sedan
│       ├── sketch-suv.svg      # Sketch técnico blueprint do SUV
│       ├── sketch-minivan.svg  # Sketch técnico blueprint da Mini Van
│       ├── sketch-van.svg      # Sketch técnico blueprint da Van
│       └── sketch-bus.svg      # Sketch técnico blueprint do Ônibus
└── templates/
    ├── base.html               # Layout mestre, Navbar fixa e Rodapé Global
    ├── index.html              # Home: Hero, Quem Somos (Missão/Visão/Valores), Capitais, FAQ
    ├── frota.html              # Nossas Frotas: Categorias empilhadas (1 a 5 sketch, 6 a 7 fotos)
    └── reserva.html            # Formulário corporativo sob demanda com envio para WhatsApp
```

---

## 🌟 Funcionalidades e Requisitos Atendidos

1. **Navbar Fixa no Topo**:
   - Logotipo oficial à esquerda.
   - Links de navegação: Home, Quem Somos, Serviços, Frota, Capitais, Perguntas Frequentes.
   - Botão CTA *"Fale Conosco"* com ícone WhatsApp à direita.

2. **Home (`index.html`)**:
   - **Hero Banner**: Título *"Sua agenda em movimento. Sua segurança intransigente"*, subtítulo e botões de ação.
   - **Quem Somos**: Missão, Visão e os 5 Valores (*Segurança Intransigente, Excelência, Prontidão Absoluta, Confidencialidade, Inteligência em Mobilidade*) com negative space elegante.
   - **Carrossel de Capitais (Explore Nossos Mercados)**: Slider Swiper.js estilo *drvn* com as 17 capitais (*São Paulo, Rio de Janeiro, Brasília, Fortaleza, Recife, Belo Horizonte, Salvador, Porto Alegre, Curitiba, Goiânia, Vitória, Cuiabá, Belém, Natal, Teresina, João Pessoa, Aracaju*), imagem escurecida, nome no canto inferior e link *"Saiba Mais ->"*.
   - **FAQ**: Acordeão completo cobrindo blindagem Nível III-A, motoristas bilíngues, contratos corporativos e confidencialidade (NDA).

3. **Nossas Frotas (`frota.html`)**:
   - Categorias empilhadas uma abaixo da outra.
   - **Divisão Terrestre (1 a 5 em estilo sketch técnico SVG)**: Sedan, SUV, Mini Van, Van, Ônibus.
   - **Divisão Aérea (6 e 7 com fotografia de alto padrão)**: Avião a Jato, Helicóptero.
   - Cada card age como botão interativo clicável que leva diretamente para a página de reserva com a categoria pré-selecionada.

4. **Formulário de Reserva Sob Demanda (`reserva.html`)**:
   - Campos: Nome Completo/Responsável, Empresa (opcional), E-mail Corporativo, Telefone/WhatsApp, Checkboxes de Tipo de Serviço e Textarea de Demanda com o placeholder solicitado.
   - **Integração WhatsApp Vanilla JS**: Intercepta o `submit` (sem POST backend) e redireciona via `window.open` para `https://wa.me/5511986829141?text=` com todos os dados preenchidos e codificados em `encodeURIComponent`.

5. **Rodapé Global**:
   - E-mail: `contato@transferblindado.com.br`
   - CNPJ: `69.880.706/0001-91`
   - WhatsApp: `55 11 98682-9141`
