/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "789023deb00f0e6cfb1b2df208e2cbae"
  },
  {
    "url": "assets/css/0.styles.5a692546.css",
    "revision": "1c062e0a0f85a95fd3e78f9a16e06d8e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3dcba132.js",
    "revision": "f9bdaaeb4d1ca6d9464371d49a8883a1"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.c2dc366c.js",
    "revision": "84d03d74c8749c77170ec3c649a32ddd"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.82e7c59a.js",
    "revision": "8b3423cabe41ace81b53fbf112fd9b1a"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.6b7d40f4.js",
    "revision": "6637514d0ea5692f121ff2516e9fa65d"
  },
  {
    "url": "assets/js/18.5373f3b9.js",
    "revision": "d98fc6120df0459b7e1ababfe69e545c"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.60a6413d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.50ec528b.js",
    "revision": "229d8ca1d6aa541ce51238552b26125e"
  },
  {
    "url": "assets/js/21.562d28ac.js",
    "revision": "edce144141a51c2e6260610f4989dc82"
  },
  {
    "url": "assets/js/22.f8aa1d7d.js",
    "revision": "b8ac58c4d5bd4a6b440b6c1f039a6afe"
  },
  {
    "url": "assets/js/23.4b286764.js",
    "revision": "84ea8034415030012ee9aababfc55c86"
  },
  {
    "url": "assets/js/24.bad0588b.js",
    "revision": "41149e9c747babb2b666d71942491f35"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.0689c2c7.js",
    "revision": "606346e207b0af631aad20f21d793767"
  },
  {
    "url": "conclusion/index.html",
    "revision": "72b4b5c100fd48d078ae45f2d93281f2"
  },
  {
    "url": "design/index.html",
    "revision": "0566cc83fc3a13dbb3a0fdaba555437b"
  },
  {
    "url": "index.html",
    "revision": "d637fcc03b555c26e3fb494ce0ddf1ee"
  },
  {
    "url": "intro/index.html",
    "revision": "ea8ff766b37adb58c44d20f3ba5620c8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7624f313cf63fa46c7936b8efff78635"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8ef9602bee26d0d6d2a92f346a6d6bb9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3279248300940a2769f4682a8f87448d"
  },
  {
    "url": "software/index.html",
    "revision": "a04e56fe716218317684da81aa17ae85"
  },
  {
    "url": "test/index.html",
    "revision": "518a7ab8d74b2744feaeaf1c25d6933e"
  },
  {
    "url": "use cases/index.html",
    "revision": "0a28e1427b2e5e23d5fd24d88237f7b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
