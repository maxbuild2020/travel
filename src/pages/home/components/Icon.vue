<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.index">
                    <div class="icon-img">
                     <img class="icon-img-content" :src="item.imgUrl">
                </div>
                <p class="icon-text">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    const pages = computed(() => {
      const pages = []
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }) 
    return{swiperOption, pages}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper >>> .swiper-pagination-bullet-active{
    background-color: black;
}
.wrapper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 40%;
    margin-top: .1rem;
}
.icon{
    width: 25%;
    padding-bottom: 20%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
}
.icon-img{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .3rem;
    box-sizing: border-box;
    padding: .1rem;
}
.icon-img-content{
    height: 100%;
}
.icon-text{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    color: #cccccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.swiper-slide{
    height: 0;
    padding-bottom: 40%
}
</style>
