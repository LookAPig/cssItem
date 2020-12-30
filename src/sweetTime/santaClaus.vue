<template>
<div class="mainBody">
  <div class="window">
    <div class="santa">
      <!-- 头部分 -->
      <div class="head">
        <!-- 脸 -->
        <div class="face">
          <!-- 帽子 -->
          <div class="red-hat">
            <!-- 帽沿 -->
            <div class="white-part"></div>
            <!-- 帽子红色部分 -->
            <div class="red-part"></div>
            <!-- 帽子上垂下的球 -->
            <div class="hat-ball"></div>
          </div>
          <!-- 眼睛 -->
          <div class="eyes1"></div>
          <div class="eyes2"></div>
          <!-- 胡子 -->
          <div class="beard">
            <!-- 鼻子 -->
            <div class="nouse"></div>
            <!-- 嘴巴 -->
            <div class="mouth"></div>
          </div>
          <!-- 耳朵 -->
          <div class="ears1"></div>
          <div class="ears2"></div>
        </div>
      </div>
      <!-- 身体部分，包含扣子 -->
      <div class="body"></div>
    </div>
  </div>
  <div class="content">Merry Christmas</div>
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
    // let head = document.querySelector('.head')
    // let body = document.querySelector('.body')
    // body.classList.add('moveBody')
    // head.addEventListener('animationend', function () {
    //   body.classList.remove('moveBody')
    //   setTimeout(function(){
    //     body.classList.add('moveBody');
    //   },2000)
    // })
  },
  components: {
  },
  created () {}
}
</script>
<style lang="scss" scoped>
    .mainBody {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: #da4d4d;
    }
    .window {
      width: 340px;
      height: 340px;
      background: #badbea;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      margin-top: -60px;
      transform: translate(-50%, -50%);
      border: 10px solid #f8e7dc;
      overflow: hidden;

      .santa {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        & .body {
          width: 190px;
          height: 210px;
          background: #da4d4d;
          position: relative;
          border-radius: 50%;
          top: 0;
          transform: translateY(50%);
          z-index: -1;
        }

        & .body:before {
          content: " ";
          width: 7px;
          height: 7px;
          background: #f7be10;
          border-radius: 50%;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0px -18px 0px #f7be10, 0px 18px 0px #f7be10;
        }
      }
      .head {
        transition: all 0.8s linear;
      }
      .body {
        // animation: shake 0.6s ease 2s alternate forwards infinite;
      }
      .head {
        animation: animation1 0.8s linear 0s infinite alternate forwards;
      }
      // .head {
      //   animation: animation2 0.8s linear 0s alternate forwards;
      // }
      .face {
        position: relative;
        margin: -120px auto;
        width: 120px;
        height: 130px;
        background: #edcab0;
        background: radial-gradient(#edcab0, #e9a982);
        border-radius: 50%;
        border: 3px solid #f8e7dc;
      }

      .red-hat{
        position: relative;
        width: 120px;
      }
      .red-hat .white-part {
        position: absolute;
        left: 50%;
        top: -4px;
        transform: translateX(-50%);
        width: 90%;
        height: 32px;
        background: #f8e7dc;
        border-radius: 50px;
        z-index: 4;
        box-shadow: 0px 6px 0px -4px rgba(0, 0, 0, 0.1);
      }

      .red-hat .red-part {
        width: 120px;
        height: 120px;
        background: #da4d4d;
        position: absolute;
        top: -50px;
        left: 15px;
        border-radius: 50%;
        z-index: -1;
      }

      .red-hat .red-part:before {
        content: " ";
        width: 95px;
        height: 95px;
        position: absolute;
        left: 0;
        top: 12px;
        border-radius: 50%;
        box-shadow: inset -8px -1px 0px -5px rgba(0, 0, 0, 0.05);
      }

      .red-hat .red-part:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 60px;
        background: #da4d4d;
        width: 20px;
        height: 50px;
      }

      .red-hat .hat-ball {
        width: 38px;
        height: 38px;
        background: #f8e7dc;
        border-radius: 50%;
        z-index: 5;
        position: absolute;
        right: -20px;
        top: 40px;
        box-shadow: 0px 6px 0px -4px rgba(0, 0, 0, 0.1);
      }

      .face .eyes1 {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 45px;
        left: 33%;
        transform: translateX(-50%);
        z-index: 200;
        border-top: 3px #a8744f solid;
        border-radius: 50%;
      }
      .face .eyes2 {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 45px;
        left: 67%;
        transform: translateX(-50%);
        z-index: 200;
        border-top: 3px #a8744f solid;
        border-radius: 50%;
      }

      .face .beard {
        width: 55px;
        height: 55px;
        background: #f8e7dc;
        border-radius: 50%;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
      }

      .face .beard::before,
      .face .beard::after {
        content: " ";
        width: 80px;
        height: 80px;
        background: #f8e7dc;
        border-radius: 50%;
        position: absolute;
        bottom: 15px;
      }

      .face .beard:before {
        left: -40px;
      }

      .face .beard:after {
        right: -40px;
      }

      .face .beard .nouse {
        width: 25px;
        height: 20px;
        border-radius: 50%;
        background: #edcab0;
        position: absolute;
        z-index: 3;
        box-shadow: inset -3px -3px 0px #e9a982;
        left: 50%;
        transform: translateX(-50%);
        top: -42px;
      }

      .face .beard .mouth {
        background: #a8744f;
        z-index: 3;
        position: absolute;
        width: 15px;
        height: 5px;
        border-bottom-right-radius: 80px 50px;
        border-bottom-left-radius: 80px 50px;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        animation: mouth 0.8s ease-out 0s infinite alternate forwards;
      }

      .ears1 {
        width: 30px;
        height: 35px;
        background: radial-gradient(#edcab0, #e9a982);
        border-radius: 50%;
        position: absolute;
        top: 60px;
        left: -16px;
        z-index: -1;
      }
      .ears2 {
        width: 30px;
        height: 35px;
        background: radial-gradient(#edcab0, #e9a982);
        border-radius: 50%;
        position: absolute;
        top: 60px;
        left: 104px;
        z-index: -1;
      }
    }
    .content {
      color: #ffffff;
      font-size: 6vh;
      margin-top: 32vh;
    }
    
    @keyframes animation1 {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(10px);
      }
    }
    @keyframes animation2 {
      // from {
      //   transform: translateY(10px);
      // }
      to {
        transform: translateY(0px);
      }
    }
    @keyframes mouth {
      to {
        width: 26px;
        height: 8px;
      }
    }
    @keyframes shake {
      0% {
        top: 0px;
      }
      25% {
        top: 2px;
      }
      50% {
        top: 0px;
      }
      75% {
        top: -2px;
      }
      100% {
        top: 0px;
      }
    }
</style>