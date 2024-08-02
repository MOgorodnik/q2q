import { createWebHistory, createRouter } from 'vue-router';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-bg-info',
  linkExactActiveClass: 'text-bg-success',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Weather App';
  next();
});

export default router;
