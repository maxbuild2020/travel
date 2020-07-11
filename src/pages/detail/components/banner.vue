<template>
    <div>
        <div class="banner" @click="handleBannerClick">
        <img :src="bannerImg">
        <div class="banner-info">
            <div class="banner-tittle">{{sightName}}</div>
            <div class="banner-number">
                <div class="banner-icon">
                    <span class="iconfont arrow-icon">&#xe64a;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        </div>
        <commonGallary
        v-show="showGallary"
        @close="closeGallary"
        :gallaryImgs="gallaryImgs"
        ></commonGallary>
    </div>
</template>

<script>
import commonGallary from '../../common/Gallary'
import {ref} from 'vue'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    commonGallary
  },
  setup() {
    const showGallary = ref(false)
    function handleBannerClick () {
      showGallary.value = true
    }
    function closeGallary () {
      showGallary.value = false
    }
    return {showGallary, handleBannerClick, closeGallary}
  }
}
</script>

<style scoped>
.banner{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
}
.banner img{
    width: 100%;
}
.banner-info{
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #ffffff;
    line-height: .6rem;
    padding: .05rem 0;

}
.banner-tittle{
    font-size: .35rem;
    flex: 1;
}
.banner-number{
    background: rgba(0, 0, 0, 0.3);
    height: .4rem;
    line-height: .4rem;
    margin-top: .1rem;
    margin-right: .4rem;
    border-radius: .1rem;
}
</style>
