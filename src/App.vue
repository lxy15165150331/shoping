<template>
  <div id="app">
      <!-- <AppHeader></AppHeader> -->
      <!-- <Tabbar></Tabbar> -->
      <!-- 缓存name属性为group的组件 -->
      <keep-alive include="group">
        <router-view></router-view>
      </keep-alive>
      <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
// import Tabbar from "@/components/Tabbar"
// import AppHeader from "@/components/Header"
export default {
    created(){
      this.$store.dispatch("initCar");//dispatch用来派发actions
   },
  components:{
    // Tabbar,
    // AppHeader
  }
}
</script>
