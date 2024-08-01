import routes from './routes';

import { createWebHistory, createRouter } from 'vue-router';

export default createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-bg-info',
  linkExactActiveClass: 'text-bg-success',
})