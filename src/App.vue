<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/404">404</router-link> |
      <router-link to="/snow">Snow</router-link> |
      <router-link to="/dna">DNALoding</router-link> |
      <router-link to="/show">Show</router-link>
    </div> -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{
      transitionName:"",
    } 
  },
  // 监听,当路由发生变化的时候执行
  watch:{
    $route (to,from) {
      //实现路由跳转动画
      if (to.meta.index > from.meta.index)  
        this.transitionName = "slide-left"
      if (to.meta.index < from.meta.index)
        this.transitionName = "slide-right"
      if (to.meta.index = from.meta.index)
        this.transitionName = "slide-right"
    }
  }
}
</script>
<style scope lang="scss">
html{
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style: none;
  /*火狐下隐藏滚动条*/
  overflow: -moz-scrollbars-none;
}
//谷歌适用
::-webkit-scrollbar{
    display: none;
}
body {
  padding: 0;
  margin: 0;
}
p {
  margin: 0!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // height: 100vh;
  // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  // overflow: hidden;
  // filter: drop-shadow(0 0 10px white);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 600ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
