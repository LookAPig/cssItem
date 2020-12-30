<template>
<div class="mainBody">
    <!-- 导航 -->
    <div id='web_Header_Rresentation' @mouseenter="enter" @mousemove="mousemove">
            <!-- 背景图 -->
            <div class="backgroundImg">
                <div class="backgroundImg1 web_Header_BackgroundImg"></div>
                <div class="backgroundImg2 web_Header_BackgroundImg"></div>
            </div>
            <!-- 遮罩层 -->
            <div class="web_Header_Mask"></div>
            <!-- 导航栏 -->
            <div class="web_Header_Nav">
                <nav class="nav_Body">
                    <span>{{logo}}</span>
                    <span>
                        <router-link class="routerLink" to="/404"><i class="iconfont icon-chanpin">&nbsp;Special</i></router-link>
                        <router-link class="routerLink" to="/404"><i class="iconfont icon-guanyu">&nbsp;About</i></router-link>
                        <router-link class="routerLink" to="/404"><i class="iconfont icon-gengduo">&nbsp;More</i></router-link>
                        <router-link class="routerLink" to="/404"><i class="iconfont icon-denglu">&nbsp;Login</i></router-link>
                    </span>
                </nav>
            </div>
            <!-- 内容区 -->
            <div class="web_Header_Context">
                <div class="header_Context">
                    <p class="title glowIn">HI&nbsp;(゜-゜)つ!,</p>
                    <p class="title glowIn">THIS IS SWEET·TIME~</p>
                </div>
            </div>
            <!-- 提示区 -->
            <div class="web_Header_Footer">
                <div class="header_Footer">
                    <span @click="getScroll">Scroll Mouse<i class="iconfont icon-shubiao"></i>or Click Here</span>
                    <span>
                        <i class="iconfont icon-weixin"></i>
                        <i class="iconfont icon-qq"></i>
                        <i class="iconfont icon-youjian"></i>
                    </span>
                </div>
            </div>
    </div>
    <!-- 内容 -->
    <div id="web_Content_Rresentation">
        <p v-for="(i, index) in 100" :key="index">{{i}}</p>
    </div>
    <!-- 底部 -->
    <div id="web_footer_Rresentation">
        
    </div>
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
        startx: '',
        starty: '',
        projectImgArrs: [
            {id: 1, imgUrl: require('../picture/1004918.jpg')},
            {id: 2, imgUrl:  require('../picture/pic18.jpg')},
            {id: 3, imgUrl:  require('../picture/preview.jpg')},
            {id: 4, imgUrl:  require('../picture/wallhaven-oxkjgm.jpg')},
            {id: 5, imgUrl:  require('../picture/zm9kpy.jpg')},
        ],
        articleImgArrs: [
            {id: 1, imgUrl: require('../picture/oxd3mm.jpg')},
            {id: 2, imgUrl:  require('../picture/wallhaven-723732.png')},
            {id: 3, imgUrl:  require('../picture/wallhaven-756830.jpg')},
            {id: 4, imgUrl:  require('../picture/wallhaven-eyl1xr.jpg')},
            {id: 5, imgUrl:  require('../picture/wallhaven-g83m3d.jpg')},
        ]
    }
  },
  methods: {
    showMessage () {
        let glowInTexts = document.querySelectorAll(".glowIn")
        glowInTexts.forEach(glowInText => {
            let letters = glowInText.textContent.split("")
            glowInText.textContent = ""
            letters.forEach((letter, i) => {
                let span = document.createElement("span")
                span.textContent = letter
                span.style.animationDelay = `${i / 10 + 0.2}s`
                glowInText.append(span)
            })
        })
    },
    enter (e) {
        this.startx = e.clientX
        this.starty = e.clientY
    },
    mousemove (e) {
        this.ScaleX = e.clientX
        this.ScaleY =  e.clientY
        const bg1 = document.querySelectorAll('.backgroundImg1')
        const bg2 = document.querySelectorAll('.backgroundImg2')
        const title = document.querySelectorAll('.title')

        // const moveX = (e.clientX - this.startx) / 100 + 'px'
        // const moveY = (e.clientY - this.starty) / 100 + 'px'
        
        // 模糊化、视差移动
        if (this.ScaleX > 0 && this.ScaleX < document.body.clientWidth / 2) {
            bg1[0].style.animation = `backFilter 1s both`
            bg2[0].style.animation = `getFilter 1s both`
            bg1[0].style.backgroundPosition = `-6px center`
            bg2[0].style.backgroundPosition = `2px center`
            for (let i = 0; i < title.length; i++) {
                title[i].style.filter = `blur(0px)`
                title[i].style.opacity = `1`
            }
        } else if (this.ScaleX > document.body.clientWidth / 2) {
            bg1[0].style.animation = `getFilter 1s both`
            bg2[0].style.animation = `backFilter 1s both`
            bg1[0].style.backgroundPosition = `6px center`
            bg2[0].style.backgroundPosition = `-2px center`
            for (let i = 0; i < title.length; i++) {
                title[i].style.filter = `blur(6px)`
                title[i].style.opacity = `0.6`
            }
        }
    },
    getScroll () {
        // 设置滚动监听的位置
        let scrollPlace = document.querySelectorAll('#web_Content_Rresentation')
        // 需要滚动的距离
        let total = scrollPlace[0].offsetTop
        // 获取滚动条与窗体顶部的距离
        let distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 计算每一小段的距离
        let step = total / 120
        if (total > distance) {
            this.smoothDown(total, distance, step)
        }
        console.log('total', total)
        console.log('distance', distance)
    },
    smoothDown (total, distance, step) {
        if (total > distance) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            setTimeout(this.smoothDown, 2000)
        }
    },
    clipPath () {
        let section = document.getElementById('a')
        window.addEventListener('scroll', () => {
            let value = window.scrollY
            section.style.clipPath = `circle(${value}px at center)`
        })
    }
  },
  mounted () {
    this.showMessage()
    // window.addEventListener('scroll', this.getScroll)
    window.addEventListener('scroll', this.clipPath)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  },
  components: {
  },
  created () {}
}
</script>
<style lang="scss">
    $containerWidth: calc(100%*0.65 + 100px);
    $fontColor: #ffffff;
    // 屏幕长宽
    @mixin screenWidth($w, $h) {
        width: $w;
        height: $h;
    }
    .mainBody {
        padding: 0;
        margin: 0;
        font-family: '思源黑体 CN';
        color: #333333;
        transition: all 0.6s;
    }

    #web_Header_Rresentation {
        overflow: -moz-scrollbars-none;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        @include screenWidth(100%, 100vh);
        position: relative;
        background: url('../picture/bakcgroundImg.png') no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        // 背景图
        .backgroundImg1 { background: url('../picture/bg1-2.png') no-repeat; filter: blur(0px);}
        .backgroundImg2 { background: url('../picture/bg2-2.png') no-repeat; filter: blur(6px);}

        & .web_Header_BackgroundImg {
            @include screenWidth(100%, 100vh);
            position: absolute;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            z-index: 1;
            transition: all 1.2s;
        }
        
        // 遮罩层
        & .web_Header_Mask {
            @include screenWidth(100%, 100vh);
            background-color: rgba($color: #000000, $alpha: 0.1);
            position: absolute;
            z-index: 2;
        }

        // 导航栏
        & .web_Header_Nav {
            width: 100%;
            position: absolute;
            top: 0;
            z-index: 3;
            padding: 3vh 0;
            opacity: 0;
            transition: all 3.3s;
            animation: show 1s ease-out forwards 3.3s;
            .nav_Body {
                width: $containerWidth;
                color: $fontColor;
                margin: 0 auto;
                clear: both;
                overflow: hidden;
                span:nth-child(1) {
                    cursor: pointer;
                    float: left;
                    font-family: '汉仪菱心体简';
                    font-size: 3vw;
                    line-height: 3vw;
                    transition: all 1s;
                }
                span:nth-child(1):hover {
                    color: #78b6df;;
                }
                span:nth-child(2) {
                    cursor: pointer;
                    float: right;
                    font-weight: 600;
                    & i {
                        font-size: 1.2vw;
                        line-height: 3vw;
                    }
                    & a {
                        text-transform: uppercase;
                        color: $fontColor;
                        margin-left: 50px;
                        transition: all 1s;
                    }
                    & a:hover {
                        color: #78b6df;
                        text-decoration: none;
                    }
                }
            }
        }

        // 内容展示区
        & .web_Header_Context {
            width: 100%;
            color: $fontColor;
            z-index: 3;
            position: absolute;
            text-align: left;
            font-family: '汉仪菱心体简';
            top: 50%;
            transform: translateY(-50%);
            cursor: default;
            
            .header_Context {
                width: $containerWidth;
                margin: 0 auto;
                & .glowIn span {
                    transition: all 1.6s;
                    animation: glow-in 1.6s both;
                }
                & .title:nth-child(1) { font-size: 2vw; transition: all 1.2s; }
                & .title:nth-child(2) { font-size: 3.6vw; transition: all 1.2s; }
            }
        }

        // 底部提示区
        & .web_Header_Footer {
            cursor: default;
            width: 100%;
            color: $fontColor;
            z-index: 3;
            position: absolute;
            bottom: 3vh;
            font-weight: 600;
            opacity: 0;
            transition: all 3.3s;
            animation: show 1s ease-out forwards 3.3s;
            .header_Footer {
                width: $containerWidth;
                margin: 0 auto;
                text-transform: uppercase;
                cursor: pointer;
                & span:nth-child(1) {
                    float: left;
                    i {
                        display: inline-block;
                        margin: 0 10px;
                        vertical-align: middle;
                        font-size: 2vw;
                        transition: all 0.6s;
                        animation: scrollMouse 1s linear infinite alternate;
                    }
                    
                }
                & span:nth-child(2) i {
                    font-size: 1.5vw;
                    float: right;
                    margin-left: 40px;
                    transition: all 1s;
                }
                & span:nth-child(2) i:hover{
                    color: #78b6df;
                }
            }
        }
    }

    #web_Content_Rresentation {
        width: 100%;
        padding: 4vh 4vw;
    }

    // 动画
    @keyframes getFilter {
        from {
            filter: blur(0px);
        }
        to {
            filter: blur(6px);
        }
    }
    @keyframes backFilter {
        from {
            filter: blur(6px);
        }
        to {
            filter: blur(0px);
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
    @keyframes show {
        to {
            opacity: 1;
        }
    }
    @keyframes scrollMouse {
        from {
            transform: translateY(-10px);
        }
        25% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(5px);
        }
        to {
            transform: translateY(10px);
        }
    }
</style>