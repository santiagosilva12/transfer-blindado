/**
 * TRANSFER BLINDADO - Core JavaScript Logic
 * Executive Mobility & Armored Transportation
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenuAutoClose();
  initPWA();
  initSwiperCapitais();
  initFleetCarousel();
  initReservationForm();
  initHeroQuickForm();
  initPreselectionFromUrl();
  initCategoryFleetModals();
  initQuotationPage();
});

/**
 * 1. Navbar Scroll Effect
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".drvn-navbar, .tb-navbar, #mainNavbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * 1.1 Fechar automaticamente o menu mobile/tablet ao clicar em um link de navegação
 */
function initMobileMenuAutoClose() {
  const navbarCollapse = document.getElementById("navbarContent");
  if (!navbarCollapse) return;

  const navLinks = navbarCollapse.querySelectorAll(".drvn-nav-link, .drvn-btn-gold");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
          const instance = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
          instance.hide();
        } else {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });
}

/**
 * 1.2 Registro do Service Worker para PWA (Celulares, Tablets, Notebooks e Desktops)
 */
function initPWA() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch(() => {
          // Fallback caso servido a partir de subpasta estática
          navigator.serviceWorker.register("/static/sw.js").catch(() => {});
        });
    });
  }
}

/**
 * 2. Swiper.js Carrossel de Capitais (Explore Nossos Mercados)
 */
function initSwiperCapitais() {
  const swiperElem = document.querySelector(".capitais-swiper");
  if (!swiperElem) return;

  if (typeof Swiper !== "undefined") {
    new Swiper(".capitais-swiper", {
      slidesPerView: 1.15,
      spaceBetween: 20,
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      speed: 2400,
      autoplay: {
        delay: 11000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 28,
        },
      },
    });
  }
}

/**
 * 2.1 Swiper.js Carrosséis da Frota Terrestre (Uma categoria abaixo da outra com autoplay)
 */
function initFleetCarousel() {
  if (typeof Swiper === "undefined") return;

  const categories = ["sedan", "suv", "van", "onibus"];
  const categorySwipers = {};

  categories.forEach((cat) => {
    const mainElem = document.querySelector(`.fleet-main-swiper-${cat}`);
    const thumbsElem = document.querySelector(`.fleet-thumbs-swiper-${cat}`);
    const prevBtn = document.querySelector(`[data-category="${cat}"] .drvn-fleet-prev`);
    const nextBtn = document.querySelector(`[data-category="${cat}"] .drvn-fleet-next`);
    if (!mainElem) return;

    let thumbsSwiper = null;
    if (thumbsElem) {
      thumbsSwiper = new Swiper(`.fleet-thumbs-swiper-${cat}`, {
        slidesPerView: 1.8,
        spaceBetween: 10,
        speed: 2200,
        watchSlidesProgress: true,
        freeMode: false,
        breakpoints: {
          400: { slidesPerView: 2.2, spaceBetween: 12 },
          576: { slidesPerView: 3, spaceBetween: 14 },
          768: { slidesPerView: 3.5, spaceBetween: 16 },
          992: { slidesPerView: 4.5, spaceBetween: 18 },
          1200: { slidesPerView: 5, spaceBetween: 20 },
        },
      });
    }

    const mainSwiper = new Swiper(`.fleet-main-swiper-${cat}`, {
      slidesPerView: 1,
      spaceBetween: 28,
      speed: 2800,
      autoHeight: true,
      autoplay: {
        delay: 14000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    // Ao atingir o último modelo, retorna suavemente ao primeiro em ritmo bem lento
    mainSwiper.on("reachEnd", () => {
      setTimeout(() => {
        if (mainSwiper && !mainSwiper.destroyed && mainSwiper.isEnd && mainSwiper.autoplay && mainSwiper.autoplay.running) {
          mainSwiper.slideTo(0, 2800);
        }
      }, 14000);
    });

    // Sincroniza o seletor de miniaturas com o modelo ativo de forma bem lenta e suave
    mainSwiper.on("slideChange", () => {
      if (thumbsSwiper && !thumbsSwiper.destroyed) {
        thumbsSwiper.slideTo(mainSwiper.activeIndex, 2200);
      }
    });

    categorySwipers[cat] = { main: mainSwiper, thumbs: thumbsSwiper };

    // Clique direto nas miniaturas para selecionar o modelo com deslize suave
    const thumbCards = document.querySelectorAll(`.drvn-fleet-thumb-card[data-category="${cat}"]`);
    thumbCards.forEach((card) => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-index"), 10);
        if (!isNaN(idx)) {
          mainSwiper.slideTo(idx, 1800);
        }
      });
    });
  });

  // Rolagem suave nos botões de categoria do topo
  const categoryPills = document.querySelectorAll('.drvn-category-nav-pill[href^="#"]');
  categoryPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      const targetId = pill.getAttribute('href');
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  });
}

/**
 * 3. Formulário de Reserva & Integração WhatsApp
 * Requisito: Interceptar submit sem POST no backend, capturar campos,
 * formatar a mensagem e abrir via window.open na API do WhatsApp:
 * https://wa.me/5511986829141?text= + encodeURIComponent(...)
 */
function initReservationForm() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Captura dos valores
    const nome = document.getElementById("nome")?.value.trim() || "";
    const empresa = document.getElementById("empresa")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const telefone = document.getElementById("telefone")?.value.trim() || "";
    const detalhes = document.getElementById("detalhes")?.value.trim() || "";

    // Captura dos checkboxes selecionados
    const checkboxes = document.querySelectorAll('input[name="tipo_servico"]:checked');
    const servicos = Array.from(checkboxes).map((cb) => cb.value);

    // Validação mínima amigável
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha os campos obrigatórios (Nome, E-mail Corporativo e Telefone/WhatsApp).");
      return;
    }

    if (servicos.length === 0) {
      const confirmProceed = confirm("Nenhum tipo de serviço específico foi selecionado. Deseja prosseguir mesmo assim?");
      if (!confirmProceed) return;
    }

    // Montagem da mensagem formatada para WhatsApp
    const linhas = [];
    linhas.push("🛡️ *SOLICITAÇÃO DE ORÇAMENTO - TRANSFER BLINDADO*");
    linhas.push("──────────────────────────");
    linhas.push(`👤 *Responsável:* ${nome}`);
    if (empresa) {
      linhas.push(`🏢 *Empresa:* ${empresa}`);
    }
    linhas.push(`✉️ *E-mail Corporativo:* ${email}`);
    linhas.push(`📱 *Telefone / WhatsApp:* ${telefone}`);
    linhas.push("");
    linhas.push("📋 *Tipo(s) de Serviço Solicitado(s):*");
    if (servicos.length > 0) {
      servicos.forEach((s) => linhas.push(`  • ${s}`));
    } else {
      linhas.push("  • A definir com a assessoria operacional");
    }

    if (detalhes) {
      linhas.push("");
      linhas.push("📝 *Detalhes da Demanda:*");
      linhas.push(`_${detalhes}_`);
    }

    linhas.push("");
    linhas.push("──────────────────────────");
    linhas.push("⚡ *Solicitado via Portal Oficial Transfer Blindado*");

    const mensagemFinal = linhas.join("\n");
    const whatsappUrl = `https://wa.me/5511986829141?text=${encodeURIComponent(mensagemFinal)}`;

    // Redireciona via window.open conforme especificado
    window.open(whatsappUrl, "_blank");
  });
}

/**
 * 4. Pré-seleção inteligente a partir de parâmetros de URL (?servico=... / ?cidade=...)
 */
function initPreselectionFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const servicoParam = urlParams.get("servico");
  const cidadeParam = urlParams.get("cidade");

  // Marca checkbox caso corresponda
  if (servicoParam) {
    const checkboxes = document.querySelectorAll('input[name="tipo_servico"]');
    checkboxes.forEach((cb) => {
      if (
        cb.value.toLowerCase().includes(servicoParam.toLowerCase()) ||
        servicoParam.toLowerCase().includes(cb.value.toLowerCase())
      ) {
        cb.checked = true;
      }
    });
  }

  // Preenche cidade de interesse no campo de detalhes se o campo estiver vazio
  if (cidadeParam) {
    const detalhesTextarea = document.getElementById("detalhes");
    if (detalhesTextarea && !detalhesTextarea.value) {
      detalhesTextarea.value = `Demanda para a praça de: ${cidadeParam}. `;
    }
  }
}

/**
 * 5. Formulário Rápido do Hero (Home Booking Widget)
 */
function initHeroQuickForm() {
  const form = document.getElementById("heroQuickForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("hero_nome")?.value.trim() || "";
    const telefone = document.getElementById("hero_telefone")?.value.trim() || "";
    const servico = document.getElementById("hero_servico")?.value || "";
    const origem = document.getElementById("hero_origem")?.value.trim() || "";
    const destino = document.getElementById("hero_destino")?.value.trim() || "";
    const dataRaw = document.getElementById("hero_data")?.value || "";
    const tipoViagem = form.querySelector('input[name="hero_tipo_viagem"]:checked')?.value || "Só Ida";

    if (!nome || !telefone) {
      alert("Por favor, preencha os campos obrigatórios (Nome e Telefone/WhatsApp).");
      return;
    }

    // Formatar data para DD/MM/AAAA se preenchida
    let dataFormatada = "";
    if (dataRaw) {
      const partes = dataRaw.split("-");
      if (partes.length === 3) {
        dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
      } else {
        dataFormatada = dataRaw;
      }
    }

    const linhas = [];
    linhas.push("🛡️ *COTAÇÃO RÁPIDA - TRANSFER BLINDADO*");
    linhas.push("──────────────────────────");
    linhas.push(`🔄 *Tipo de Trajeto:* ${tipoViagem}`);
    linhas.push(`👤 *Responsável:* ${nome}`);
    linhas.push(`📱 *Telefone / WhatsApp:* ${telefone}`);
    linhas.push(`🚘 *Frota Desejada:* ${servico}`);
    if (origem) {
      linhas.push(`🛫 *Saída / Origem:* ${origem}`);
    }
    if (destino) {
      linhas.push(`🏁 *Destino:* ${destino}`);
    }
    if (dataFormatada) {
      linhas.push(`📅 *Data do Translado:* ${dataFormatada}`);
    }
    linhas.push("──────────────────────────");
    linhas.push("⚡ *Solicitado via Portal Oficial Transfer Blindado*");

    const mensagemFinal = linhas.join("\n");
    const whatsappUrl = `https://wa.me/5511986829141?text=${encodeURIComponent(mensagemFinal)}`;

    window.open(whatsappUrl, "_blank");
  });
}

/**
 * 6. Modais Exclusivos de Cotação da Frota Terrestre (Sedan, SUV, Van, Ônibus)
 */
function initCategoryFleetModals() {
  const fleetModals = document.querySelectorAll(".drvn-fleet-modal");
  if (!fleetModals.length) return;

  // Pré-selecionar o modelo específico clicado ao abrir o modal
  fleetModals.forEach((modalEl) => {
    modalEl.addEventListener("show.bs.modal", (event) => {
      const trigger = event.relatedTarget;
      if (!trigger) return;

      const modelId = trigger.getAttribute("data-model-id");
      if (modelId) {
        const targetRadio = modalEl.querySelector(`input[type="radio"][data-model-id="${modelId}"]`);
        if (targetRadio) {
          targetRadio.checked = true;
          // Scroll suave para visualização do radio card se necessário
          targetRadio.closest(".drvn-model-radio-card")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  });

  // Envio do formulário do modal para o WhatsApp
  const categoryForms = document.querySelectorAll(".fleet-category-modal-form");
  categoryForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const catSlug = form.getAttribute("data-category") || "";
      const catTitleEl = form.closest(".modal-content")?.querySelector(".modal-title-cat");
      const catNome = catTitleEl ? catTitleEl.textContent.trim() : catSlug.toUpperCase();

      const selectedModelInput = form.querySelector(`input[name="modal_model_${catSlug}"]:checked`);
      const modeloEscolhido = selectedModelInput ? selectedModelInput.value : "Padrão da Categoria";

      const selectedTripInput = form.querySelector(`input[name="modal_trip_${catSlug}"]:checked`);
      const tipoTrajeto = selectedTripInput ? selectedTripInput.value : "Só Ida";

      const nome = form.querySelector('input[name="modal_nome"]')?.value.trim() || "";
      const telefone = form.querySelector('input[name="modal_whatsapp"]')?.value.trim() || "";
      const origem = form.querySelector('input[name="modal_origem"]')?.value.trim() || "";
      const destino = form.querySelector('input[name="modal_destino"]')?.value.trim() || "";
      const dataRaw = form.querySelector('input[name="modal_data"]')?.value || "";
      const horario = form.querySelector('input[name="modal_horario"]')?.value || "";
      const obs = form.querySelector('textarea[name="modal_obs"]')?.value.trim() || "";

      if (!nome || !telefone) {
        alert("Por favor, preencha os campos obrigatórios (Nome e Telefone/WhatsApp).");
        return;
      }

      // Formatar data para DD/MM/AAAA se preenchida
      let dataFormatada = "";
      if (dataRaw) {
        const partes = dataRaw.split("-");
        if (partes.length === 3) {
          dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
        } else {
          dataFormatada = dataRaw;
        }
      }

      const linhas = [];
      linhas.push("🛡️ *SOLICITAÇÃO DE COTAÇÃO - TRANSFER BLINDADO*");
      linhas.push("──────────────────────────");
      linhas.push(`🚘 *Categoria:* ${catNome}`);
      linhas.push(`⭐ *Opção / Configuração:* ${modeloEscolhido}`);
      linhas.push(`🔄 *Tipo de Trajeto:* ${tipoTrajeto}`);
      linhas.push("");
      linhas.push(`👤 *Responsável:* ${nome}`);
      linhas.push(`📱 *Telefone / WhatsApp:* ${telefone}`);
      if (origem) {
        linhas.push(`🛫 *Local de Saída / Origem:* ${origem}`);
      }
      if (destino) {
        linhas.push(`🏁 *Destino:* ${destino}`);
      }
      if (dataFormatada) {
        const horaStr = horario ? ` às ${horario}` : "";
        linhas.push(`📅 *Data do Translado:* ${dataFormatada}${horaStr}`);
      }
      if (obs) {
        linhas.push("");
        linhas.push(`📝 *Observações / Necessidades:* ${obs}`);
      }
      linhas.push("──────────────────────────");
      linhas.push("⚡ *Solicitado via Portal Oficial Transfer Blindado*");

      const mensagemFinal = linhas.join("\n");
      const whatsappUrl = `https://wa.me/5511986829141?text=${encodeURIComponent(mensagemFinal)}`;

      // Fechar modal do Bootstrap de forma limpa
      const modalEl = form.closest(".modal");
      if (modalEl && typeof bootstrap !== "undefined" && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      // Abre WhatsApp
      window.open(whatsappUrl, "_blank");
    });
  });
}

/**
 * 7. Tela Dedicada de Cotação de Frota (/cotacao)
 */
function initQuotationPage() {
  const quotePage = document.querySelector(".drvn-quote-page-section");
  if (!quotePage) return;

  function switchQuotationCategory(catSlug, modelToSelect) {
    // 1. Atualizar botões de seleção de categoria
    document.querySelectorAll(".drvn-quote-cat-btn").forEach((btn) => {
      const isTarget = btn.getAttribute("data-cat-slug") === catSlug;
      btn.classList.toggle("active", isTarget);

      if (isTarget) {
        const name = btn.getAttribute("data-cat-name");
        const sub = btn.getAttribute("data-cat-sub");
        const titleEl = document.getElementById("currentCatTitle");
        const subEl = document.getElementById("currentCatSubtitle");
        if (titleEl && name) titleEl.textContent = name;
        if (subEl && sub) subEl.textContent = sub;
      }
    });

    // 2. Alternar exibição dos painéis de formulário
    document.querySelectorAll(".drvn-category-form-panel").forEach((panel) => {
      const isMatch = panel.getAttribute("data-category") === catSlug;
      panel.classList.toggle("d-none", !isMatch);
    });

    // 3. Pré-selecionar modelo específico se informado
    if (modelToSelect) {
      const radio = document.querySelector(`input[name="page_model_${catSlug}"][data-model-id="${modelToSelect}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
  }

  // Ler parâmetros da URL (?categoria=...&modelo=...)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = (urlParams.get("categoria") || "sedan").toLowerCase();
  const modelParam = urlParams.get("modelo") || "";

  if (catParam) {
    switchQuotationCategory(catParam, modelParam);
  }

  // Cliques nos botões de alternância de categoria
  document.querySelectorAll(".drvn-quote-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.getAttribute("data-cat-slug");
      switchQuotationCategory(slug);

      // Atualizar URL sem recarregar a página
      const newUrl = new URL(window.location);
      newUrl.searchParams.set("categoria", slug);
      newUrl.searchParams.delete("modelo");
      window.history.replaceState({}, "", newUrl);
    });
  });

  // Envio dos formulários da tela de cotação para o WhatsApp
  document.querySelectorAll(".fleet-page-quotation-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const catSlug = form.getAttribute("data-category") || "";
      const catTitleEl = document.getElementById("currentCatTitle");
      const catNome = catTitleEl ? catTitleEl.textContent.trim() : catSlug.toUpperCase();

      const selectedModelInput = form.querySelector(`input[name="page_model_${catSlug}"]:checked`);
      const modeloEscolhido = selectedModelInput ? selectedModelInput.value : "Padrão da Categoria";

      const selectedTripInput = form.querySelector(`input[name="page_trip_${catSlug}"]:checked`);
      const tipoTrajeto = selectedTripInput ? selectedTripInput.value : "Só Ida";

      const nome = form.querySelector('input[name="page_nome"]')?.value.trim() || "";
      const telefone = form.querySelector('input[name="page_whatsapp"]')?.value.trim() || "";
      const origem = form.querySelector('input[name="page_origem"]')?.value.trim() || "";
      const destino = form.querySelector('input[name="page_destino"]')?.value.trim() || "";
      const dataRaw = form.querySelector('input[name="page_data"]')?.value || "";
      const horario = form.querySelector('input[name="page_horario"]')?.value || "";
      const obs = form.querySelector('textarea[name="page_obs"]')?.value.trim() || "";

      if (!nome || !telefone) {
        alert("Por favor, preencha os campos obrigatórios (Nome e Telefone/WhatsApp).");
        return;
      }

      let dataFormatada = "";
      if (dataRaw) {
        const partes = dataRaw.split("-");
        if (partes.length === 3) {
          dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
        } else {
          dataFormatada = dataRaw;
        }
      }

      const linhas = [];
      linhas.push("🛡️ *SOLICITAÇÃO DE COTAÇÃO - TRANSFER BLINDADO*");
      linhas.push("──────────────────────────");
      linhas.push(`🚘 *Categoria:* ${catNome}`);
      linhas.push(`⭐ *Opção / Configuração:* ${modeloEscolhido}`);
      linhas.push(`🔄 *Tipo de Trajeto:* ${tipoTrajeto}`);
      linhas.push("");
      linhas.push(`👤 *Responsável:* ${nome}`);
      linhas.push(`📱 *Telefone / WhatsApp:* ${telefone}`);
      if (origem) {
        linhas.push(`🛫 *Local de Saída / Origem:* ${origem}`);
      }
      if (destino) {
        linhas.push(`🏁 *Destino:* ${destino}`);
      }
      if (dataFormatada) {
        const horaStr = horario ? ` às ${horario}` : "";
        linhas.push(`📅 *Data do Translado:* ${dataFormatada}${horaStr}`);
      }
      if (obs) {
        linhas.push("");
        linhas.push(`📝 *Observações / Necessidades:* ${obs}`);
      }
      linhas.push("──────────────────────────");
      linhas.push("⚡ *Solicitado via Portal Oficial Transfer Blindado*");

      const mensagemFinal = linhas.join("\n");
      const whatsappUrl = `https://wa.me/5511986829141?text=${encodeURIComponent(mensagemFinal)}`;
      window.open(whatsappUrl, "_blank");
    });
  });
}



