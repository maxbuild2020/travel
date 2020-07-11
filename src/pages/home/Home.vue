<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="data.swiperList"></HomeSwiper>
    <HomeIcon :list="data.iconList"></HomeIcon>
    <HomeRecommend :list="data.recommendList"></HomeRecommend>
    <HomeWeekend :list="data.weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcon from "./components/Icon.vue";
import HomeRecommend from "./components/Recommend.vue";
import HomeWeekend from "./components/Weekend.vue";
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    const data = reactive({
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ""
    })
    const store = useStore()
    // console.log(store.state)
    const city = store.state.city

    async function getHomeInfo() {
      // axios.get("/api/index.json?city=" + city.value).then(getHomeInfoSucc);
      let res = await axios.get("/api/index.json?city=" + city)
      if (res.data.ret && res.data.data) {
        data.swiperList = res.data.data.swiperList
        data.iconList = res.data.data.iconList
        data.recommendList = res.data.data.recommendList
        data.weekendList = res.data.data.weekendList
      }
    }
    onMounted(() => { 
      getHomeInfo()
    })

    return { data }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
