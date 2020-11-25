<template>
<div class="mainBody">
    <!-- 导航栏部分 -->
    <header class="header_nav">
        <nav class="nav_itme">
            <span class="logo">{{logo}}</span>
            <span class="nav_item">
                <router-link class="routerLink" to="/404">专题</router-link>
                <router-link class="routerLink" to="/404">概述</router-link>
                <router-link class="routerLink" to="/404">更多</router-link>
                <router-link class="routerLink" to="/404">登录</router-link>
            </span>
        </nav>       
    </header>
    <!-- 图片展示部分 -->
    <header class="header_img" @mousemove="mousemove">
        <div class="mask"></div>
        <div class="bigImage"></div>
        <div class="context">
            <section>
                <!-- <p class="glowIn">你好，</p>
                <p class="glowIn">这里是SWEET·TIME</p> -->
                <p class="glowIn"><span style="animation-delay: 0.0s;">你</span><span style="animation-delay: 0.1s;">好</span><span style="animation-delay: 0.2s;">，</span></p>
                <p class="glowIn">
                    <span style="animation-delay: 0.3s;">这</span>
                    <span style="animation-delay: 0.4s;">里</span>
                    <span style="animation-delay: 0.5s;">是</span>
                    <span style="animation-delay: 0.6s;">S</span>
                    <span style="animation-delay: 0.7s;">W</span>
                    <span style="animation-delay: 0.8s;">E</span>
                    <span style="animation-delay: 0.9s;">E</span>
                    <span style="animation-delay: 1.0s;">T</span>
                    <span style="animation-delay: 1.1s;">·</span>
                    <span style="animation-delay: 1.2s;">T</span>
                    <span style="animation-delay: 1.3s;">I</span>
                    <span style="animation-delay: 1.4s;">M</span>
                    <span style="animation-delay: 1.5s;">E</span>
                </p>
            </section>
        </div>
    </header>
    <div>
        <p v-for="i in 100" :key="i">123</p>
    </div>
    <footer>
        <div class="icpContext">
            <span>粤ICP备20201031号</span>
            <span>
                <i style="margin-left: 40px;" class="iconfont icon-weixin"></i>
                <i style="margin-left: 40px;" class="iconfont icon-qq"></i>
                <i style="margin-left: 40px;" class="iconfont icon-youjian"></i>
            </span>
        </div>
    </footer>
</div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
        logo: 'S·T',
        ScaleX: '',
        ScaleY: '',
    }
  },
  methods: {
    mousemove (e) {
        this.ScaleX = e.clientX
        this.ScaleY =  e.clientY
        const banner = document.querySelectorAll('.bigImage')
        if (this.ScaleX > 0 && this.ScaleX <= document.body.clientWidth / 4) {
            banner[0].style.filter = `blur(0px)`
        } else if (this.ScaleX > document.body.clientWidth / 4 && this.ScaleX <= document.body.clientWidth / 2) {
            banner[0].style.filter = `blur(0.8px)`
        } else if (this.ScaleX > document.body.clientWidth / 2 && this.ScaleX <= document.body.clientWidth * (3 / 4)) {
            banner[0].style.filter = `blur(1.6px)`
        }  else if (this.ScaleX > document.body.clientWidth * (3 / 4) && this.ScaleX <= document.body.clientWidth) {
            banner[0].style.filter = `blur(3.2px)`
        }
    }
  },
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
    $containerWidth: calc(100%*0.65 + 100px);
    .mainBody {
        font-family: '思源黑体 CN';
        color: #666666
    }
    .header_nav {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;
        & > nav {
            width: calc(100%*0.65 + 100px);
            margin: 0 auto;
            color: white;
            padding: 2vh 0;
            clear: both;
            overflow: hidden;
            & .logo {
                cursor: pointer;
                float: left;
                font-family: '汉仪菱心体简';
                font-size: 5vh;
                line-height: 5vh;
            }
            & .nav_item {
                float: right;
                line-height: 5vh;
                & a {
                    font-size: 2vh;
                    font-weight: 600;
                    margin-left: 50px;
                    color: white;
                    transition: all .6s;
                }
                & .routerLink:hover {
                    cursor: pointer;
                    color: #5793e0;
                    text-decoration: none;
                    transform: scale(1.4);
                }
            }
        }
    }
    .header_img {
        position: relative;
        & > .mask {
            width: 100%;
            height: 100vh;
            background-color: rgba($color: #000000, $alpha: 0.1);
            position: absolute;
            z-index: 2;
        }
        & > .bigImage {
            width: 100%;
            height: 100vh;
            background: url('../picture/wallhaven-eymzjk.jpg') no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            filter: blur(0.6px);
            z-index: 1;
            transition: all 0.8s;
        }
        & > .context {
            width: $containerWidth;
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
                    cursor: default;
                    translate: all 0.5s;
                    animation: glow-in 2s both;
                }
                & .glowIn:nth-child(1) {
                    font-size: 2vw;
                }
                & .glowIn:nth-child(2) {
                    font-size: 3.6vw;
                }
            }
        }
    }
    footer {
        position: relative;
        width: 100%;
        height: 80px;
        border-top: 1px rgba($color: #666666, $alpha: 0.4) solid;
        & > .icpContext {
            width: $containerWidth;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            & span:nth-child(1) {
                cursor: default;
                float: left;
                font-weight: 600;
                line-height: 45px;
            }
            & span:nth-child(2) {
                float: right;
                & .iconfont {
                    cursor: pointer;
                    transition: all 0.6s;
                    font-size: 30px;
                }
                & .iconfont:hover {
                    color: #5793e0;
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