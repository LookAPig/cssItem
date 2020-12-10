<template>
<div class="mainBody">

    <!-- 图片展示部分 -->
    <header class="header_img" @mouseenter="enter" @mousemove="mousemove">
        <!-- 导航栏部分 -->
        <div class="header_nav">
            <nav class="nav_itme">
            <span class="logo">{{logo}}</span>
            <span class="nav_item">
                <router-link class="routerLink" to="/404">专题</router-link>
                <router-link class="routerLink" to="/404">概述</router-link>
                <router-link class="routerLink" to="/404">更多</router-link>
                <router-link class="routerLink" to="/404">登录</router-link>
            </span>
        </nav>  
        </div>
        <div class="mask"></div>
        <div class="bigImage"></div>
        <div class="context">
            <section>
                <p class="glowIn">你好，</p>
                <p class="glowIn">这里是SWEET·TIME~</p>
                <!-- <p class="glowIn"><span style="animation-delay: 0.0s;">你</span><span style="animation-delay: 0.1s;">好</span><span style="animation-delay: 0.2s;">，</span></p>
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
                    <span style="animation-delay: 1.7s;">~</span>
                </p> -->
            </section>
        </div>
        <div class="header_footer">
            <span>滚动鼠标或者点这里</span>
        </div>
    </header>
    <div class="cardItem" id="cardItem">
        <div class="card_left">
            <div class="card card_itme" v-for="i in articleImgArrs" :key="i.id">
                <div class="article_title">
                    <span class="highlight" style="float:left;transition: all 1s;">文章标题{{i.id}}</span>
                    <i style="float:right" class="iconfont icon-lianjie highlight"></i>
                </div>
                <div class="aritcle_content">123123112312312321312312312321312312312321312312312321312312312321312312312321312312312321312312312321312312312321323213</div>
                <div class="aritcle_img">
                    <img :src="i.imgUrl" />
                </div>
                <div class="aritcle_footer">
                    <span style="float:left">发布时间：2020/10/31</span>
                    <span style="float:right">
                        <i class="iconfont icon-aixin">233</i>
                        <i class="iconfont icon-pinglun">123</i>
                    </span>
                </div>
            </div>
            <div class="card card_loading">

            </div>
        </div>
        <div class="card_right">
            <div class="card">
                <p class="highlight" style="cursor: pointer;transition: all 1s;">寻求合作|支持我们</p>
            </div>
            <div class="top_five">
                <p class="top_title">S·T精选<span style="color:#ef6c6c; font-size:20px;">TOP5</span></p>
                <div class="top_context">
                    <p v-for="i in 5" :key="i">NO.{{i}}&nbsp;内容内容内容内容内容内容内容内容内容内容内容内容</p>
                </div>
            </div>
            <div class="project">
                <p class="project_title">S·T专题<span style="color:#5793e0; float: right;cursor: pointer">查看全部</span></p>
                <div class="project_context">
                    <div class="project_item" v-for="i in projectImgArrs" :key="i.id">
                        <span class="project_itemTitle">S·T专题{{i.id}}</span>
                        <span class="project_button"><span>查看专题</span></span>
                        <div class="mask"></div>
                        <div class="project_img">
                            <img :src="i.imgUrl" style="max-width: 100%;border-radius: .45em;transition: all 0.6s;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    enter (e) {
        this.startx = e.clientX
        this.starty = e.clientY
    },
    mousemove (e) {
        this.ScaleX = e.clientX
        this.ScaleY =  e.clientY
        const banner = document.querySelectorAll('.bigImage')
        const moveX = (e.clientX - this.startx) / 100 + 'px'
        const moveY = (e.clientY - this.starty) / 100 + 'px'
        
        // 模糊化
        if (this.ScaleX > 0 && this.ScaleX <= document.body.clientWidth / 4) {
            banner[0].style.filter = `blur(0px)`
        } else if (this.ScaleX > document.body.clientWidth / 4 && this.ScaleX <= document.body.clientWidth / 2) {
            banner[0].style.filter = `blur(0.8px)`
        } else if (this.ScaleX > document.body.clientWidth / 2 && this.ScaleX <= document.body.clientWidth * (3 / 4)) {
            banner[0].style.filter = `blur(1.6px)`
        }  else if (this.ScaleX > document.body.clientWidth * (3 / 4) && this.ScaleX <= document.body.clientWidth) {
            banner[0].style.filter = `blur(3.2px)`
        }
        // 视差移动
        banner[0].style.backgroundPosition = moveX + ' ' + moveY
    },
    getScroll () {
        // 设置滚动监听的位置
        let scrollPlace = document.querySelectorAll('.cardItem')
        // 需要滚动的距离
        let total = scrollPlace[0].offsetTop
        // 获取滚动条与窗体顶部的距离
        let distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 计算每一小段的距离
        let step = total / 100
        if (total > distance) {
            this.smoothDown(total, distance, step)
        } else {
            let newTotal = distance - total
            step = newTotal / 50
            // this.smoothUp(total, distance, step)
        }
    },
    smoothDown (total, distance, step) {
        if (total > distance) {
            distance += step
            document.body.scrollTop = distance - 30
            document.documentElement.scrollTop = distance - 30
            window.pageYOffset = distance
            let cardItem = document.querySelectorAll('.card_itme')
            // for (let i = 0; i < cardItem.length; i++) {
            //     cardItem[i].style.animation = `goto ${i + 3}s linear`
            // }
            setTimeout(this.smoothDown, 2000)
        }
    },
    // smoothUp (total, distance, step) {
    //     if (total < distance) {
    //         distance -= step
    //         document.body.scrollTop = distance - 20
    //         document.documentElement.scrollTop = distance - 20
    //         window.pageYOffset = distance
    //         setTimeout(this.smoothUp, 2800)
    //     }
    // }
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
    // this.$forceUpdate()
    let glowInTexts = document.querySelectorAll(".glowIn");
    console.log(glowInTexts)
    glowInTexts.forEach(glowInText => {
        let letters = glowInText.textContent.split("");
        glowInText.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i / 10 + 0.2}s`;
            // span.style.animation = `glow-in 1.6s both`;
            glowInText.append(span);
        });
    });
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
    .mainBody {
        font-family: '思源黑体 CN';
        color: #666666;
        scroll-snap-type: y mandatory;
    }
    .header_img {
        scroll-snap-align: start;
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
            transition: filter 0.6s;
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
    .header_nav {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 100;
        & > nav {
            width:  $containerWidth;
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
    .header_footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: $containerWidth;
        margin: 0 auto;
    }
    .card {
        border-radius: 0.45em;
        cursor: pointer;
    }
    .card:hover .highlight {
        color: #5793e0;
    }
    .cardItem {
        width: $containerWidth;
        margin: 4vh auto;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 4vw;
        // scroll-behavior: smooth;
        scroll-snap-align: start;
        // 主题左边
        & > .card_left {
            width: 100%;
            overflow: hidden;
            .card_itme {
                padding: 4vh;
                margin-bottom: 4vh;
                translate: all 1s;
                // overflow: hidden;
                .article_title * {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 2vh;
                }
                .aritcle_content {
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: 2vh;
                }
                .aritcle_img {
                    padding: 1vh;
                    border: 1px solid rgba($color: #666666, $alpha: 0.2);
                    border-radius: 0.45em;
                    margin-bottom: 2vh;
                    overflow: hidden;
                    & > img {
                        border-radius: 0.45em;
                        max-width: 100%;
                        transition: all 0.8s;
                    }
                    & > img:hover {
                        transform: scale(1.2);
                    }
                }
                .aritcle_footer span:nth-child(2) i {
                    margin-left: 20px;
                }
            }
        }
        
        // 主题右边
        & > .card_right {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            & .card {
                padding: 10px;
                font-weight: 600;
                margin-bottom: 3vh;
            }
            .top_title,.project_title {
                position: relative;
                font-weight: bold;
                text-align: left;
                overflow: hidden;
                cursor: default;
                margin-bottom: 2vh!important;
            }
            .top_title::after,.project_title::after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                margin-left: 10px;
                width: 100%;
                height: 1px;
                background-color: #666666;
            }

            // TOP5
            & > .top_five {
                margin-bottom: 3vh;
                & .top_context p {
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: all 0.6s;
                    margin-bottom: 4vh!important;
                    font-weight: 600;
                }
                & .top_context p:hover {
                    color: #5793e0;
                }
            }
            // 专题
            & > .project {
                .mask {
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #000000, $alpha: 0.4);
                    position: absolute;
                    border-radius: 0.45em;
                    z-index: 1;
                }
                & .project_context {
                    width: 100%;
                    & .project_item {
                        position: relative;
                        margin-bottom: 2vh;
                        & .project_itemTitle {
                            font-size: 1rem;
                            font-weight: 600;
                            position: absolute;
                            top: 20%;
                            left: 50%;
                            color: white;
                            transform: translateX(-50%);
                            z-index: 2;
                        }
                        & .project_button {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            color: white;
                            transform: translateX(-50%);
                            z-index: 2;
                            & span {
                                display: inline-block;
                                cursor: pointer;
                                background-color: transparent;
                                border-radius: 100px;
                                text-align: center;
                                text-decoration: none;
                                border: 1px solid #fff;
                                padding: 7px 24px;
                                transition: all .6s;
                                &:hover {
                                    background-color: #fff;
                                    color: #5793e0;
                                }
                            }
                        }
                    }
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
    @keyframes goto {
        from {
            opacity: 0;
            // transform: translateX(-1000px);
        }
        to {
            opacity: 1;
            // transform: translateX(-0px);
        }
    }
</style>