<template>
<div class="mainBody">
    <!-- 图片展示部分 -->
    <div class="header">
        <div class="mask"></div>
        <div id="bigImage"></div>
        <div class="context">
            <nav>
                
            </nav>
            <section>
                <!-- <p class="glowIn">你好，</p>
                <p class="glowIn">这里是SWEET·TIME</p> -->
                <p class="glowIn"><span style="animation-delay: 0.1s;">你</span><span style="animation-delay: 0.2s;">好，</span></p>
                <p class="glowIn">
                    <span style="animation-delay: 0.3s;">这</span>
                    <span style="animation-delay: 0.4s;">里</span>
                    <span style="animation-delay: 0.5s;">是</span>
                    <span style="animation-delay: 0.6s;">S</span>
                    <span style="animation-delay: 0.7s;">W</span>
                    <span style="animation-delay: 0.8s;">E</span>
                    <span style="animation-delay: 0.9s;">E</span>
                    <span style="animation-delay: 1s;">T</span>
                    <span style="animation-delay: 1.1s;">·</span>
                    <span style="animation-delay: 1.2s;">T</span>
                    <span style="animation-delay: 1.3s;">I</span>
                    <span style="animation-delay: 1.4s;">M</span>
                    <span style="animation-delay: 1.5s;">E</span>
                </p>
            </section>
        </div>
    </div>
    <div>
        <p>123</p>
        <p>123</p>
        <p>123</p>

        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>

        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>

        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>

        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>

        <p>123</p>
        <p>123</p>
        <p>123</p>
    </div>
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
  mounted () {
    // let glowInTexts = document.querySelectorAll(".glowIn");
    //     glowInTexts.forEach(glowInText => {
    //     let letters = glowInText.textContent.split("");
    //     glowInText.textContent = "";
    //     letters.forEach((letter, i) => {
    //         let span = document.createElement("span");
    //         span.textContent = letter;
    //         span.style.animationDelay = `${i / 10 + 0.1}s`;
    //         // span.style.animation = `glow-in 1.6s both`;
    //         glowInText.append(span);
    //     });
    // });
  },
  components: {
  },
  created () {}
}
</script>
<style lang="scss" scoped>
    .header {
        position: relative;
        & > .mask {
            width: 100%;
            height: 100vh;
            background-color: rgba($color: #000000, $alpha: 0.1);
            position: absolute;
            z-index: 2;
        }
        & > #bigImage {
            width: 100%;
            height: 100vh;
            background: url('../picture/wallhaven-eymzjk.jpg') no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            filter: blur(0.6px);
            z-index: 1;
        }
        & > .context {
            width: 1200px;
            height: 100vh;
            color: white;
            z-index: 3;
            font-family: '汉仪菱心体简';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            & section {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                text-align: left;
                & .glowIn span {
                    translate: all 0.5s;
                    animation: glow-in 1.6s both;
                }
                & .glowIn:nth-child(1) {
                    font-size: 3vh;
                }
                & .glowIn:nth-child(2) {
                    font-size: 6vh;
                }
            }
        }
    }
    @keyframes glow-in {
        from {
            opacity: 0;
        }
        65% {
            opacity: 0;
            text-shadow: 0 0 25px white;
        }
        75% {
            opacity: 0.8;
        }
        to {
            opacity: 1;
        }
    }
</style>