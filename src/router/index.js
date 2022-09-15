import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import Layout from '../views/layout/Index.vue'
import Page404 from '../views/error/404.vue'


Vue.use(VueRouter)


const routes = [
  {    
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {        
        path: '/achievement/:key/:level',
        name: 'Achievement',
        component: () => import('@/views/Achievement.vue'),
        beforeEnter: function(to, from, next){
          if(store.getters.isAuth){
            next();
          }
          else{
            alert('로그인하세요')
            next('/')
          }
        }

      },
      {
        path: '/rank/:key/:level',
        name: 'RankTable',
        component: () => import('@/views/Rank.vue')
      },
      {
        path: '/tier',
        name: 'Tier',
        component: () => import('@/views/Tier.vue')
      },      
    ],

  },
  {
    path: '*',
    redirect: '/404',

  },
  {
    path:'/404',
    name: '404page',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {

//   console.log(to.matched.some(record => record.meta.authRequired))
//   console.log(to.meta)
//   if(to.matched.some(record => record.meta.authRequired) && !store.getters.isAuth){
//     next({ path: '/login', replace: true })
//   }
//   else{
//     next()
//   }


// });

export default router
