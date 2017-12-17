import { app } from 'hyperapp'
import { main, h1, div, button } from '@hyperapp/html'
import './index.css'

const model = {
  state: {
    count: 0,
  },
  actions: {
    reset: () => ({ count: 0 }),
    sum: data => ({ count }) => ({ count: count + data }),
  },
}

const view = ({ state, actions }) =>
  main([
    h1(state.count),
    div([
      button({ onclick: e => actions.sum(-1) }, 'Sub'),
      button({ onclick: e => actions.reset() }, 'Reset'),
      button({ onclick: e => actions.sum(1) }, 'Add'),
    ]),
  ])

app(model, view, document.body)
