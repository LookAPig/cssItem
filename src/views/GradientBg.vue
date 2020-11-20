<template>
<div class="mainBody">
  <h1 class="reveal">CSS GRADIENT BACKGROUND</h1>
</div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {},
  mounted () {},
  components: {
  },
  created () {}
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.mainBody {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #b6e75a);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: white;
  transition: all .5s;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>