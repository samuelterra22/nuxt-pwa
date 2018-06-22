importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2b9d49b12aef0f2dbe97.js",
    "revision": "47db35a27eb390f40717854936a2e30d"
  },
  {
    "url": "/_nuxt/layouts/default.c177cbc24829a60e0b5c.js",
    "revision": "a2c18e3db4fde98c09c75c22f9e5c9d6"
  },
  {
    "url": "/_nuxt/manifest.c25108c0c6d65653c9b5.js",
    "revision": "1b0e101e98b9ea0c4423918178e20f79"
  },
  {
    "url": "/_nuxt/pages/index.0afcecba703190cdf469.js",
    "revision": "e5d8cedabb75820f2fedd74eebe4693b"
  },
  {
    "url": "/_nuxt/vendor.23f6940a7db476a94a22.js",
    "revision": "704f60e36f96d05aa7257ad48a748de7"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

