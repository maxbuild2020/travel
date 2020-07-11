<template>
    <div>
      <detailBanner :sightName="data.sightName" :bannerImg="data.bannerImg" :gallaryImgs="data.gallaryImgs"></detailBanner>
      <bannerHeader></bannerHeader>
      <div class="content">
        <bannerList :categoryList="data.categoryList"></bannerList>
      </div>
    </div>
</template>

<script>
import detailBanner from './components/banner'
import bannerHeader from './components/Header'
import bannerList from './components/list'
import axios from 'axios'
import {reactive, onMounted} from 'vue'

export default {
  name: 'Detail',
  components: {
    detailBanner,
    bannerHeader,
    bannerList
  },
  setup() {
    const data = reactive({
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    })
    async function getDetailInfo () {
      const res = await axios.get('/api/detail.json')
      data.sightName = res.data.data.sightName
      data.bannerImg = res.data.data.bannerImg
      data.gallaryImgs = res.data.data.gallaryImgs
      data.categoryList = res.data.data.categoryList
    }
    onMounted(() =>{
      getDetailInfo()
    })
    return {data}
  }
}
</script>

<style scoped>
.content{
  height: 15rem;
}
</style>
