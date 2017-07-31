
<template>
  <div class="cell">
    {{title}}
    <div class="cell-right">
      {{value}}
    </div>
    <icon type="xiangqing" class="cell-iocn" v-if="islink"></icon>
  </div>
</template>

<script>
import icon from '@/components/icon/index.js'
export default {
  name: 'hearder',
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
    islink:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {

  },
  components: {
    icon
  },
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {

  }
}

</script>

<style lang='scss'>
.cell {
  background: #fff;
  text-align: left;
  position: relative;
  font-size: 0.35rem;
  border-bottom: 1px solid #ddd;
  padding: 0.15rem 0 0.15rem 3%;
  .cell-right {
    position: absolute;
    right: 10%;
    top: 0.15rem;
    color: #999;
  }
  .cell-iocn {
    font-size: 0.45rem;
    position: absolute;
    right: 3%;
    top: 0.18rem;
  }
}
</style>
