const CACHE_NAME = "msp-v1";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/product.html",
  "/faq.html",
  "/checkout.html",
  "/styles/main.min.css",
  "/scripts/main.min.js",
  "/scripts/ab-testing.min.js",
  "/scripts/analytics.min.js",
  "/scripts/register-sw.js",
  "/assets/logo.svg",
  "/assets/hero-pattern.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch(() => {});
          });
          return response;
        })
        .catch(() => caches.match("/index.html"));
    })
  );
});
