<template>
  <div class="pullup">
    <ul v-load-more="loaderMore" v-if="shopListArr.length"  class="pullup-ul">
      <li v-for="item in shopListArr">
        1111
      </li>
    </ul>
    <aside class="return_top" @click="backTop" v-if="showBackStatus">
        <icon type="fanhui" </icon>
    </aside>
    <footer class="loader_more" v-if="shopListArr.length<5">
      没有更多数据
    </footer>
    <div v-if="shopListArr.length>=5">
      <footer class="loader_more" v-show="preventRepeatReuqest">
        {{text}}
      </footer>
      <footer class="loader_more" v-show="!preventRepeatReuqest">下拉加载数据...</footer>
    </div>
    <div ref="abc" style="background-color: red;"></div>
  </div>
</template>

<script>

import { showBack, animate } from './mUtils'
import { loadMore } from './mixin'

export default {
  data() {
    return {
      shopListArr: [1,1,1,1,1,1], // 店铺列表数据
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
      showBackStatus: false, //显示返回顶部按钮
      text: "正在加载数据"
    }
  },
  mounted() {
    this.initData();
  },
  components: {

  },
  props: [],
  mixins: [loadMore],
  computed: {
  },
  methods: {
    fetchData() {
      this.shopListArr.push(1)
      // getTradeRecords(this.cursor, this.count)
      //   .then((jsonResp) => {
      //     if (jsonResp.success) {
      //       Loading.hide()
      //       let data = jsonResp.data
      //       this.shopListArr = data.data
      //     }
      //   })
      //   .catch((error) => {
      //     Loading.hide()
      //     Toast.show("服务器繁忙")
      //   })
    },
    async initData() {
      //获取数据
      this.fetchData();

      //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
      showBack(status => {
        this.showBackStatus = status;
      });
    },
    //到达底部加载更多数据
    async loaderMore() {
      //防止重复请求
      // if (this.preventRepeatReuqest) {
      //   return
      // }
      //数据的定位加20位
      //this.offset += 20;
      // this.cursor = this.cursor + this.count
      // getTradeRecords(this.cursor, this.count)
      //   .then((jsonResp) => {
      //     if (jsonResp.success) {
      //       list = jsonResp.data.data
      //       this.shopListArr = this.shopListArr.concat(jsonResp.data.data)
      //       if (list.length <= 0) {
      //         this.showBackStatus = true
      //         this.text = "没有更多的数据了...";
      //         this.preventRepeatReuqest = true
      //         return
      //       }
      //     }
      //   })
      this.shopListArr.push(1)
      //this.shopListArr = [...this.shopListArr, ...res];
      //当获取数据小于20，说明没有更多数据，不需要再次请求数据
      this.preventRepeatReuqest = false;
    },
    //返回顶部
    backTop() {
      animate(document.body, { scrollTop: '0' }, 400, 'ease-out');
    },
    //监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据

  },
  watch: {

  }
}
</script>

<style lang='scss' scoped>
@import 'src/assets/styles/mixin';
.pullup-ul{
  padding-top: 1rem;
}
.fee_distance {
  margin-top: 0.52rem;
  @include fj;
  @include sc(0.5rem, #666);
  .fee {
    @include sc(0.5rem, #666);
  }
  .distance_time {
    span {
      color: #999;
    }
    .order_time {
      color: $blue;
    }
    .segmentation {
      color: #ccc;
    }
  }
}


.loader_more {
  @include font(0.6rem, 3);
  text-align: center;
  color: #999;
}

.empty_data {
  @include sc(0.5rem, #666);
  text-align: center;
  line-height: 2rem;
}

.return_top {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  .back_top_svg {
    @include wh(2rem, 2rem);
  }
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 1s
}

.loading-enter,
.loading-leave-active {
  opacity: 0
}
</style>