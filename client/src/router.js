import Vue from 'vue'
import Router from 'vue-router'

import BemVindo from './views/BemVindo.vue'
import Localizacao from './views/Localizacao.vue'
import DadosDaLojaEPagamento from './views/DadosDaLojaEPagamento.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bem-vindo',
      component: BemVindo
    },
    {
      path: '/localizacao',
      name: 'localizacao',
      component: Localizacao
    },
    {
      path: '/dados-da-loja-e-pagamento',
      name: 'dados-da-loja-e-pagamento',
      component: DadosDaLojaEPagamento
    }
  ]
})
