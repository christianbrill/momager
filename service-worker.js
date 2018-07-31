var cacheName = 'christianbrill';
var filesToCache = [
    '/',
    '/index.html',
    '/index_no_splash.html',
    '/assets/css/erinnerungen.css',
    '/assets/css/laufen.css',
    '/assets/css/main.css',
    '/assets/css/musik.css',
    '/assets/css/rezepte.css',
    '/assets/css/hunde.css',
    '/assets/css/eulen.css',
    '/assets/css/achtziger.css',
    '/assets/css/schlager.css',
    '/assets/css/spassiges.css',
    '/assets/css/tierisches.css',
    '/assets/css/wissenswertes.css',
    '/assets/img/icons/Adventure_Map.svg',
    '/assets/img/icons/Centaur.svg',
    '/assets/img/icons/Destructive_Magic.svg',
    '/assets/img/icons/Food.svg',
    '/assets/img/icons/Medusa.svg',
    '/assets/img/icons/paw.png',
    '/assets/img/icons/Poison_Spider.svg',
    '/assets/img/icons/Spell_Scroll.svg',
    '/assets/img/icons/splashscreen/1.svg',
    '/assets/img/icons/splashscreen/2.svg',
    '/assets/img/icons/splashscreen/3.svg',
    '/assets/img/icons/splashscreen/4.svg',
    '/assets/img/icons/splashscreen/5.svg',
    '/assets/img/icons/splashscreen/6.svg',
    '/assets/img/icons/splashscreen/7.svg',
    '/assets/img/icons/splashscreen/8.svg',
    '/assets/img/icons/splashscreen/9.svg',
    '/assets/img/icons/splashscreen/10.svg',
    '/assets/img/icons/splashscreen/11.svg',
    '/assets/img/icons/splashscreen/12.svg',
    '/assets/img/icons/splashscreen/13.svg',
    '/assets/img/icons/splashscreen/14.svg',
    '/assets/img/icons/splashscreen/15.svg',
    '/assets/img/icons/splashscreen/16.svg',
    '/assets/img/icons/splashscreen/17.svg',
    '/assets/img/icons/splashscreen/18.svg',
    '/assets/img/icons/splashscreen/19.svg',
    '/assets/img/icons/splashscreen/20.svg',
    '/assets/img/icons/splashscreen/21.svg',
    '/assets/img/icons/splashscreen/22.svg',
    '/assets/img/icons/splashscreen/23.svg',
    '/assets/img/icons/splashscreen/24.svg',
    '/assets/img/icons/splashscreen/25.svg',
    '/assets/img/icons/splashscreen/26.svg',
    '/assets/img/icons/splashscreen/27.svg',
    '/assets/img/icons/splashscreen/28.svg',
    '/assets/img/80s.jpg',
    '/assets/img/cassette.jpg',
    '/assets/img/schlager.jpg',
    '/assets/js/main.js',
    '/pages/achtziger.html',
    '/pages/erinnerungen.html',
    '/pages/laufen.html',
    '/pages/musik.html',
    '/pages/rezepte.html',
    '/pages/spassiges.html',
    '/pages/tierisches.html',
    '/pages/wissenswertes.html',
    '/pages/hunde.html',
    '/pages/eulen.html',
    '/pages/schlager.html'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});