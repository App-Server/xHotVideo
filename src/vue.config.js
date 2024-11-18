module.exports = {
    pwa: {
      name: 'App',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      manifestOptions: {
        short_name: 'VuePWA',
        background_color: '#ffffff',
      },
      workboxOptions: {
        skipWaiting: true, // Forces the waiting service worker to become active
        clientsClaim: true, // Makes the service worker take control of clients
      },
    },
};
  