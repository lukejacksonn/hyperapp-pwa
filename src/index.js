import { h, app } from 'hyperapp'
import { Router } from '@hyperapp/router'
import './index.css'

// Check for any github-pages 404 redirect
history.replaceState(null, null, sessionStorage.redirect)
delete sessionStorage.redirect
// Register service worker if not on localhost
const local = window.location.host.startsWith('localhost')
if ('serviceWorker' in navigator && !local) navigator.serviceWorker.register('/sw.js')

app({
  state: {
    count: 0,
  },
  actions: {
    add: s => ({ count: s.count + 1 }),
  },
  view: [
    ['/', (s,a) => <button onclick={a.add}>{s.count}</button>],
    ['*', (s,a) => <h1 onclick={e => a.router.go('/')}>Back to {location.hostname}</h1>],
  ],
  mixins: [Router],
})
