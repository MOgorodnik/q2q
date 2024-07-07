import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import ProductsView from '../views/Products.vue';
import ProductView from '../views/Product.vue';
import AuthView from '../views/Authorithation.vue';
import ContactView from '../views/Contact.vue';

export default [
  { path: '/', component: HomeView, title: 'Go to Home' },
  { path: '/about', component: AboutView, title: 'Go to About' },
  { path: '/products', component: ProductsView, title: 'Go to Products' },
  {
    path: '/products/:id',
    component: ProductView,
    props: true,
    title: 'Go to Single Product',
  },
  { path: '/auth', component: AuthView, title: 'Go to Auth' },
  { path: '/contact', component: ContactView, title: 'Go to Contact' },
  // { path: '/:pathMatch(.*)*', redirect: '/' }
];
