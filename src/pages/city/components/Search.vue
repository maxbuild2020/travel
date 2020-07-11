<template>
  <div>
    <div class="wrapper">
      <input class="input" placeholder="输入城市名或拼音" v-model="keyword"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="list border-bottom" v-for="item of list" :key="item.id"
          @click="handleCityClick(item.name)"
          >{{item.name}}</li>
          <li class="list border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed, watch, onMounted, ref} from 'vue'
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup(props) {
    const keyword = ref('')
    const list = ref([])
    const search = ref(null)
    let timer = null
    const store = useStore()
    const router = useRouter()
    const hasNoData = computed(() => {
      return !list.value.length})

    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    watch(keyword, (keyword,prevKeyword) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) {
          list.value = []       
          return
        }
      timer = setTimeout(() => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (value.spell.indexOf(keyword.toLowerCase()) > -1 ||
            value.name.indexOf(keyword) > -1) {
              result.push(value)
              
            }
          })
        }
        list.value = result
        // console.log(!list.value.length)
      }, 100)
    })

  onMounted(() =>{
    new BScroll(search.value, {click: true})
  })
  return {keyword, list, hasNoData, handleCityClick, search}
  }
}
</script>

<style scoped>
.wrapper {
  height: 0.58rem;
  background: #00bcd4;
  line-height: 0.58rem;
  text-align: center;
}
.input {
  width: 95%;
  border-radius: 0.05rem;
  text-align: center;
  font-size: 0.26rem;
  color: #ccc;
  box-sizing: border-box;
  padding: 0 0.1rem;
}
.search-content{
  z-index: 1;
  position: absolute;
  top: 1.26rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
}
.list{
  background: #fff;
  color: #666;
  line-height: .48rem;
  padding-left: .2rem;
}
</style>
