import { createApp } from 'vue';
import { App } from './App';
import '/src/scss/vinim.scss';
import '/src/scss/app.scss';
import { Vinim } from '../src/components/Vinim';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         component: () => import('./pages/Home')
      },
      {
         path: '/about',
         component: () => import('./pages/About')
      }
   ]
});

createApp(App).use(router).mount('#app');
