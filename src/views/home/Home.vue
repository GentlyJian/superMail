<template>
  <div>
    <nav-bar class="home-nav">
      <template #navCenter>双十一购物狂欢</template>
    </nav-bar>
    <div class="content">
      <home-swiper :banners="banners" class="home-swiper" />
      <Recommend :recommends="recommends"></Recommend>
      <Feature />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <Goods :goods="showGoods"></Goods>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";

import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";


import HomeSwiper from "./childComp/HomeSwiper";
import Recommend from "./childComp/Recommend";
import Feature from "./childComp/Feature";

import { getHomeData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [], // 滚动条信息
      recommends: [], // 推荐信息
      currentType: "pop", //当前tab页类型
      goods: {
        //tab页数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeData();

    // 2.请求tab页数据
    // this.getHomeGoods("pop");
    // this.getHomeGoods("new");
    // this.getHomeGoods("sell");
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    Goods
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 获取首页信息
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 根据类型获取tab页数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  computed: {
    showGoods: function(){
      return this.currentType;
    }
  },
};
</script>
<style scoped>
.home-nav {
  position: fixed;
  /* width: 100%; */
  left: 0;
  right: 0;
  top: 0;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 999;
}
.content {
  margin-top: 44px;
  margin-bottom: 49px;
}
</style>
