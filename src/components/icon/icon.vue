
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-'+type"></use>
  </svg>
</template>

<script>
require('@/assets/font/iconfont.js');
export default {
  name: 'hearder',
  props: {
    type:String
  },
  data() {
    return {

    }
  },
  computed: {

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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
