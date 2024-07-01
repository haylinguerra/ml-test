const CACHE_NAME = 'my-cache';

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                'static/js/bundle.js',
            ])
            .then(() => this.skipWaiting());
        })
    );
});

this.addEventListener('activate', event => {
        event.waitUntil(this.clients.claim());
});

this.addEventListener("fetch", (event) => {
    event.respondWith(
      (async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
              return cachedResponse;
        } else {
            const cache = await caches.open(CACHE_NAME);
            const response = await fetch(event.request);
            if (event.request.url.includes("items")) {
                cache.put(event.request, response.clone());
            };

            return response;
        }
      })(),
    );
  });