<template>
  <div>
    <ks-hearder isback title="图片懒加载"></ks-hearder>
    <ks-img :data="data"></ks-img>
  </div>
</template>

<script>
import ksImg from '@/components/img/index.js'
import ksHearder from '@/components/hearder/index.js'
export default {

  data() {
    return {
      data: ['http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg', 'http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg',],
    }
  },
  computed: {

  },
  components: {
    ksImg, ksHearder
  },
  mounted() {


  },
  beforeDestroy() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
