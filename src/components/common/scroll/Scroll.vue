<template>
  <div class="wrapper" ref="wrapper">
    <div class="BScontent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 创建scroll对象必须在mounted，created只是创建了实例数据，而没有挂载页面上
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, //监听插件内的点击事件，false会屏蔽
      probeType: this.probeType, // 0,1会不监听滚动的坐标 >1则会
      pullUpLoad: this.pullUpLoad // 往上拉加载更多，用户请求后台数据
    });

    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

   // 3.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          console.log("到底了", this.pullUpLoad);
          this.$emit('pullingUp')
        })
      }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>
