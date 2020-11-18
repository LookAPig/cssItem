<template>
  <div class="mainBody">
    <div class="sunny circleBorder">
        <span class="sun"></span>
    </div>
    <div class="snowy circleBorder">
        <div class="snowman"></div>
        <ul>
            <li v-for="o in 13" :key="o"></li>
        </ul>
    </div>
    <div class="stormy circleBorder">
        <span class="cloud"></span>
        <ul>
            <li v-for="p in 5" :key="p"></li>
        </ul>
    </div>
    <div class="cloudy circleBorder">
        <span class="cloud"></span>
        <span class="cloud"></span>
    </div>
    <div class="superMoon circleBorder">
        <span class="moon"></span>
        <span class="meteor"></span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'mainBody',
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
    .mainBody {
        height: 100vh;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow: hidden;
        filter: drop-shadow(0 0 10px #ffffff);
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: calc(1em);
        color: #e6e8db;
    }
    .circleBorder {
        display: block;
        position: relative;
        font-size: calc(10vw);
        width: 12vw;
        height: 12vw;
        // margin: .3em;
        border-radius: 100%;
    }
    .sunny {
        box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
        background: linear-gradient(to top right, #fc5830 0%, #f98c24 65%);

        &>.sun {
            position: absolute;
            top: 20%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 45%;
            height: 45%;
            border-radius: 100%;
            background: #ffeb3b;
            box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
            transform-origin: .1em .1em;

            &::after {
                content: '';
                position: absolute;
                top: .1em;
                left: 0;
                will-change: transform;
                transform: translate(-50%, -50%);
                width: .16em;
                height: .16em;
                border-radius: 100%;
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 0 0.1em 0 rgba(255, 255, 255, 0.3) inset, -0.1em -0.1em 0 0.2em rgba(255, 255, 255, 0.1);
                animation: flare 12000ms infinite alternate linear;
            }
        }

        @keyframes flare {
            to {
                transform: translate(-0.3em, 0.3em);
                opacity: .4;
                font-size: .2em;
            }
        }
    }
    .snowy {
        $total: 13;
        box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
        background: linear-gradient(to bottom left, #758595 0%, #e0e2e5 90%);

        &>ul {
            position: absolute;
            list-style: none;
            top: 0%;
            left: 10%;
            right: 0%;
            height: 100%;
            margin: 0;
            padding: 0;

            & li::before,
            & li::after {
                content: '';
                position: absolute;
                list-style: none;
                width: .2vw;
                height: .2vw;
                border-radius: 100%;
                background-color: currentColor;
                will-change: transform, opacity;
                animation: snow 3700ms infinite ease-out;
                opacity: 0;
            }
            & li:nth-child(2n+1)::before,& li:nth-child(13n+11)::after{
                top: -7%;
                left: 40%;
            }
            & li:nth-child(3n+2)::before,& li:nth-child(11n+7)::after{
                top: 5%;
                left: 90%;
                animation-delay: 1000ms;
            }
            & li:nth-child(5n+3)::before,& li:nth-child(7n+5)::after{
                top: -10%;
                left: 80%;
                animation-delay: 2000ms;
            }
            & li:nth-child(7n+5)::before,& li:nth-child(5n+3)::after{
                top: 10%;
                left: 10%;
                animation-delay: 1300ms;
            }
            & li:nth-child(11n+7)::before,& li:nth-child(3n+2)::after{
                top: 20%;
                left: 70%;
                animation-delay: 1500ms;
            }
            & li:nth-child(13n+11)::before,& li:nth-child(2n+1)::after{
                top: 35%;
                left: 20%;
                animation-delay: 500ms;
            }
        }
        .snowman {
            position: absolute;
            bottom: 30%;
            left: 40%;
            width: 2vw;
            height: 2vw;
            opacity: .9;
            background: currentColor;
            border-radius: 100%;
        }
        .snowman::after {
            content: '';
            position: absolute;
            top: 70%;
            left: 30%;
            transform: translate(-50%, 0%);
            width: 4vw;
            height: 4vw;
            border-radius: inherit;
            background-color: currentColor;
        }
        .snowman::before {
            content: '';
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-55%, -50%);
            width: 6vw;
            height: 4vw;
            border-radius: 60%;
            border: .02em solid transparent;
            border-bottom-color: #758595;
            will-change: border-radius;
            animation: snowman 9000ms infinite ease-in;
        }
        @keyframes snow {
            50% {
                opacity: 1;
            }
            100% {
                transform: translate(-0.1em, 15vmin);
            }
        }
        @keyframes snowman {
            50% {
                border-radius: 60% 60% 30% 50%;
            }
        }
    }
    .stormy {
        box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #34c6d8;
        background: linear-gradient(to top right, #4b9cc2 0%, #9adbd9 100%);

        & .cloud {
            position: absolute;
            top: 1.2vw;
            width: 7vw;
            height: 2vw;
            border-radius: .1em;
            background-color: #c9e8de;
            font-size: 1.3em;
            left: 50%;
            box-shadow: 0 0 .1em .02em #f0f2f0 inset,0 0 .3em -0.03em #c9e8de;
            will-change: background-color, transform, opacity;
            animation: cloudflash 2300ms infinite linear, move 3700ms infinite linear;

            &::before,&::after {
                content: '';
                position: inherit;
                border-radius: 100%;
                background-color: inherit;
                box-shadow: inherit;
                bottom: 30%;
            }
            &::before {
                left: 1vw;
                width: 3.6vw;
                height: 3.6vw; 
            }
            &::after {
                left: 3vw;
                width: 2.8vw;
                height: 2.8vw;
            }
        }
        & ul {
            position: absolute;
            list-style: none;
            top: 0%;
            left: 70%;
            right: 0%;
            height: 100%;
            margin: 0;
            padding: 0;

            & li,& li::before,& li::after {
                position: absolute;
                width: .07vw;
                height: .3vw;
                border-radius: 10%;
                background-color: #eee;
                opacity: 0;
                will-change: transform, opacity;
                animation: rain 1000ms infinite linear;
                transform: rotate(25deg);
            }
            & li::before,& li::after {content: '';}
            & li:nth-child(5n+3)::before,
            & li:nth-child(11n+7)::after,
            & li:nth-child(2n+1) {
                top: 10%;
                left: 68%;
                animation-delay: 500ms;
            }
            & li:nth-child(3n+2)::after,
            & li:nth-child(7n+5)::after,
            & li:nth-child(3n+2) {
                top: 5%;
                left: 45%;
                animation-delay: 1250ms;
            }
            & li:nth-child(2n+1)::before,
            & li:nth-child(5n+3)::after,
            & li:nth-child(7n+5) {
                top: 4%;
                left: 82%;
                animation-delay: 750ms;
            }
            & li:nth-child(11n+7)::before,
            & li:nth-child(3n+2)::after,
            & li:nth-child(7n+5) {
                top: 15%;
                left: 15%;
                animation-delay: 2000ms;
            }
            & li:nth-child(7n+5)::before,
            & li:nth-child(2n+1)::after,
            & li:nth-child(11n+7) {
                top: 10%;
                left: 33%;
                animation-delay: 2500ms;
            }
        }

        @keyframes rain {
            10% {
                opacity: .4;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translate(-0.1em, 0.5em);
            }
        }
        @keyframes cloudflash {
            49% {
                background-color: #c9e8de;
            }
            51% {
                background-color: #f0f2f0;
            }
            53% {
                background-color: #c9e8de;
            }
            57% {
                background-color: #f0f2f0;
            }
            85% {
                background-color: #c9e8de;
            }
        }
        @keyframes move {
            50% {
                transform: translateX(-0.05em);
            }
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 100%;
            opacity: .4;
            will-change: background-color;
            animation: lighting 2300ms infinite linear 80ms;
            @keyframes lighting {
                49% {
                    background-color: rgba(255, 255, 255, 0);
                }
                51% {
                    background-color: currentColor; // 获取最近父元素中设置的color 、backgroundColor等颜色属性中的颜色值
                }
                53% {
                    background-color: rgba(255, 255, 255, 0);
                }
                57% {
                    background-color: currentColor;
                }
                85% {
                    background-color: rgba(255, 255, 255, 0);
                }
            }
        }
    }
    .cloudy {
        box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
        background: linear-gradient(to top right, #1b9ce2 0%, #e0e2e5 90%);

        & .cloud:nth-child(1) {
            position: absolute;
            top: 1.2vw;
            width: 7vw;
            height: 2vw;
            border-radius: .1em;
            background-color: #c9e8de;
            font-size: 1.3em;
            left: 50%;
            box-shadow: 0 0 .1em .02em #f0f2f0 inset,0 0 .3em -0.03em #c9e8de;
            will-change: background-color, transform, opacity;
            animation: move 3700ms infinite linear;

            &::before,&::after {
                content: '';
                position: inherit;
                border-radius: 100%;
                background-color: inherit;
                box-shadow: inherit;
                bottom: 30%;
            }
            &::before {
                left: 1vw;
                width: 3.6vw;
                height: 3.6vw; 
            }
            &::after {
                left: 3vw;
                width: 2.8vw;
                height: 2.8vw;
            }
        }
        & .cloud:nth-child(2) {
            position: absolute;
            top: 2.6vw;
            width: 5.4vw;
            height: 1.6vw;
            border-radius: .1em;
            background-color: #c9e8de;
            font-size: 1.3em;
            left: 20%;
            box-shadow: 0 0 .1em .02em #f0f2f0 inset,0 0 .3em -0.03em #c9e8de;
            will-change: background-color, transform, opacity;
            animation: move 5700ms infinite ease-in-out;

            &::before,&::after {
                content: '';
                position: inherit;
                border-radius: inherit;
                background-color: inherit;
                box-shadow: inherit;
                bottom: 30%;
            }
            &::before {
                left: .8vw;
                width: 2.6vw;
                height: 2.6vw;
            }
            &::after {
                left: 2.6vw;
                width: 2vw;
                height: 2vw;
            }
        }
    }
    .superMoon {
        -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #5133a5;
        box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #5133a5;
        background: -webkit-gradient(linear, from(#4054b2), to(#aa4cba));
        background: -webkit-linear-gradient(bottom right, #4054b2 0%, #aa4cba 65%);
        background: linear-gradient(to bottom right, #4054b2 0%, #aa4cba 65%);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(1px 1px at 50% 20%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 30% 65%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 15% 5%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 37% 35%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 65% 47%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 42% 29%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 73% 56%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 24% 19%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 31% 47%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 18% 39%, #fff, rgba(0, 0, 0, 0));
            background-repeat: repeat;
            will-change: transform;
            animation: revolve 120000ms linear infinite;
        }
        & .moon {
            position: absolute;
            top: 20%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 45%;
            height: 45%;
            border-radius: 100%;
            background: radial-gradient(circle at bottom left, currentColor, #fef07e);
            box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #aa4cba;

            &::before,&::after {
                content: '';
                position: absolute;
                border-radius: 100%;
                background-color: #4054b2;
                box-shadow: 0.01em 0.01em 0.1em 0 #4054b2;
            }
            &::before {
                top: 15%;
                left: 55%;
                width: 20%;
                height: 20%;
                opacity: .3;
            }
            &::after {
                top: 50%;
                left: 30%;
                width: 16%;
                height: 16%;
                opacity: .2;
            }
        }
        & .meteor {
            position: absolute;
            background-color: #fff;
            opacity: 0;
            top: 20%;
            left: 55%;
            width: 1px;
            height: 15px;
            transform: rotate(45deg);
            will-change: transform, opacity;
            animation: meteor 6250ms infinite ease-in;
        }
        @keyframes revolve {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        @keyframes meteor {
            5% {
                opacity: 1;
            }
            8% {
                transform: translate(-0.6em, 0.6em) rotate(45deg);
                opacity: 0;
            }
        }
    }
</style>
