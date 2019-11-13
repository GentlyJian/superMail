<template>
  <div>
    <nav-bar class="home-nav">
      <template #navCenter>双十一购物狂欢</template>
    </nav-bar>
    <div>{{banners}}</div>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";
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
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
    });
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
