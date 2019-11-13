<template>
  <div>
    <nav-bar class="home-nav">
      <template #navCenter>双十一购物狂欢</template>
    </nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from './childComp/HomeSwiper';

import { getHomeData } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend;
    });
  },
  components: {
    NavBar,
    HomeSwiper
  }
};
</script>
<style scoped>
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
