<style lang='scss' >
.ks-img {
  ul {
    overflow: hidden;
    width: 100%;
  }
  li {
    list-style: none;
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    float: left;
    overflow: hidden;
    position: relative;
    i {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      position: absolute;
      border: 2px solid #6feb95;
      z-index: 0;
      left: 50%;
      top: 50%;
      margin-top: -11px;
      margin-left: -11px;
      animation: move 1s infinite;
      -webkit-animation: move 1s infinite;
    }
    i:before {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 4px;
      content: '';
      box-shadow: 0 0 10px #666;
      -webkit-box-shadow: 0 0 10px #666;
      background: #fff;
      border: 1px solid #fff;
      top: -3px;
      left: 50%;
      margin-left: -3px;
    }
  }
  img {
    vertical-align: middle;
    border-width: 0;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 300px;
  }
}

@keyframes move {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@-webkit-keyframes move {
  0% {
    -webkit-transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>
<template>
  <div class="ks-img">
    <li v-for="item in data">
      <img :data-src="item" ref="chil">
      <i></i>
    </li>
  </div>
</template>

<script>
export default {
  name: 'img',
  data() {
    return {
      data: ['http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg',],
      scrollheight: 0,//滚动高度
      height: 0,//浏览器高度,
      imgs: []
    }
  },
  computed: {

  },
  mounted() {
    let that = this
    this.$nextTick(() => {
      that.imgs = that.$refs.chil
      that.loadimg()
      window.onscroll = function () {
        that.scrollheight = document.documentElement.scrollTop || document.body.scrollTop
        that.height = window.innerHeight
        let data = []
        for (let i in that.imgs) {
          if (that.height + that.scrollheight - 200 > that.getTop(that.imgs[i])) {
            setTimeout(() => {
              if (that.imgs[i].getAttribute('data-src')) {
                that.imgs[i].src = that.imgs[i].getAttribute("data-src");
                that.imgs[i].removeAttribute("data-src");
              }
            }, 300)
          }
        }
      }
    })

  },
  beforeDestroy() {

  },
  methods: {
    getTop(e) {
      let T = e.offsetTop;
      while (e = e.offsetParent) {
        T += e.offsetTop
      }
      return T
    },
    loadimg() {
      let that = this
      that.scrollheight = document.documentElement.scrollTop || document.body.scrollTop
      that.height = window.innerHeight
      let data = []
      for (let i in that.imgs) {
        if (that.height + that.scrollheight - 300 > that.getTop(that.imgs[i])) {
          setTimeout(() => {
            if (that.imgs[i].getAttribute('data-src')) {
              that.imgs[i].src = that.imgs[i].getAttribute("data-src");
              that.imgs[i].removeAttribute("data-src");
            }
          }, 300)
        }
      }
    }
  }
}

</script>


