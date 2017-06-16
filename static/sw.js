var CACHE_NAME = 'hyperapp-pwa';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll([
      '/',
      '/index.js',
      '/index.css'
    ]))
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(response => response
      ? response
      : fetch(event.request)
    )
  )
})
