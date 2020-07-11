<template>
  <div>
    <div class="item" v-for="item of categoryList" :key="item.title">
      <div class="item-title border-bottom">
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detailList :categoryList="item.children" class="item-child"></detailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped>
.item-title {
  padding: 0.1rem 0 0.1rem 0.5rem;
  font-size: 0.32rem;
}
.item-child{
  padding-left: .5rem;
}
</style>
