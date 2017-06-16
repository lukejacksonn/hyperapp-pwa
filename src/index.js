import { h, app, Router } from 'hyperapp'
import './index.scss'

app({
  state: {
    count: 0,
  },
  actions: {
    add: s => ({ count: s.count + 1 }),
  },
  view: {
    '/': (s,a) => <button onclick={a.add}>{s.count}</button>,
    '*': (s,a) => <h1 onclick={e => a.router.go('/')}>Back to {location.hostname}</h1>,
  },
  plugins: [Router],
})
