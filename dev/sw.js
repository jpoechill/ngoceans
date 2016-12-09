var cacheName = 'oceans-cache-v6';
var allCaches = [cacheName];
var requiredFiles = [
    '/',
    'index.html',
    'css/styles.main.min.css',
    'js/main.min.js',
    'ngViews/footer/footer.html',
    'ngViews/login/signin.html',
    'ngViews/login/signup.html',
    'ngViews/login/signout.html',
    'ngViews/navbar/navbar.html',
    'ngViews/user/account.html',
];

// Installing ServiceWorker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            // Cache all needed files
            console.log('[install] Caches opened, adding all core components to cache');
            return cache.addAll(requiredFiles);
        })
        .then(function() {
            console.log('[install] All required resources have been cached, we\'re good!');
            return self.skipWaiting();
        })
    );
});

// Fetching Events
self.addEventListener('fetch', function (event) {
    // console.log("Made a request through the ServiceWorker for: " + event.request.url);

    // Cache first – imgs, js, support files,
    // If online – queue for update

    // Repond to event fetch requests with network version, unless cached already
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Find matching request
            // console.log("Making fetch request");

            return response || fetch(event.request);
            // Fetch from service-worker, if not – go to network
        })
    )
});

// Activating
self.addEventListener('activate', function(event) {
    console.log('[activate] Activating ServiceWorker!');
    console.log('[activate] Claiming this ServiceWorker!');

    // Delete old caches
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.filter(function(cacheName) {
              return cacheName.startsWith('oceans-') &&
                 !allCaches.includes(cacheName);
            }).map(function(cacheName) {
              return caches.delete(cacheName);
            })
          );
        })
    );
});

// function parseURL(url) {
//     var query = url;
//     var result = {};
//     query.split("&").forEach(function(part) {
//       var item = part.split("=");
//       result[item[0]] = decodeURIComponent(item[1]);
//     });
//
//     return result.orig + result.dest;
// }
