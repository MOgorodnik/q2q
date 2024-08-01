import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';

export default [
  { path: '/', component: HomeView, title: 'Go to Home' },
  { path: '/about', component: AboutView, title: 'Go to About' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];