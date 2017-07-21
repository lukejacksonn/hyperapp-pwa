(function(){

  // Check for any github-pages 404 redirect
  var redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect != location.href) history.replaceState(null, null, redirect)

  // Crude check to see if we are in dev mode
  var dev = () => window.location.host.startsWith('localhost')

  // Register service worker if not on localhost
  if ('serviceWorker' in navigator && !dev()) navigator.serviceWorker.register('/sw.js')

  // Connect to live-reload server if on localhost
  if(dev()) {
    var s = document.createElement('script')
    s.src = 'http://localhost:35729/livereload.js?snipver=1'
    document.head.appendChild(s)
  }

})()
