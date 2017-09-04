(function(){

  // Check for any github-pages 404 redirect
  var redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect != location.href) history.replaceState(null, null, redirect)

  // Crude check to see if we are in dev
  var local = window.location.host.startsWith('localhost')

  // Register service worker if not on localhost
  if ('serviceWorker' in navigator && !local) navigator.serviceWorker.register('/sw.js')

})()
