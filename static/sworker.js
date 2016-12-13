(global => {
  'use strict';

  // Load the sw-tookbox library.
  importScripts('/static/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;

  global.toolbox.router.get(
      '/static/:filename',
      global.toolbox.cacheFirst,
      {
        // Use a dedicated cache for the responses, separate from the default cache.
        cache: {
          name: 'statics',
          // Store up to 10 entries in that cache.
          maxEntries: 10,
          // Expire any entries that are older than 30 seconds.
          maxAgeSeconds: 60 * 5
        }
    }
  );
  // By default, all requests that don't match our custom handler will use the
  // toolbox.networkFirst cache strategy, and their responses will be stored in
  // the default cache.
  // global.toolbox.router.default = global.toolbox.networkFirst;

  // Boilerplate to ensure our service worker takes control of the page as soon
  // as possible.
  global.addEventListener('install',
      event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate',
      event => event.waitUntil(global.clients.claim()));
})(self);