import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/Home.vue'
import AboutView from './views/About.vue'
import AuthView from './views/Authorithation.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/auth', component: AuthView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// createApp(App).mount('#app')
createApp(App)
  .use(router)
  .mount('#app')
