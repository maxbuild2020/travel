<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
            <div class="title border-bottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{currentyCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-bottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of list1" :key="item.id" @click="handleCityClick(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of list2" :key="item.key" :ref="elem => elems[key] = elem">
            <div class="title border-topbottom">{{key}}</div>
                <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id"
                @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted, watch, ref} from 'vue'
import {useRouter} from 'vue-router'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    list1: Array,
    list2: Object,
    letter: String
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const currentyCity = store.state.city
    const wrapper = ref(null)
    const elems = ref({})
    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }
  watch(() => props.letter,(letter,prevLetter) => {
    if (letter && scroll) {
      const element = elems.value[letter]
      scroll.scrollToElement(element)
    }
  })
  onMounted(() =>{
    scroll = new BScroll(wrapper.value, {click: true})
  })
  return {elems, wrapper, currentyCity, handleCityClick}
  }
}
</script>

<style scoped>
.list{
    position: absolute;
    overflow: hidden;
    top: 1.26rem;
    left: 0;
    right: 0;
    bottom: 0;
}
.title{
    line-height: .44rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
}
.button-list{
    overflow: hidden;
    padding: .1rem .4rem;
}
.button-wrapper{
    width: 33.3%;
    float: left;
}
.button{
    margin: .1rem;
    padding: .08rem 0;
    border: .02rem solid #00bcd4;
    border-radius: .05rem;
    text-align: center;
    font-size: .26rem;
}
.item{
    padding: .1rem .2rem;
    font-size: .26rem;
}
</style>
