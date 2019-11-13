import Vue from 'vue';
import VueRouter from 'vue-router';

// 加载路由模块
Vue.use(VueRouter);
// 进行懒加载
const Home = () => import ('views/home/Home.vue');
const Category = () => import ('views/category/Category.vue');
const ShopCar = () => import ('views/shopcar/ShopCar.vue');
const Profile = () => import ('views/profile/Profile.vue');
// 创建routes
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/shopcar', component: ShopCar },
  { path: '/profile', component: Profile }
]

// 创建路由
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
