<template>
  <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="img-wrapper">
                    <img class="img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}

</script>

<style scoped>
.title{
    background: #eee;
    line-height: .8rem;
    text-indent: .2rem;
}
.img-wrapper{
    height: 0;
    overflow: hidden;
    padding-bottom: 37.9%;
}
.item img{
    width: 100%;
}
.item-info{
    min-width: 0;
    padding: .1rem
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
    /* width: 5rem; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-desc{
    line-height: .36rem;
    font-size: .28rem;
    color: #ccc;
}
button{
    background: #ff9300;
    padding: 0 0.1rem;
    border-radius: .06rem;
    color: white;
}
</style>
