<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {computed} from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: 2000
    }
    const showSwiper =  computed(() => props.list.length)
    return {swiperOption, showSwiper}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.4%;
}
.swiper-img {
  width: 100%;
}
</style>
