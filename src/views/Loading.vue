<template>
<div class="mainBody">
    <svg width='100' height='100'>
        <circle class="mouth circleList" cx="50" cy="50" r="30"></circle>
        <circle class="eye circleList" cx="50" cy="50" r="30"></circle>
    </svg>   
</div>
</template>
<script>
import { TimelineLite, TweenLite, TimelineMax, TweenMax, gsap } from "gsap";
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {},
  mounted () {},
  components: {
  },
  created () {
    // this.init()
  }
}
</script>
<style lang="scss" scoped>
.mainBody {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2980b9;
}
.circleList {
    fill: none;
    stroke: white;
    stroke-width: 8;
    stroke-linecap: round;
    transform-origin: center;
}
.mouth {
    stroke-dasharray: 94, 94;
    animation: turnAround 2.8s ease-out infinite;
}
.eye {
    stroke-dasharray: 0, 141;
    transform: rotate(-45deg);
    animation: eyeTurnAround 2.8s ease-in-out infinite;
}
@keyframes turnAround {
    40% {
        stroke-dasharray: 94, 47;  
    }
    80%, 100% {
        stroke-dasharray: 94, 94;
        transform: rotate(720deg);
    }
}
@keyframes eyeTurnAround {
    40% {
        stroke-dasharray: 0, 165  
    }
    80%, 100% {
        stroke-dasharray: 0, 141;
        transform: rotate(675deg);
    }
}
</style>