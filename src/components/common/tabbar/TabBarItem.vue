<template>
  <div class="tab-bar-item" @click="routerTo">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deepPink'
    }
  },
  data(){
    return {

    }
  },
  methods: {
    routerTo(){
      console.log(this.path)
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive: function(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor: function(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
};
</script>
<style  scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
