self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('zist-cache').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
