'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9481da048a241f1547d0d749e7bf8449",
".git/config": "e0b30f950454d14a492ab30745b2f85f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6aac9c367688a7d12bd3f000797a8500",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e8e96f56f7d3dc2a3281c3c615957510",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04ee1f364382f7852d81abe71cb19eb7",
".git/logs/refs/heads/main": "9d8ef94d3489a846867f13ff83696619",
".git/logs/refs/remotes/origin/main": "8c046fdc796c81de7d791c6d6cb21289",
".git/objects/03/c3014366f08d0548706cf7402a060894bc9e31": "aa0b80974badba307bec3079be11ec63",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/0fe633b90c978a53041eb111a73d85868fa8f4": "fefb394d164b112b8fda68dac95787d3",
".git/objects/09/2cf2b073bff1ccf7fa99956b48550af444173a": "9c142e332ee4c92f07be4f1dc2571723",
".git/objects/0d/92d6ccdee2b33fe3087a8a4f1c44ccebc084ca": "a2cc0d832d838a1cfd0d5026597e0840",
".git/objects/11/6ded644cf70e6cf3b912613ef36bb7c3340d68": "aaa16d7985bbac28bcd19933a8980ffb",
".git/objects/16/20d205c830b759cdb28083db693557ecec6001": "14c14578c655c19463d137f51bb95fe6",
".git/objects/1b/035c1ee2c164c9bf579432e614c1eeadfc3896": "52204cd82139df9f1faba74cb667008b",
".git/objects/1f/001715ed755df7dd1f23a087c879449ae2055e": "bcdafc4c1b4e694fdee35b5cbc33092b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/bed9c42c4585a9462149b2d5ab4a13164b0484": "c384ccf41c2c7b0052b7b2fd8c15a490",
".git/objects/2a/5c584e3e9dffb27687392886e7145e65df7990": "d6752754800c1532e04014b070404871",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/fe7836c17c8511187a65647c9c85e90cce6693": "558787cf4064d93c4e0617afee265726",
".git/objects/39/986c232d9823e3811de52be3f5ec70846add10": "e08c210b8e4015c33466b31a1189f1ac",
".git/objects/3f/ee286392baf212f1d4edda7efea72fe50aa70e": "ea889ffba7d26fd67953708110a0f339",
".git/objects/40/1c3a0a6ae743ef0618ce8aa76439683237d5f8": "c7777c60678e0650522f75c1fb46ce3a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/51/d89a75b90b253c4881ae8369e12d7597701e31": "e17c62e6bfafe11b4062fd235d5eac1a",
".git/objects/54/7002a5db92bf38ed9dffdf840e1d0313ff0cb5": "994f7d7539355443c6b2f3fdb56b04f6",
".git/objects/5f/0f62dd1f8f40a2e35fa8b49c698f5f23e463eb": "5ab21f66215d20e3d0d0079c9527629c",
".git/objects/60/199cb392a51b7afb53279d27499222bc5dba05": "39c116b2bdcd2d75a911d487f1351f9a",
".git/objects/61/5729f47599ad46fbb3b77ab4879bbe7dd8cddd": "f430adc60ed4c4f81eebf9c8025eb577",
".git/objects/64/00b0a5ee44db71c1ba66542d4298b701da2b1d": "f06c4284cf29acdfb84e32d4a5802f5a",
".git/objects/65/5e567d084fcacc1417c97b8275f5be3e9854ae": "30eadc69413785f6ec8ea91ad42ea450",
".git/objects/68/924fe1595ef060a09953053ba9b405649f9d0c": "ca43064f82bddce9ec47d49323b2cbe1",
".git/objects/6c/8bde2469f65fbfc0d45487424fac80e211a57f": "4a43049cbb2e29cb855676e04fb3f84c",
".git/objects/72/7cf07101ba6faac347e4d426d55dbe0b7a544b": "9e5a55813969c47098a955d143a2618d",
".git/objects/78/0e0ed8de672fa8cba0bc7e1c66d1c6a68a4cef": "9bba04e6e1bf9875b932ba328d4275be",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/fb4ec8e1a2648354fb05610ecbfedcd731ea45": "af977af5d7fcb5c46a095ebe239a6ba3",
".git/objects/87/1566095eaf38aa39a713b4d401108c800ff216": "e61bfab347791e6f9933ec224dc59664",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/fbef327f9426abc88dd602f911e79790e8dee8": "491d1a43f221fb605a229c25d5581aad",
".git/objects/99/8d7d533516a8238efb0955e4dcb04b4d201fdf": "71bb5ae85de87f0167930733a71837e5",
".git/objects/9e/e560093b0fc35de293749d47e998080a870ec7": "c8ae90a852d88e667f975d817c0fdbc2",
".git/objects/a0/5fe13c612478d4469912a97a2f46aac9cd0b7d": "6996ad54bc58bd5c7019d41d34d0d5e4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c7987fdce323e3fcf4c2f2b5c325daf8a23eab": "f0bc7b66413ac497038753ad7a6faef1",
".git/objects/a4/104fc4f343e3a6451080804c44bf23755c34a6": "6b49d989a26e3b7f15d189e69b25ffd5",
".git/objects/a5/3060cda2434c670a46811cb6534d2240c2db40": "1a1e4fc317383f9848d8e816d7179b19",
".git/objects/a5/319c753d125d08fe018e773db55a96874706e2": "ede190b8dbfca7a2c3f08c91382eebf0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/db32713526be9f9fa2904c6327da39af5dd4a2": "f23d60b015ee6a92b3a25cd341b508af",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/bbc7f84a82aa3caad3fc40665b511910699d2b": "a0ab082d7ffd1835111dece5e7d75dae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/a4fde24d4d3c484f1ecce4545c9d7909477dbc": "d925cb50383ba8867178d7d62a5b6ebf",
".git/objects/be/f431f84a67a32bdc391cf06cfb3e09502fdac5": "3b62f08130082bf725329ab24f0738a3",
".git/objects/bf/ac9760d6ed3af52855c747f8201851fb0c0841": "210b65f98f19125f6337934dff827c89",
".git/objects/c5/916accdd454b8b8942a0621f696b6652b6363e": "f7501b33eca54ceb9e59bdbde6af058f",
".git/objects/ce/a77c382c6f16d1a5b57c951230f1f2b6c77fd6": "b54e57418a32cd0231308fbf4c15a4f9",
".git/objects/cf/a6bddd22ec39d68223a38cfdb7800aa22596a9": "66c2c9e1e373e3daa86e1de8e34d1cc9",
".git/objects/d8/cf9c84e08790c540ea1a3d48c082bdc273eacc": "30c5ba99408e453d5efcf9f4678aeeaa",
".git/objects/db/5c13535fd0967cb040f596ac549eaba6185546": "e5cb9308e315be4a03ad67ace9b76411",
".git/objects/e2/d30036f35d7a607f6ae48ce73f373d97642cf0": "cfb1b6563698a2bcd46367dbbd8633da",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/400328e8e25b146be3c9f09d0aa8d2c2718966": "170a1c1dbaeb248984c57e15b44909c1",
".git/objects/ec/cfa85e14798582bb82be15500fa8a2750d4b95": "0eb186aeb2d21285a324792bbbdd2d40",
".git/objects/ef/be8af5b9b9a2414a6362c67b083f26ea0f4084": "b7314ce08c00078fed4809529914f966",
".git/objects/f1/20cca17b991055180a613fb33a461cc448b3d2": "3b0cf92702860117075c29a61a660743",
".git/objects/f3/ede42422da9f145c4bf3cc589c82e601abecfb": "42bba2b2f8cff482b012f116bc1bc232",
".git/objects/fd/8b8338da87e5d73e63e036f933d8c162958bbb": "05c60aedb53e47f9276723adaad0c2fc",
".git/refs/heads/main": "f6f3c3ee57a2e67c3ffe6be1d32528a3",
".git/refs/remotes/origin/main": "f6f3c3ee57a2e67c3ffe6be1d32528a3",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b51991650b27ce24481dd670dd0450c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a89d06b5e3248090fbc930c4138bc151",
"/": "a89d06b5e3248090fbc930c4138bc151",
"main.dart.js": "76155153917ebfbc0fe87a80c8bac76f",
"manifest.json": "551e281324a714d975f06266480bd051",
"version.json": "642f403da9eb5467558d167480ffa0c9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
