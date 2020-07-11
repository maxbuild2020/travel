<template>
  <ul class="list">
      <li class="item" v-for="item of letters" :key="item" :ref="elem => elems[item] = elem"
      @click="handleClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
// import BScroll from 'better-scroll'
import {computed, ref, onUpdated} from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    list: Object
  },
  setup(props, context) {
    let touchStatus = false
    let startY =''
    let timmer = null
    const elems = ref([])
    const letters = computed(() =>{
      const letters = []
      for (let i in props.list) {
        letters.push(i)
      }
      return letters
    })
    onUpdated(() => {
      startY = elems.value['A'].offsetTop 
    })

    function handleClick (e) {
      context.emit('change', e.target.innerText)
    } 
    function handleTouchStart () {
      touchStatus = true
    }
    function handleTouchMove (e) {
      if (touchStatus) {
        if (timmer) {
          clearTimeout(timmer)
          timmer = null
        }
        timmer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 63
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    }
    function handleTouchEnd () {
      this.touchStatus = false
    }
    return {elems, letters, handleClick, handleTouchStart, handleTouchMove, handleTouchEnd}
  }
}
</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.26rem;
    right: 0;
    bottom: 0;
    width: .4rem;
}
.item{
  text-align: center;
  line-height: .4rem;
  color: #00bcd4;
}
</style>
