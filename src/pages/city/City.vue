<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="data.Cities"></CitySearch>
        <CityList :list1="data.Hotcity" :list2="data.Cities" :letter="letter"></CityList>
        <CityAlphabet :list="data.Cities"
        @change="handleLetterChange"></CityAlphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
import {onMounted} from 'vue'
import {reactive, ref} from 'vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup() {
    const {letter, handleLetterChange} = useLetterLogic()
    const {data} = useCityLogic()
    return {data, letter, handleLetterChange}
  }
}

function useLetterLogic() {
    const letter = ref('')
    function handleLetterChange (selected) {
      letter.value = selected
    }
    return {letter, handleLetterChange}
  }

function useCityLogic() {
  const data = reactive({
      Hotcity: [],
      Cities: {},
  })
  async function getCityinfo () {
      let res = await axios.get('/api/city.json')
      if (res.data.ret && res.data.data) {
        data.Hotcity = res.data.data.hotCities
        data.Cities = res.data.data.cities
      }
  }
  onMounted(() => { getCityinfo() })
  return {data}
}
</script>

<style scoped>
</style>
