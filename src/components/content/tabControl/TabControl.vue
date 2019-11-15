<template>
  <div class="tabControl">
    <div v-for="(item, index) in titles"
    :key="index" class="tabItem"
    @click="itemClick(index)"
    :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  computed: {

  },
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    font-size: 14px;
     height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabItem {
    flex: 1;
  }

  .tabItem span{
    padding-bottom: 5px;
  }
   .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
