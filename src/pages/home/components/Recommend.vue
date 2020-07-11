<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id"
            class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeReconmmend',
  props: {
    list: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    background: #eee;
    margin-top: .2rem;
    line-height: .6rem;
    text-indent: .3rem;
}
.item{
    display: flex;
    height: 1.9rem;
    overflow: hidden;
}
.item img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem
}
.item-info{
    flex: 1;
    min-width: 0;
    padding: .1rem
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
    /* width: 5rem; */
}
.item-desc{
    line-height: .36rem;
    font-size: .28rem;
    color: #ccc;
    padding-top: .1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
button{
    margin-top: .25rem;
    background: #ff9300;
    padding: 0 0.1rem;
    border-radius: .06rem;
    color: white;
}
</style>
