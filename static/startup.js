(function(){
  var redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect != location.href) history.replaceState(null, null, redirect)
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')
})()
