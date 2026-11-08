/**
 * TRANSFER BLINDADO - Progressive Web App Service Worker
 * Estratégia Network-First com Fallback de Cache para alta disponibilidade
 * em celulares, tablets, notebooks e desktops sem reter versões antigas.
 */

const CACHE_NAME = "transfer-blindado-pwa-v2";
const PRECACHE_ASSETS = [
  "/",
  "/cotacao",
  "/reserva",
  "/static/manifest.json",
  "/static/css/style.css",
  "/static/js/main.js",
  "/static/js/translations.js",
  "/static/images/logo-oficial.png",
  "/static/images/pwa/icon-192.png",
  "/static/images/pwa/icon-512.png",
  "/static/images/pwa/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch(() => {
        // Falha silenciosa caso algum asset opcional não esteja acessível no momento
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Ignorar requisições que não sejam GET ou de outros esquemas/domínios externos de tradução
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) {
    return;
  }

  // Network-First: tenta buscar a versão mais recente na rede e atualiza o cache; se offline, usa o cache
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (req.mode === "navigate") {
            return caches.match("/");
          }
        });
      })
  );
});

