
<template>
  <div class="hearder">
    <icon type="fanhui" class="left-icon" v-if="isback" @click.native="back"></icon>
    {{title}}
    <slot name="right-slot"></slot>
  </div>
</template>

<script>
import ksHearder from '@/components/hearder/index.js'
import icon from '@/components/icon/index.js'
export default {
  name: 'hearder',
   props: {
    title: {
      type: String,
    },
    isback:{
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
    back(){
      this.$router.go(-1)
    }
  }
}

</script>

<style lang='scss'>
.hearder {
  width: 100%;
  font-size: 0.3rem;
  background: #009ad6;
  padding: 0.20rem 0;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
  .left-icon {
    position: absolute;
    left: 5%;
    top: 0.25rem;
    font-size: 0.4rem;
  }
  .right-icon {
    position: absolute;
    right: 5%;
    top: 0.2rem;
    font-size: 0.5rem;
  }
}
</style>
