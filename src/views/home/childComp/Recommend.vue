<template>
  <div class="recommend">
    <div class="recommendItem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>
          <span>{{item.title}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  text-align: center;
  font-size: 12px;

  border-bottom: 5px solid #eee;
}
.recommendItem {
  flex: 1;
  justify-content: space-around;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>>
