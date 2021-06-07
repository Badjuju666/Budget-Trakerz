

const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  
  
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

//these code will do the remain pwa works like install and if the user uninstall the install prompt will fetch again.  
//you'll need these sizes icons in png for intalled pwa icons to works on all devices.
//let me know if you have any questions//thanks :)