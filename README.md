# hyperapp-pwa
> A minimalist _progressive web app_ compliant template for hyperapp projects

Once you have cloned or forked this project, use the following tasks from the project root:

```
npm install   // Install all dependencies
npm start     // Serve app on localhost and watch source files
```

This will build the application and serve it on http://localhost:8080

**DEMO:** https://hyperapp-pwa.deployable.site

## Features of this template

- Very minimal config files, developer and client side dependencies
- Developer task that rebuilds app when source files change using [rollup-watch](https://www.npmjs.com/package/rollup-watch)
- Reloads the browser when source files change using [rollup-plugin-livereload](https://www.npmjs.com/package/rollup-plugin-livereload)
- Bundle scripts supporting `ES6` and `JSX` transforms using [buble](https://www.npmjs.com/package/buble)
- Preprocessing and concatenating stylesheets using using [rollup-plugin-postcss](https://www.npmjs.com/package/rollup-plugin-postcss)
- Local static file server supporting HTML5 fallback using [rollup-plugin-server](https://www.npmjs.com/package/rollup-plugin-server)
- Frontend application state management and routing using [hyperapp](https://www.npmjs.com/package/hyperapp)
- PWA compliant resources; service worker, manifest and icons passing [lighthouse](https://github.com/GoogleChrome/lighthouse)
- Static deploys to `gh-pages` when merged to master using [TravisCI](https://travis-ci.org/)
