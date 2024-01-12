import MasterMenu from '../views/layout/master-menu/master-menu.vue';
import HomePage from '../views/home-page/home-page.vue';
import InicioEstagioPage from '../views/inicio-estagio/inicio-estagio.vue';
import AcompanharProcessosDex from '../views/acompanhar-processos/visao-dex/acompanhar-processos.vue';
import TermoDeCompromisso from '../views/Termo-de-Compromisso/Termo-de-Compromisso.vue';
import FimEstagioPage from '../views/fim-estagio/fim-estagio.vue'
import DetalhamentoProcessoEstagio from '../views/detalhamento-processo-estagio/detalhamento-processo-estagio.vue';


export const privateRoutes = [
    {
        path: '/menu',
        name: 'menu',
        component: MasterMenu,
        children:[
          {
            path:'/home',
            name:'home',
            component: HomePage,
            meta:{
                auth:true,
            }
          },
          {
            path:'/inicio/estagio',
            name:'inicioEstagio',
            component: InicioEstagioPage,
            meta:{
                auth:true,
            }
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
        ]
      },
]