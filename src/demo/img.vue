<template>
  <div>
    <ks-hearder isback title="图片懒加载"></ks-hearder>
    <ks-img></ks-img>
  </div>
</template>

<script>
import ksImg from '@/components/img/index.js'
import ksHearder from '@/components/hearder/index.js'
export default {

  data() {
    return {

    }
  },
  computed: {

  },
  components:{
   ksImg,ksHearder
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
