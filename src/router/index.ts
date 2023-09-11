import { createRouter, createWebHistory } from 'vue-router';
import MasterMenu from '../views/layout/master-menu.vue';
import EstagioObrigatorioPage from '../views/estagio-obrigatorio.vue'

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
        }
      ]
    },
  ]
})

export default router
