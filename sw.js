self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("game-companion").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});
