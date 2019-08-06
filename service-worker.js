/* globals importScripts, workbox */
/* eslint-disable no-restricted-globals */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute([], {
  ignoreURLParametersMatching: [/.*/],
  cleanURLs: true
})
