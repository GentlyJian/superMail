<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <template #navCenter>双十一购物狂欢</template>
    </nav-bar>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" class="home-swiper" />
      <Recommend :recommends="recommends"></Recommend>
      <Feature />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <Goods :goods="showGoods"></Goods>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import BackTop from 'components/content/backTop/BackTop'

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
      },
      isShowBackTop: false
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
    Goods,
    Scroll,
    BackTop
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
    },
    // Scorll滚动事件监听
    contentScroll(position) {
      // 1.判断BackTop是否显示
      console.log(position);
      this.isShowBackTop = -position.y > 300;
    },
    // Scroll pullingUp的监听
    loadMore() {
      // this.getHomeGoods(this.currentType);
      console.log("加载更多数据");
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  },
  computed: {
    // 根据tab页类型获取对应的数据,没有后台数据~<_>~
    showGoods: function() {
      return this.currentType;
    }
  }
};
</script>
<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /* position: fixed; */
  /* width: 100%; */
  /* left: 0;
  right: 0;
  top: 0; */
  /* z-index: 999; */
  color: #fff;
  background-color: var(--color-tint);
}
.content {
  /* margin-top: 44px;
  margin-bottom: 49px; */
  /* 需要给scroll设置一定的区域，超出的部分便会滚动 */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
