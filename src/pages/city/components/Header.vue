<template>
    <div class="wrapper border-bottom">
        <router-link to="/">
        <div class="iconfont backicon">&#xe624;</div>
        </router-link>
        <div class="header-content">请选择城市</div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped>
.wrapper{
    height: .68rem;
    background: #00bcd4;
    line-height: .68rem;
    text-align: center;
    color: white;
}
.iconfont{
    padding-left: .2rem;
    width: .32rem;
    position: absolute;
    color: white;
}
.header-content{
    padding: 0 1rem
}
</style>
