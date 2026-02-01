export function useServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Workers not supported')
    return
  }

  // Register the service worker when the app is ready
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registered:', registration)

        // Check for updates periodically
        setInterval(() => {
          registration.update()
        }, 60000) // Check every minute
      })
      .catch((error) => {
        console.warn('Service Worker registration failed:', error)
      })
  })

  return {
    isSupported: () => 'serviceWorker' in navigator,
  }
}
