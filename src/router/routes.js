import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';

export default [
  {
    path: '/',
    component: HomeView,
    title: 'Home',
    meta: { title: 'Home - Weather App' },
  },
  {
    path: '/about',
    component: AboutView,
    title: 'About',
    meta: { title: 'About - Weather App' },
  },
  {
    path: '/404',
    component: PageNotFound,
    name: 'NotFound',
    title: '404',
    meta: { title: '404 - Page Not Found' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];
