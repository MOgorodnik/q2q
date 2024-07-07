import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

import routes from './router/index'

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-bg-info',
  linkExactActiveClass: 'text-bg-success',
})

// createApp(App).mount('#app')
createApp(App)
  .use(router)
  .mount('#app')
