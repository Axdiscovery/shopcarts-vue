import Vue from 'vue';
import Router from 'vue-router';
import Classify from '../pages/Classify.vue';
import Login from '../pages/Login.vue';
import Sport from '../pages/Sport.vue';
import Usermsg from '../pages/Usermsg.vue';
import ShopCarts from '../pages/Shopcarts'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/usermsg',
      name: 'usermsg',
      component: Usermsg
    },
    {
      path:'/ShopCarts',
      name:'ShopCarts',
      component:ShopCarts
    }
  ]
});

