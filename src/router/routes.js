import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';
import NF from '../views/404.vue';

export default [
  { path: '/', component: HomeView, title: 'Go to Home' },
  { path: '/about', component: AboutView, title: 'Go to About' },
  { path: '/:pathMatch(.*)*', component: PageNotFound, name: 'NotFound' }
];

// export default [
//   { path: '/', component: HomeView, meta: { title: 'Home - Weather App' } },
//   {
//     path: '/about',
//     component: AboutView,
//     meta: { title: 'About - Weather App' },
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     component: PageNotFound,
//     name: 'NotFound',
//     meta: { title: '404 - Page Not Found' },
//   },
// ];
