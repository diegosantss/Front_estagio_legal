import { createRouter, createWebHistory } from 'vue-router';
import MasterMenu from '../views/layout/master-menu/master-menu.vue';
import EstagioObrigatorioPage from '../views/estagio-obrigatorio/estagio-obrigatorio.vue'
import EstagioNaoObrigatorioPage from '../views/estagio-nao-obrigatorio/estagio-nao-obrigatorio.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MasterMenu,
      children:[
        {
          path:'/estagio/obrigatorio',
          name:'estagioObrigatorio',
          component: EstagioObrigatorioPage
        },
        {
          path:'/estagio/naoobrigatorio',
          name:'estagioNaoObrigatorio',
          component: EstagioNaoObrigatorioPage
        }
      ]
    },
  ]
})

export default router