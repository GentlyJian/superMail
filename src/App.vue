<template>
  <div id="app">
    <router-view></router-view>
    <MainTab />
  </div>
</template>

<script>
import MainTab from 'components/content/maintab/MainTab';
import router from './router/index'
export default {
  name: 'app',
  components: {
    MainTab
  },
  router
}
</script>

<style>
@import "assets/css/base.css";
</style>
