import './style.scss';

import { createApp } from 'vue';
import { createWebHashHistory, createWebHistory, createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import RickandMorty from './pages/RickandMorty.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import CookieCliker from './pages/CookieCliker.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickandMorty, name: 'Rick And Morty' },
  { path: '/CookieClicker', component: CookieCliker, name: 'Cookie Cliker' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');