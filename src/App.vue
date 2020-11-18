<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/404">404</router-link> |
      <router-link to="/snow">Snow</router-link> |
      <router-link to="/dna">DNALoding</router-link> |
      <router-link to="/show">Show</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

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
</style>
