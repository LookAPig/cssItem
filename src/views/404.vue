<template>
    <div class="mainBody noise-bg flex items-center justify-center">
      <svg width="0" height="0" class="absolute">
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.4" numOctaves="2" seed="2" stitchTiles="stitch" result="turbulence1">
            <animate attributeName="baseFrequency" from="0.01 0.4" to="0.01 4" dur="0.6s" repeatCount="indefinite"></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence1" scale="20" xChannelSelector="R" yChannelSelector="R" result="displacementMap" />
        </filter>
      </svg>
      <div class="text-5xl font-bold text-white noise">4 0 4</div>
    </div>
</template>
<script>
// @ is an alias to /src
import * as Three from 'three'
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    // this.init()
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:200,400,400i,700");
.mainBody {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #1a1e23;
  overflow: hidden;
}
.text-white {
  font-size: 300px;
  font-weight: bold;
  color: #ffffff;
  // animation: noiseBg 1s steps(2) infinite;
}
.noise-bg {
  position: absolute;
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    content: "";
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    animation: noiseBg 1s steps(2) infinite;
    background: url(https://i.loli.net/2020/10/21/S92bRTHIkszBcLr.png) 50%;
    pointer-events: none;
  }
}
.noise {
  filter: url('#noise')
}
@keyframes noiseBg {
  0% {
    transform: translate3d(0, 9rem, 0);
  }
  10% {
    transform: translate3d(-1rem, -4rem, 0);
  }
  20% {
    transform: translate3d(-8rem, 2rem, 0);
  }
  30% {
    transform: translate3d(9rem, -9rem, 0);
  }
  40% {
    transform: translate3d(-2rem, 7rem, 0);
  }
  50% {
    transform: translate3d(-9rem, -4rem, 0);
  }
  60% {
    transform: translate3d(2rem, 6rem, 0);
  }
  70% {
    transform: translate3d(7rem, -8rem, 0);
  }
  80% {
    transform: translate3d(-9rem, 1rem, 0);
  }
  90% {
    transform: translate3d(6rem, -5rem, 0);
  }
  to {
    transform: translate3d(-7rem, 0, 0);
  }
}

</style>