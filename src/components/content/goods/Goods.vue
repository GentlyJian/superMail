<template>
  <div class="goods">
    <goods-item v-for="(item, index) in 10" :key="index" :goods-item="item" :goods-type="goods"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  name: "Goods",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: String,
      default: 'pop'
    }
  }
};
</script>

<style scope>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
