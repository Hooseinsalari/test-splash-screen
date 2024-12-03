self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/manifest.json",
        "/android-chrome-192x192.png",
        "/android-chrome-512x512.png",
        // Add other static assets to cache
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
