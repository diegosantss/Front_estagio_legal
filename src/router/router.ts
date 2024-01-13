import { createRouter, createWebHistory } from 'vue-router';
import MasterMenu from '../views/layout/master-menu/master-menu.vue';
import HomePage from '../views/home-page/home-page.vue';
import InicioEstagioPage from '../views/inicio-estagio/inicio-estagio.vue';
import AcompanharProcessosDex from '../views/acompanhar-processos/visao-dex/acompanhar-processos.vue';
import TermoDeCompromisso from '../views/Termo-de-Compromisso/Termo-de-Compromisso.vue';
import FimEstagioPage from '../views/fim-estagio/fim-estagio.vue'
import UserAutenticate from '../views/user-authenticate/user-authenticate.vue';
import DetalhamentoProcessoEstagio from '../views/detalhamento-processo-estagio/detalhamento-processo-estagio.vue';
import FormTCE from '../views/FormTCE/form-tce.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authenticate',
      component: UserAutenticate
    },
    {
      path: '/menu',
      name: 'menu',
      component: MasterMenu,
      children:[
        {
          path: '', // Rota vazia
          redirect: '/home', // Redirecionar para a rota 'estagio/obrigatorio'
        },
        {
          path:'/home',
          name:'home',
          component: HomePage
        },
        {
          path:'/inicio/estagio',
          name:'inicioEstagio',
          component: InicioEstagioPage
        },
        {
          path:'/acompanhar/processos',
          name:'acompanharProcessos',
          component: AcompanharProcessosDex
        },
        {
          path:'/Termo/Compromisso',
          name:'termoDeCompromisso',
          component: TermoDeCompromisso
        },
        {
          path:'/fim/estagio',
          name:'fimEstagio',
          component: FimEstagioPage
        },
        {
          path:'/detalhamento/processo/:id',
          name:'detalhamentoProcessoEstagio',
          component: DetalhamentoProcessoEstagio
        },
        {
          path:'/formulario/tce',
          name:'formulariotce',
          component: FormTCE
        },
      ]
    },
  ]
})

export default router