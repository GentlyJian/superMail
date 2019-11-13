<template>
  <nav-bar class="home-nav">
    <template  #navCenter>双十一购物狂欢</template>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
<style scoped>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
