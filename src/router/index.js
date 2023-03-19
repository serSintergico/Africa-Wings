import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/Admin'},
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import ( /* webpackChunkName: "AdminView" */  '@/modules/Admin/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'nueva-orden',
        name: 'crear-cuenta',
        component: () => import ( /* webpackChunkName: "CrearOrden" */ '@/modules/Admin/views/CreateOrder.vue' ),
        children: [
          { path: 'wings',
            name: 'wings',
            component: () => import( '@/modules/Admin/views/Categories/WingsOptions.vue') 
          },
          { path: 'burguers',
            name: 'burguers',
            component: () => import( '@/modules/Admin/views/Categories/BurguerOptions.vue') 
          },
          { path: 'hot-dogs',
            name: 'hot-dogs',
            component: () => import( '@/modules/Admin/views/Categories/HotDogsOptions.vue') 
          },
          { path: 'desserts',
            name: 'desserts',
            component: () => import( '@/modules/Admin/views/Categories/DessertOptions.vue') 
          },
          { path: 'drinks',
            name: 'drinks',
            component: () => import( '@/modules/Admin/views/Categories/DrinksOptions.vue') 
          },
        ]
      },
      {
        path: 'ordenes-actuales',
        name: 'cuenta-abierta',
        component: () => import ( /* webpackChunName*: "OrdenesActuales" */ '@/modules/Admin/views/ActualsOrders.vue')
      },
      {
        path: 'ordenes-cerradas',
        name: 'cuentas-cerradas',
        component: () => import ( /** webpackChunkName: "OrdenesCerradas" */ '@/modules/Admin/views/ClosedOrders.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
