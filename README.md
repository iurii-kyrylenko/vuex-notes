# vuex-notes

> Updaing vuex tutorial [Learn Vuex by Building a Notes App](https://coligo.io/learn-vuex-by-building-notes-app/) to `vue 2.1.0` and `vuex 2.1.3`

## What has been done

* Scaffolded the project with the [vue-cli](https://github.com/vuejs/vue-cli) using the `webpack-simple` template.

* Installed bootstrap and loaders to resolve referenced fonts/icons. Installed babel's `stage-2 preset` to allow `object spread operator`:
``` bash
npm install --save bootstrap
npm install --save-dev file-loader url-loader babel-preset-stage-2
```

* Bundled `bootsrap.css` into resulting build, instead of direct CDN link. See also commented section in [webpack.config.js](webpack.config.js).
``` js
// App.vue
<style src="bootstrap/dist/css/bootstrap.css"></style>
```

* Mounted the vue instance to the `<div>` tag, instead of `<body>`.

* Vue 2 does not support `$remove` anymore. So, instead of
``` js
state.notes.$remove(state.activeNote)
```
the `filter` method was used:
``` js
state.notes = state.notes.filter(note => note != state.activeNote)
```

* All `mutations`, `actions` and `getters` declared locally in the [store.js](./src/components/store.js) and referenced in the `Vuex.Store` instance. Used vuex API `mapActions` and `mapGetters` to map store actions/getters to the components properties.

* Fixed incorrect behavior in case when note list is empty and active note doesn't exist.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
