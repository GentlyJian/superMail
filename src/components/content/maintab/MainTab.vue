<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="orange">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" activeColor="deepPink">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcar.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcar-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: 'MainTab',
  components:{
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>
