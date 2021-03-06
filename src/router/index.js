import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Favorites from '@/components/Favorites'
import Quotes from '@/components/Quotes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})
