<template>
  <div class="box">
    <drawer :show="drawerShow" pos="left" :tran="tran" @change-show="changeDrawerShow" @on-hide="onHide" @on-show="onShow">
      <ks-hearder isback title="主页">
        <icon type="gengduocaidan" class="right-icon" slot="right-slot" @click.native="drawershow"></icon>
      </ks-hearder>
      <div class="content">
        <cell islink title="姓名" value="平哥"></cell>
        <cell islink title="组件演示" value="图片懒加载" @click.native="gopage('/img')"></cell>
        <cell islink title="组件演示" value="下拉加载" @click.native="gopage('/pullup')"></cell>
        <cell islink title="svg演示" value="svg" @click.native="gopage('/svg')"></cell>
      </div>
      <div class="layout" slot="drawer">
        <div>
          <icon type="icon8" class="logo"></icon>我的</div>
        <div>
          <icon type="gengduocaidan" class="logo"></icon>设置</div>
      </div>
    </drawer>
  </div>
</template>

<script>
import ksHearder from '@/components/hearder/index.js'
import drawer from '@/components/drawer/index.js'
import icon from '@/components/icon/index.js'
import cell from '@/components/cell/index.js'
export default {

  data() {
    return {
      drawerShow: false,
      tran: 'overlay',
    }
  },
  computed: {

  },
  components: {
    ksHearder, drawer, icon, cell
  },
  mounted() {


  },
  beforeDestroy() {

  },
  methods: {
    changeDrawerShow() {
      this.drawerShow = !this.drawerShow
    },
    onHide() {

    },
    onShow() {

    },
    drawershow() {
      this.drawerShow = !this.drawerShow
    },
    gopage(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.layout {
  height: 100%;
  position: relative;
  div {
    font-size: 0.4rem;
    padding: 0.2rem 0;
    background: #fff;
    border-bottom: 1px solid #fafbfb;
    text-align: left;
    padding-left: 30%;
    .logo {
      margin-right: 5%
    }
  }
}

.content {
  padding-top: 1rem;
}
</style>
