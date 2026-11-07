/**
 * TRANSFER BLINDADO - Multilingual Translation Engine (i18n)
 * Languages: pt (Português), en (English), es (Español)
 */

const TRANSLATIONS = {
  pt: {
    // Banner superior
    banner_badge: "Blindagem Nível III-A",
    banner_cert: "Frota Executiva Blindada Certificada pelo Exército",
    banner_cta: "Solicitar veículo blindado",

    // Navbar
    nav_home: "Home",
    nav_solutions: "Soluções",
    nav_fleet: "Frota",
    nav_cities: "Capitais",
    nav_about: "Sobre",
    nav_faq: "FAQ",
    nav_book: "Reservar",
    nav_contact: "FALE CONOSCO",

    // Hero Editorial
    hero_tag: "OPERAÇÃO 24/7/365 • ATENDIMENTO PREMIUM • VEÍCULOS BLINDADOS",
    hero_title_1: "Sua agenda em<br>movimento.",
    hero_title_2: "SEGURANÇA<br>INTRANSIGENTE.",
    hero_lead_1: "Logística executiva premium com frotas blindadas. Gerenciamos deslocamentos de alta complexidade e frotas corporativas sob medida.",
    hero_lead_2: "Monitoramento em tempo real e o mais alto padrão de atendimento corporativo do pré ao pós-viagem",
    hero_cta_circle: "Solicite sua Reserva",
    hero_cta_sub: "Orçamento corporativo sob demanda via WhatsApp",
    hero_cta_fleet: "Conhecer opções de frota",
    badge_247: "Atendimento 24/7",
    badge_armor: "Blindagem Nível III-A",
    badge_army: "Certificado pelo Exército",

    // Formulário Cotação
    form_title: "Cotação",
    form_detailed: "Demanda detalhada",
    lbl_name: "Nome / Responsável",
    lbl_phone: "WhatsApp / Telefone",
    lbl_origin: "Local de Saída / Origem",
    lbl_destination: "Destino",
    lbl_fleet: "Frota Desejada",
    lbl_date: "Data do Translado",
    btn_consult: "Consultar Disponibilidade",
    ph_name: "Nome / Responsável",
    ph_phone: "WhatsApp / Telefone",
    ph_origin: "Local de Saída / Origem",
    ph_destination: "Destino",
    ph_date: "Data do Translado",

    // Faixa Clientes
    clients_strip: "PRINCIPAIS CLIENTES ATENDIDOS",

    // Quem Somos - Missão, Visão e Valores
    about_tag: "ESTRUTURA INSTITUCIONAL DE ALTO PADRÃO • QUEM SOMOS",
    about_title: "Excelência e Rigor Operacional em Cada Trajeto",
    about_lead: "Conheça os alicerces éticos, a visão de futuro e os compromissos inegociáveis que norteiam cada operação da Transfer Blindado.",
    mission_badge: "NOSSA MISSÃO",
    mission_headline: "Conectar pessoas em movimento com excelência e segurança absoluta",
    mission_quote: "“Prover soluções de mobilidade terrestre blindada com os mais rigorosos padrões de segurança, discrição e eficiência. Integramos tecnologia de ponta, motoristas de elite e suporte ininterrupto para garantir uma experiência de viagem impecável, do planejamento ao destino final.”",
    vision_badge: "NOSSA VISÃO",
    vision_headline: "Onde queremos chegar e como queremos ser reconhecidos no futuro",
    vision_quote: "“Ser a referência absoluta no Brasil em gerenciamento de logística segura com veículos blindados e transporte executivo premium, consolidando um ecossistema de mobilidade que antecipa riscos e redefine o conceito de tranquilidade em movimento.”",
    values_badge: "NOSSOS VALORES",
    values_title: "Os Pilares da Experiência TRANSFER BLINDADO",
    values_sub: "Princípios que guiam nossos motoristas, analistas de risco e central 24/7 em todo o território nacional.",
    val_1_title: "Segurança Intransigente",
    val_1_desc: "A preservação da vida e da integridade de nossos passageiros é a nossa prioridade absoluta. Operamos com inteligência de mitigação de riscos para que a proteção seja máxima, mas a experiência seja fluida e discreta.",
    val_2_title: "Excelência em Cada Detalhe",
    val_2_desc: "O alto padrão se manifesta nos detalhes invisíveis. Da apresentação impecável de nossos motoristas à manutenção rigorosa da frota blindada, cada etapa do trajeto é executada sob o mais alto nível de exigência.",
    val_3_title: "Prontidão Absoluta (24/7/365)",
    val_3_desc: "O tempo é o ativo mais valioso de nossos clientes. Por isso, nosso ecossistema de suporte humano e gerenciamento em tempo real nunca desliga, garantindo respostas imediatas e flexibilidade total a qualquer hora do dia ou da noite.",
    val_4_title: "Confidencialidade e Prestígio",
    val_4_desc: "Compreendemos a importância estratégica de cada deslocamento. Tratamos cada itinerário com o mais estrito sigilo corporativo, assegurando que autoridades, CEOs e expatriados transitem com total privacidade.",
    val_5_title: "Inteligência em Mobilidade",
    val_5_desc: "Mais do que transportar, nós gerenciamos a jornada. Combinamos a profunda expertise de motoristas locais qualificados com tecnologia de ponta para antecipar imprevistos e transformar trajetos complexos em rotas seguras e produtivas.",

    // Frota
    div_1_badge: "",
    div_1_title: "FROTA TERRESTRE",
    div_2_badge: "",
    div_2_title: "FROTA AÉREA",
    fleet_ref_label: "Modelos de Referência:",
    fleet_air_ref_label: "Aeronaves de Referência:",
    fleet_avail_cities: "Disponível em Todo o Brasil",
    fleet_avail_air: "Cobertura Nacional e Internacional",
    fleet_quote_cta: "Solicitar Cotação para esta Frota",
    lbl_select_model: "SELECIONE O MODELO",

    // Soluções & Serviços Especializados
    svc_tag: "SOLUÇÕES CORPORATIVAS DE ELITE",
    svc_title: "Serviços Sob Medida para Cada Demanda",
    svc_lead: "Muito além da nossa frota blindada, oferecemos soluções sob medida em mobilidade de elite: motoristas executivos altamente qualificados, atendimento exclusivo para casamentos e eventos de gala, e planejamento tático de segurança.",
    svc_safedriver_badge: "SEU CARRO CONDUZIDO",
    svc_safedriver_title: "Safe Driver VIP",
    svc_safedriver_sub: "Motorista Profissional no Seu Veículo",
    svc_safedriver_desc: "Saiu para um jantar, evento corporativo ou confraternização, consumiu bebida alcoólica e não quer dirigir? Nosso motorista executivo vai até você e conduz o seu próprio carro com total discrição, conforto e segurança até sua residência.",
    svc_safedriver_pill1: "Retorno Seguro",
    svc_safedriver_pill2: "No Seu Veículo",
    svc_safedriver_pill3: "Prontidão 24/7",
    svc_safedriver_cta: "Contratar Safe Driver",

    svc_bilingual_badge: "COMITIVAS & EXPATRIADOS",
    svc_bilingual_title: "Motoristas Bilíngues",
    svc_bilingual_sub: "Fluência em Inglês e Espanhol",
    svc_bilingual_desc: "Recepção de alta classe para delegações internacionais, diplomatas e investidores estrangeiros. Condutores treinados em etiqueta corporativa de alto escalão, confidencialidade estrita (NDA) e direção defensiva avançada.",
    svc_bilingual_pill1: "Inglês & Espanhol",
    svc_bilingual_pill2: "Sigilo (NDA)",
    svc_bilingual_pill3: "Etiqueta VIP",
    svc_bilingual_cta: "Solicitar Motorista Bilíngue",

    svc_wedding_badge: "EVENTOS & CELEBRAÇÕES",
    svc_wedding_title: "Serviço de Casamentos",
    svc_wedding_sub: "Elegância e Requinte no Grande Dia",
    svc_wedding_desc: "Translados impecáveis para noivas, noivos e comitivas em sedans e SUVs de luxo blindados. Motoristas em traje a rigor, pontualidade britânica, ambientação personalizada e total serenidade para o dia do seu casamento.",
    svc_wedding_pill1: "Carro da Noiva",
    svc_wedding_pill2: "Traje a Rigor",
    svc_wedding_pill3: "Pontualidade Britânica",
    svc_wedding_cta: "Cotar Transporte para Casamento",

    svc_escort_badge: "SEGURANÇA TÁTICA",
    svc_escort_title: "Escolta & Comitivas",
    svc_escort_sub: "Gestão de Comboios e Análise de Risco",
    svc_escort_desc: "Operações de alta complexidade para autoridades, megaeventos e cúpulas corporativas. Planejamento preditivo de itinerários, equipes de contra-vigilância, batedores e monitoramento ininterrupto por telemetria 24/7.",
    svc_escort_pill1: "Telemetria 24/7",
    svc_escort_pill2: "Escolta Armada",
    svc_escort_pill3: "Gestão de Comboio",
    svc_escort_cta: "Planejar Operação Especial",

    // Capitais / Mercados
    markets_tag: "COBERTURA EM TODO O BRASIL",
    markets_title: "Explore Nossos Mercados",
    markets_lead: "Atendimento e logística executiva em todo o território nacional. Bases operacionais estratégicas e pronta resposta com frota blindada nas principais capitais.",
    learn_more: "Saiba Mais",

    // FAQ
    faq_badge: "DÚVIDAS FREQUENTES",
    faq_title: "Perguntas Frequentes",
    faq_q1: "Como funciona a contratação do serviço de Safe Driver?",
    faq_a1: "Você agenda nosso motorista executivo, que se desloca até o local do seu evento ou jantar. Ele assume a condução do seu próprio veículo e leva você com segurança, conforto e discrição até sua residência ou hotel.",
    faq_q2: "Os motoristas são certificados e poliglotas?",
    faq_a2: "Sim. Nossos condutores executivos possuem certificações em direção defensiva e evasiva, atendimento de alto padrão e fluência comprovada em Inglês e Espanhol para atender delegações internacionais e expatriados.",
    faq_q3: "Qual é o nível de blindagem da frota?",
    faq_a3: "Todos os nossos veículos contam com blindagem balística Nível III-A certificada pelo Exército Brasileiro, com vidros balísticos curvos de última geração e manutenção rigorosamente inspecionada.",

    // Opções do Select
    fleet_opt_1: "Sedan Luxo Blindado",
    fleet_opt_2: "Sedan Executivo Blindado",
    fleet_opt_3: "SUV Executivo Blindado",
    fleet_opt_4: "Van Executiva VIP",
    fleet_opt_5: "Mini Van VIP",
    fleet_opt_6: "Ônibus Comitiva",
    fleet_opt_7: "Avião a Jato",
    fleet_opt_8: "Helicóptero",
    fleet_opt_9: "Logística Grandes Eventos",

    footer_rights: "Todos os direitos reservados.",
    footer_army: "Frota Executiva Blindada Certificada pelo Exército Brasileiro."
  },

  en: {
    // Top banner
    banner_badge: "Armor Level III-A",
    banner_cert: "Executive Armored Fleet Certified by the Army",
    banner_cta: "Request armored vehicle",

    // Navbar
    nav_home: "Home",
    nav_solutions: "Solutions",
    nav_fleet: "Fleet",
    nav_cities: "Capitals",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_book: "Book Now",
    nav_contact: "CONTACT US",

    // Hero Editorial
    hero_tag: "24/7/365 OPERATION • PREMIUM SERVICE • ARMORED VEHICLES",
    hero_title_1: "Your schedule in<br>motion.",
    hero_title_2: "UNCOMPROMISED<br>SECURITY.",
    hero_lead_1: "Premium executive logistics with certified armored fleets. Tailored corporate mobility and high-complexity travel coordination.",
    hero_lead_2: "Real-time tracking and the highest standard of corporate service from pre-trip to destination.",
    hero_cta_circle: "Request Reservation",
    hero_cta_sub: "Corporate quote on demand via WhatsApp",
    hero_cta_fleet: "Explore fleet options",
    badge_247: "24/7 Support",
    badge_armor: "Armor Level III-A",
    badge_army: "Army Certified",

    // Quote Form
    form_title: "Quote",
    form_detailed: "Detailed request",
    lbl_name: "Full Name / Officer",
    lbl_phone: "WhatsApp / Phone",
    lbl_origin: "Pick-up Location / Origin",
    lbl_destination: "Destination",
    lbl_fleet: "Desired Fleet",
    lbl_date: "Transfer Date",
    btn_consult: "Check Availability",
    ph_name: "Full Name / Officer",
    ph_phone: "WhatsApp / Phone",
    ph_origin: "Pick-up Location / Origin",
    ph_destination: "Destination",
    ph_date: "Transfer Date",

    // Client strip
    clients_strip: "KEY CLIENTS SERVED",

    // About Us - Mission, Vision and Values
    about_tag: "HIGH-STANDARD INSTITUTIONAL FRAMEWORK • ABOUT US",
    about_title: "Excellence and Operational Rigor on Every Journey",
    about_lead: "Discover the ethical foundations, future vision, and non-negotiable commitments that drive every operation at Transfer Blindado.",
    mission_badge: "OUR MISSION",
    mission_headline: "Connecting people in motion with excellence and absolute safety",
    mission_quote: "“To provide armored ground mobility solutions adhering to the most stringent standards of security, discretion, and efficiency. We integrate cutting-edge technology, elite chauffeurs, and uninterrupted support to ensure an impeccable travel experience, from planning to final destination.”",
    vision_badge: "OUR VISION",
    vision_headline: "Where we aspire to reach and how we wish to be recognized in the future",
    vision_quote: "“To stand as the absolute benchmark in Brazil for secure logistics management with armored vehicles and premium executive transport, building a mobility ecosystem that anticipates risks and redefines tranquility in motion.”",
    values_badge: "OUR VALUES",
    values_title: "The Pillars of the TRANSFER BLINDADO Experience",
    values_sub: "Principles guiding our chauffeurs, risk analysts, and 24/7 command center across Brazil.",
    val_1_title: "Uncompromising Security",
    val_1_desc: "Preserving the life and integrity of our passengers is our absolute priority. We operate with predictive risk-mitigation intelligence so protection is maximized while remaining fluid and discreet.",
    val_2_title: "Excellence in Every Detail",
    val_2_desc: "High standards manifest in invisible details. From the impeccable presentation of our drivers to rigorous fleet maintenance, each leg of travel meets the highest requirements.",
    val_3_title: "Absolute Readiness (24/7/365)",
    val_3_desc: "Time is our clients' most valuable asset. Our human support ecosystem and real-time monitoring never switch off, delivering immediate responses day and night.",
    val_4_title: "Confidentiality and Prestige",
    val_4_desc: "We understand the strategic significance of every executive journey. We treat itineraries with strict corporate secrecy, ensuring dignitaries, CEOs, and expatriates travel in total privacy.",
    val_5_title: "Mobility Intelligence",
    val_5_desc: "More than transportation, we manage the entire journey. We combine local route expertise with modern telematics to preempt disruptions and deliver secure, productive travel.",

    // Fleet
    div_1_badge: "",
    div_1_title: "GROUND FLEET",
    div_2_badge: "",
    div_2_title: "AERIAL FLEET",
    fleet_ref_label: "Reference Models:",
    fleet_air_ref_label: "Reference Aircraft:",
    fleet_avail_cities: "Available Nationwide",
    fleet_avail_air: "National & International Coverage",
    fleet_quote_cta: "Request Quote for this Fleet",
    lbl_select_model: "SELECT MODEL",

    // Specialized Services
    svc_tag: "ELITE CORPORATE SOLUTIONS",
    svc_title: "Tailored Services for Every Requirement",
    svc_lead: "Beyond our armored fleet, we provide tailor-made elite mobility solutions: highly qualified executive chauffeurs, bespoke transport for weddings and gala events, and tactical security planning.",
    svc_safedriver_badge: "YOUR CAR DRIVEN",
    svc_safedriver_title: "VIP Safe Driver",
    svc_safedriver_sub: "Professional Chauffeur in Your Own Car",
    svc_safedriver_desc: "Attending a dinner, corporate event, or gala, enjoyed drinks, and prefer not to drive? Our executive chauffeur arrives at your location and drives your personal vehicle with total discretion, comfort, and safety back to your home.",
    svc_safedriver_pill1: "Safe Return",
    svc_safedriver_pill2: "In Your Vehicle",
    svc_safedriver_pill3: "24/7 Readiness",
    svc_safedriver_cta: "Hire Safe Driver",

    svc_bilingual_badge: "DELEGATIONS & EXPATRIATES",
    svc_bilingual_title: "Bilingual Chauffeurs",
    svc_bilingual_sub: "Fluent in English & Spanish",
    svc_bilingual_desc: "First-class reception for international delegations, diplomats, and overseas investors. Drivers trained in international corporate protocol, strict confidentiality (NDA), and advanced defensive evasive driving.",
    svc_bilingual_pill1: "English & Spanish",
    svc_bilingual_pill2: "Strict NDA Secrecy",
    svc_bilingual_pill3: "VIP Etiquette",
    svc_bilingual_cta: "Request Bilingual Chauffeur",

    svc_wedding_badge: "EVENTS & CELEBRATIONS",
    svc_wedding_title: "Wedding Chauffeur Service",
    svc_wedding_sub: "Elegance & Refinement for Your Special Day",
    svc_wedding_desc: "Flawless transfers for brides, grooms, and VIP guests in luxury armored sedans and SUVs. Chauffeurs in formal attire, immaculate punctuality, bespoke ambiance, and complete peace of mind on your wedding day.",
    svc_wedding_pill1: "Bridal Car",
    svc_wedding_pill2: "Formal Black Tie",
    svc_wedding_pill3: "Punctuality",
    svc_wedding_cta: "Quote Wedding Chauffeur",

    svc_escort_badge: "TACTICAL SECURITY",
    svc_escort_title: "Escort & Convoys",
    svc_escort_sub: "Convoy Management & Predictive Risk",
    svc_escort_desc: "High-complexity protective operations for dignitaries, mega-events, and corporate summits. Predictive route planning, counter-surveillance teams, outriders, and uninterrupted 24/7 telemetric monitoring.",
    svc_escort_pill1: "24/7 Telemetry",
    svc_escort_pill2: "Armored Escort",
    svc_escort_pill3: "Convoy Command",
    svc_escort_cta: "Plan Special Operation",

    // Markets
    markets_tag: "NATIONWIDE COVERAGE IN BRAZIL",
    markets_title: "Explore Our Markets",
    markets_lead: "Executive logistics and armored transport across the entire national territory. Strategic operational bases and immediate response in all major capitals.",
    learn_more: "Learn More",

    // FAQ
    faq_badge: "FREQUENTLY ASKED QUESTIONS",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How does the VIP Safe Driver service work?",
    faq_a1: "You book an executive driver who travels to your event or dinner. They take over the steering wheel of your own vehicle and drive you and your companions with safety, discretion, and comfort to your residence.",
    faq_q2: "Are your drivers certified and multilingual?",
    faq_a2: "Yes. Our executive chauffeurs hold certified qualifications in defensive/evasive driving, corporate protocol, and certified fluency in English and Spanish to accommodate international executives and expatriates.",
    faq_q3: "What ballistic protection level does your fleet offer?",
    faq_a3: "All our ground vehicles feature Level III-A ballistic armor certified by the Brazilian Army, utilizing advanced multi-layer ballistic glass and rigorous mechanical inspections.",

    // Fleet select options
    fleet_opt_1: "Armored Luxury Sedan",
    fleet_opt_2: "Armored Executive Sedan",
    fleet_opt_3: "Armored Executive SUV",
    fleet_opt_4: "VIP Executive Van",
    fleet_opt_5: "VIP Mini Van",
    fleet_opt_6: "Convoy Motorcoach",
    fleet_opt_7: "Private Jet",
    fleet_opt_8: "Executive Helicopter",
    fleet_opt_9: "Major Events Logistics",

    footer_rights: "All rights reserved.",
    footer_army: "Executive Armored Fleet Certified by the Brazilian Army."
  },

  es: {
    // Banner superior
    banner_badge: "Blindaje Nivel III-A",
    banner_cert: "Flota Ejecutiva Blindada Certificada por el Ejército",
    banner_cta: "Solicitar vehículo blindado",

    // Navbar
    nav_home: "Inicio",
    nav_solutions: "Soluciones",
    nav_fleet: "Flota",
    nav_cities: "Capitales",
    nav_about: "Nosotros",
    nav_faq: "FAQ",
    nav_book: "Reservar",
    nav_contact: "CONTÁCTENOS",

    // Hero Editorial
    hero_tag: "OPERACIÓN 24/7/365 • ATENCIÓN PREMIUM • VEHÍCULOS BLINDADOS",
    hero_title_1: "Su agenda en<br>movimiento.",
    hero_title_2: "SEGURIDAD<br>INTRANSIGENTE.",
    hero_lead_1: "Logística ejecutiva premium con flotas blindadas. Gestionamos desplazamientos de alta complejidad y flotas corporativas a medida.",
    hero_lead_2: "Monitoreo en tiempo real y el más alto estándar de atención corporativa desde el pre hasta el post viaje.",
    hero_cta_circle: "Solicite su Reserva",
    hero_cta_sub: "Presupuesto corporativo a demanda vía WhatsApp",
    hero_cta_fleet: "Conocer opciones de flota",
    badge_247: "Atención 24/7",
    badge_armor: "Blindaje Nivel III-A",
    badge_army: "Certificado por el Ejército",

    // Formulario Cotización
    form_title: "Cotización",
    form_detailed: "Demanda detallada",
    lbl_name: "Nombre / Responsable",
    lbl_phone: "WhatsApp / Teléfono",
    lbl_origin: "Lugar de Salida / Origen",
    lbl_destination: "Destino",
    lbl_fleet: "Flota Deseada",
    lbl_date: "Fecha del Traslado",
    btn_consult: "Consultar Disponibilidad",
    ph_name: "Nombre / Responsable",
    ph_phone: "WhatsApp / Teléfono",
    ph_origin: "Lugar de Salida / Origen",
    ph_destination: "Destino",
    ph_date: "Fecha del Traslado",

    // Franja Clientes
    clients_strip: "PRINCIPALES CLIENTES ATENDIDOS",

    // Sobre Nosotros - Misión, Visión y Valores
    about_tag: "ESTRUCTURA INSTITUCIONAL DE ALTO NIVEL • SOBRE NOSOTROS",
    about_title: "Excelencia y Rigor Operacional en Cada Trayecto",
    about_lead: "Conozca los pilares éticos, la visión de futuro y los compromisos innegociables que guían cada operación de Transfer Blindado.",
    mission_badge: "NUESTRA MISIÓN",
    mission_headline: "Conectar personas en movimiento con excelencia y seguridad absoluta",
    mission_quote: "“Proveer soluciones de movilidad terrestre blindada con los más rigurosos estándares de seguridad, discreción y eficiencia. Integramos tecnología de punta, conductores de élite y soporte ininterrumpido para garantizar una experiencia de viaje impecable, desde la planificación hasta el destino final.”",
    vision_badge: "NUESTRA VISIÓN",
    vision_headline: "Hacia dónde queremos llegar y cómo queremos ser reconocidos en el futuro",
    vision_quote: "“Ser la referencia absoluta en Brasil en gestión de logística segura con vehículos blindados y transporte ejecutivo premium, consolidando un ecosistema de movilidad que anticipa riesgos y redefine el concepto de tranquilidad en movimiento.”",
    values_badge: "NUESTROS VALORES",
    values_title: "Los Pilares de la Experiencia TRANSFER BLINDADO",
    values_sub: "Principios que guían a nuestros conductores, analistas de riesgo y central 24/7 en todo el territorio brasileño.",
    val_1_title: "Seguridad Intransigente",
    val_1_desc: "La preservación de la vida y de la integridad de nuestros pasajeros es nuestra prioridad absoluta. Operamos con inteligencia predictiva de mitigación de riesgos para una protección máxima, fluida y discreta.",
    val_2_title: "Excelencia en Cada Detalle",
    val_2_desc: "El alto estándar se manifiesta en los detalles invisibles. Desde la presentación impecable de nuestros chóferes hasta el mantenimiento riguroso de la flota blindada, cada etapa cumple el más alto nivel de exigencia.",
    val_3_title: "Disponibilidad Absoluta (24/7/365)",
    val_3_desc: "El tiempo es el activo más valioso de nuestros clientes. Nuestro ecosistema de soporte humano y monitoreo en tiempo real nunca descansa, garantizando respuestas inmediatas a cualquier hora.",
    val_4_title: "Confidencialidad y Prestigio",
    val_4_desc: "Comprendemos la importancia estratégica de cada desplazamiento. Tratamos cada itinerario con estricto secreto corporativo, asegurando total privacidad para autoridades, directivos y expatriados.",
    val_5_title: "Inteligencia en Movilidad",
    val_5_desc: "Más que transportar, gestionamos la jornada. Combinamos la experiencia de conductores locales con telemetría de vanguardia para anticipar imprevistos y transformar rutas en trayectos seguros y productivos.",

    // Flota
    div_1_badge: "",
    div_1_title: "FLOTA TERRESTRE",
    div_2_badge: "",
    div_2_title: "FLOTA AÉREA",
    fleet_ref_label: "Modelos de Referencia:",
    fleet_air_ref_label: "Aeronaves de Referencia:",
    fleet_avail_cities: "Disponible en Todo Brasil",
    fleet_avail_air: "Cobertura Nacional e Internacional",
    fleet_quote_cta: "Solicitar Cotización para esta Flota",
    lbl_select_model: "SELECCIONE EL MODELO",

    // Soluciones & Servicios Especializados
    svc_tag: "SOLUCIONES CORPORATIVAS DE ÉLITE",
    svc_title: "Servicios a Medida para Cada Necesidad",
    svc_lead: "Más allá de nuestra flota blindada, ofrecemos soluciones a medida en movilidad de élite: choferes ejecutivos altamente calificados, atención exclusiva para bodas y eventos de gala, y planificación táctica de seguridad.",
    svc_safedriver_badge: "SU COCHE CONDUCIDO",
    svc_safedriver_title: "Safe Driver VIP",
    svc_safedriver_sub: "Chófer Profesional en Su Propio Vehículo",
    svc_safedriver_desc: "¿Salió a cenar, evento corporativo o fiesta, consumió bebidas alcohólicas y prefiere no conducir? Nuestro chófer ejecutivo va hasta usted y conduce su propio coche con total discreción, confort y seguridad hasta su residencia.",
    svc_safedriver_pill1: "Regreso Seguro",
    svc_safedriver_pill2: "En Su Vehículo",
    svc_safedriver_pill3: "Disponibilidad 24/7",
    svc_safedriver_cta: "Contratar Safe Driver",

    svc_bilingual_badge: "COMITIVAS Y EXPATRIADOS",
    svc_bilingual_title: "Chóferes Bilingües",
    svc_bilingual_sub: "Fluidez en Inglés y Español",
    svc_bilingual_desc: "Recepción de primer nivel para delegaciones internacionales, diplomáticos e inversores extranjeros. Chóferes capacitados en protocolo corporativo internacional, confidencialidad estricta (NDA) y conducción evasiva avanzada.",
    svc_bilingual_pill1: "Inglés y Español",
    svc_bilingual_pill2: "Secreto Estricto (NDA)",
    svc_bilingual_pill3: "Etiqueta VIP",
    svc_bilingual_cta: "Solicitar Chófer Bilingüe",

    svc_wedding_badge: "EVENTOS Y CELEBRACIONES",
    svc_wedding_title: "Servicio de Bodas",
    svc_wedding_sub: "Elegancia y Distinción en su Gran Día",
    svc_wedding_desc: "Traslados impecables para novias, novios e invitados VIP en sedanes y SUVs blindados de lujo. Choferes en traje formal, puntualidad rigurosa, ambiente cuidado y total tranquilidad para el día de su boda.",
    svc_wedding_pill1: "Auto de Novia",
    svc_wedding_pill2: "Traje a Rigor",
    svc_wedding_pill3: "Puntualidad Rigurosa",
    svc_wedding_cta: "Cotizar Transporte para Bodas",

    svc_escort_badge: "SEGURIDAD TÁCTICA",
    svc_escort_title: "Escolta y Comitivas",
    svc_escort_sub: "Gestión de Convoyes y Análisis de Riesgo",
    svc_escort_desc: "Operaciones de alta complejidad para autoridades, cumbres económicas y grandes eventos. Planificación predictiva de rutas, equipos de contravigilancia y monitoreo telemétrico 24/7.",
    svc_escort_pill1: "Telemetría 24/7",
    svc_escort_pill2: "Escolta Armada",
    svc_escort_pill3: "Gestión de Convoy",
    svc_escort_cta: "Planificar Operación Especial",

    // Capitales / Mercados
    markets_tag: "COBERTURA EN TODO BRASIL",
    markets_title: "Explore Nuestros Mercados",
    markets_lead: "Logística ejecutiva y transporte blindado en todo el territorio nacional. Bases operativas estratégicas y respuesta inmediata en las principales capitales.",
    learn_more: "Saber Más",

    // FAQ
    faq_badge: "PREGUNTAS FRECUENTES",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Cómo funciona el servicio de Safe Driver VIP?",
    faq_a1: "Usted solicita nuestro chófer ejecutivo, quien se traslada hasta el lugar de su evento o cena. Él asume la conducción de su propio vehículo y lo traslada con absoluta seguridad, discreción y confort hasta su residencia u hotel.",
    faq_q2: "¿Los conductores están certificados y son multilingües?",
    faq_a2: "Sí. Nuestros conductores ejecutivos poseen certificaciones en conducción defensiva y evasiva, protocolo corporativo internacional y fluidez certificada en Inglés y Español para atender comitivas internacionales y expatriados.",
    faq_q3: "¿Cuál es el nivel de blindaje de la flota?",
    faq_a3: "Todos nuestros vehículos cuentan con blindaje balístico Nivel III-A certificado por el Ejército Brasileño, con cristales curvos de última generación y rigurosas inspecciones técnicas periódicas.",

    // Opciones de flota
    fleet_opt_1: "Sedán de Lujo Blindado",
    fleet_opt_2: "Sedán Ejecutivo Blindado",
    fleet_opt_3: "SUV Ejecutivo Blindado",
    fleet_opt_4: "Van Ejecutiva VIP",
    fleet_opt_5: "Mini Van VIP",
    fleet_opt_6: "Autobús de Comitiva",
    fleet_opt_7: "Avión Privado",
    fleet_opt_8: "Helicóptero Ejecutivo",
    fleet_opt_9: "Logística de Grandes Eventos",

    footer_rights: "Todos los derechos reservados.",
    footer_army: "Flota Ejecutiva Blindada Certificada por el Ejército Brasileño."
  }
};

/**
 * Apply selected language to all elements with data-i18n, data-i18n-ph, etc.
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = "pt";

  // Persist preference
  try {
    localStorage.setItem("drvn_selected_lang", lang);
    document.cookie = `googtrans=/pt/${lang}; path=/; max-age=31536000`;
    if (window.location.hostname) {
      document.cookie = `googtrans=/pt/${lang}; domain=${window.location.hostname}; path=/; max-age=31536000`;
    }
  } catch (e) {}

  const dict = TRANSLATIONS[lang];

  // 1. Update text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // 3. Update fleet select options if present
  const selectServico = document.getElementById("hero_servico");
  if (selectServico) {
    const opts = selectServico.querySelectorAll("option");
    let fleetIdx = 1;
    opts.forEach((opt) => {
      if (opt.value === "") {
        if (dict.lbl_fleet) opt.textContent = dict.lbl_fleet;
      } else {
        const key = `fleet_opt_${fleetIdx}`;
        if (dict[key]) {
          opt.textContent = dict[key];
        }
        fleetIdx++;
      }
    });
  }

  // 4. Update active button state and flag
  const flagEl = document.getElementById("activeLangFlag");
  if (flagEl) {
    const flagMap = {
      pt: "/static/images/flags/br.svg",
      en: "/static/images/flags/us.svg",
      es: "/static/images/flags/es.svg"
    };
    if (flagMap[lang]) flagEl.src = flagMap[lang];
  }
  document.querySelectorAll(".drvn-lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    if (btnLang === lang) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  // 5. Update HTML lang attribute
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  // 6. Trigger Google Translate bridge for deep paragraphs & dynamic content
  triggerGoogleTranslate(lang);
}

/**
 * Headless Google Translate bridge for deep paragraphs & dynamic content
 */
function triggerGoogleTranslate(lang) {
  function tryApply() {
    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
      const targetLang = lang === "pt" ? "pt" : lang;
      if (googleSelect.value !== targetLang) {
        googleSelect.value = targetLang;
        googleSelect.dispatchEvent(new Event("change"));
      }
      return true;
    }
    return false;
  }

  if (!tryApply()) {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      if (tryApply() || attempts >= 10) {
        clearInterval(timer);
      }
    }, 350);
  }
}

/**
 * Initialize Language Switcher Buttons
 */
document.addEventListener("DOMContentLoaded", () => {
  // Listen for clicks on language buttons
  document.querySelectorAll(".drvn-lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Restore saved language or default to pt
  let savedLang = "pt";
  try {
    savedLang = localStorage.getItem("drvn_selected_lang") || "pt";
  } catch (e) {}

  if (savedLang && TRANSLATIONS[savedLang]) {
    setLanguage(savedLang);
  }
});
