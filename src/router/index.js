import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/orcamento',
    name: 'Orcamento',
    component: () => import('../views/Orcamento.vue')
  },
  {
    path: '/produto',
    name: 'Produto',
    component: () => import('../views/Produto.vue')
  },
  {
    path: '/relatorio',
    name: 'Relatorio',
    component: () => import('../views/Relatorio.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import('../views/Usuario.vue')
  },
  {
    path: '/servico',
    name: 'OrdemServico',
    component: () => import('../views/OrdemServico.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router