module.exports = {
  // Glob match for static files
  globDirectory: 'build/',
  globPatterns: ['*.ico', 'images/**/*', '**/*.{html,json,js,css}'],
  swDest: 'build/service-worker.js',
  // Prevent cache-busting on filenames with content hash
  dontCacheBustURLsMatching: /\.\w{8}\./,
  // Increase the limit to 5mb
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  // Options exclusive to `injectManifest`
  swSrc: 'service-worker.js'
}
