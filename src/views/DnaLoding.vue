<template>
    <div class="mainBody">
        <div class="dna-loader-3d" style="--count: 30;">
            <div class="orbit" style="--i:1">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:2">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:3">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:4">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:5">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:6">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:7">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:8">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:9">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:10">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:11">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:12">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:13">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:14">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:15">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:16">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:17">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:18">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:19">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:20">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:21">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:22">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:23">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:24">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:25">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:26">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:27">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:28">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:29">
                <div class="ball"></div>
            </div>
            <div class="orbit" style="--i:30">
                <div class="ball"></div>
            </div>
        </div>
    </div>
</template>
<script>
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
.mainBody {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #454344;
  --grey-color: #454344;
  --blue-color: rgb(98, 119, 236);
  --red-color: rgb(235, 97, 97);
}

// :root {
//   --grey-color: #454344;
//   --blue-color: var(--primary-color-darker);
//   --red-color: var(--danger-color-darker);
// }

*,
*::before,
*::after {
  transform-style: preserve-3d;
}

.dna-loader-3d {
  --ball-width: 0.75rem;
  --rotate-radius: 3rem;
  --rotate-duration: 2s;
  --anime: var(--rotate-duration) linear both infinite;

  display: flex;
  flex-direction: column;
  perspective: 500px;

  .orbit {
    --rotate-delay-even: calc(
      var(--rotate-duration) / var(--count) * var(--i) * -2
    );
    --rotate-delay-odd: calc(
      var(--rotate-delay-even) - calc(var(--rotate-duration) * 0.5)
    );

    position: relative;
    width: var(--ball-width);
    height: var(--ball-width);
    animation: rotate-y var(--anime) var(--rotate-delay);

    .ball {
      position: relative;
      width: 100%;
      height: 100%;
      transform: translateZ(
        calc(var(--rotate-radius) * -1)
      ); // 模拟圆柱运动，用transform-origin的第三个参数也可以，但会贴着面运动，不好看

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: var(--ball-color);
        border-radius: 50%;
        animation: rotate-y-reverse var(--anime) var(--rotate-delay); // 反向旋转，与父元素的正向旋转相抵消
      }
    }

    &:nth-child(odd) {
      --ball-color: var(--blue-color);
      --rotate-delay: var(--rotate-delay-odd);
    }

    &:nth-child(even) {
      --ball-color: var(--red-color);
      --rotate-delay: var(--rotate-delay-even);
    }
  }
}

@keyframes rotate-y {
  from {
    transform: rotateY(0);
  }

  to {
    transform: rotateY(1turn);
  }
}

@keyframes rotate-y-reverse {
  from {
    transform: rotateY(0);
  }

  to {
    transform: rotateY(-1turn);
  }
}

</style>