<template>
  <div class="container" @click="galleryClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of gallaryImgs" :key="item.id">
          <img class="img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'commonGallary',
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup(props, context) {
    const swiperOption = reactive({
      pagination: '.swiper-pagination',
        loop: true,
        paginationType: 'fraction',
        observer: true,
        observeParents: true
    })

    function galleryClose () {
      context.emit('close')
    }
    return {swiperOption, galleryClose}
  }
}
</script>

<style scoped>
.container >>> .swiper-container{
  overflow: inherit;
}
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.img{
 width: 100%;
}
.swiper-pagination{
    color: #ccc;
    bottom: -1rem;
}
</style>
