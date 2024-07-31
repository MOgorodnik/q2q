# q2q-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# App folders structure (start example)
```
src/
|-- assets/
|   |-- images/
|   |-- styles/
|       |-- main.scss
|
|-- components/
|   |-- common/
|   |   |-- AppButton.vue
|   |   |-- AppLoader.vue
|   |
|   |-- layout/
|   |   |-- TheHeader.vue
|   |   |-- TheFooter.vue
|   |
|   |-- gallery/
|       |-- GalleryItem.vue
|       |-- GalleryList.vue
|
|-- composables/
|   |-- useApi.js
|   |-- usePhotoFilters.js
|
|-- router/
|   |-- index.js
|
|-- stores/
|   |-- photo.js
|   |-- user.js
|
|-- views/
|   |-- HomeView.vue
|   |-- GalleryView.vue
|   |-- PhotoDetailView.vue
|
|-- services/
|   |-- api.js
|   |-- photoService.js
|
|-- utils/
|   |-- helpers.js
|   |-- constants.js
|
|-- locales/
|   |-- en.json
|   |-- uk.json
|
|-- plugins/
|   |-- i18n.js
|
|-- App.vue
|-- main.js

public/
|-- index.html
|-- favicon.ico

tests/
|-- unit/
|-- e2e/

.env
.env.production
.gitignore
package.json
vite.config.js
tailwind.config.js
```
## Explanation of the structure:

`assets/`: Contains static resources such as images and styles.  
`components/`:  
- `common/`: Common components that are used throughout the application.
- `layout/`: Components that form the basic structure of the application.
- `gallery/`: Specific components for the gallery.

`composables/`: Contains logic that can be reused in different components.  
`router/`: Configuration Vue Router.  
`stores/`: Pinia stores to manage the state of the application.  
`views/`: Components that correspond to different pages or routes.  
`services/`: Contains logic for working with APIs and other services.  
`utils/`: Auxiliary functions and constants.  
`locales/`: Files for internationalization (i18n).  
`plugins/`: Configurations for plugins Vue.  
`App.vue`: The root component of the application.  
`main.js`: Entry point to the application.  
`public/`: Static files that do not require processing.  
`tests/`: Directory for tests.  
Configuration files: `.env, .gitignore, package.json, vite.config.js, tailwind.config.js`.