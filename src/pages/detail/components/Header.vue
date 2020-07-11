<template>
  <div class="header">
    <router-link to="/" tag="div" class="header-abs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="showHeader"
         :style="opacityStyle">
        <router-link to="/" tag="div" class="iconfont back-fix">&#xe624;</router-link>
        景点详情
      </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
export default {
  name: 'bannerHeader',
  setup() {
    const showHeader = ref(false)
    const opacityStyle = reactive({
      opacity: 0
    })
  
  function handleScroll () {
    let top = document.documentElement.scrollTop || window.pageYOffset
    if (top > 50) {
      let opacity = top / 120
      opacity = opacity > 1 ? 1 : opacity
      opacityStyle.opacity = opacity
      showHeader.value = true
      } else {
      showHeader.value = false
      }
    }
    onMounted(()=> {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(()=> {
      window.removeEventListener('scroll', handleScroll)
    })
    return {showHeader, opacityStyle }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-abs{
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: .6rem;
  height: .6rem;
  line-height: .6rem;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  border-radius: .3rem;
}
.back-icon{
  color: #cccccc;
  font-size: .4rem;
}
.header-fixed{
  line-height: .86rem;
  width: 100%;
  background: #00bcd4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: .33rem;
  z-index: 2;
}
.back-fix{
  position: absolute;
  top: 0;
  left: 0;
  width: .64rem;
}
</style>
