import {createRouter, createWebHistory} from 'vue-router'
import Index from 'Pages/Index.vue'
import ProdClassify from 'Pages/prodClassify/Index.vue'
import Clothes from 'Pages/prodClassify/Clothes.vue'
import Shoes from 'Pages/prodClassify/Shoes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/prodClassify',
    name: 'Classify',
    component: ProdClassify,
    children: [
      {
        name: 'Clothes',
        path: 'clothes',
        component: Clothes,
      },
      {
        name: 'Shoes',
        path: 'shoes',
        component: Shoes,
      },
    ],
  },
]

export default createRouter({history: createWebHistory(), routes})
