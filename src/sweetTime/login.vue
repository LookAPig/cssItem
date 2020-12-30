<template>
  <div class="body" @mouseenter.stop="enter" @mousemove.stop.prevent="bodyMousemove">
    <div class="logo">
        <div class="logo-left">
            S&T
        </div>
        <div class="logo-right">
            >
        </div>
    </div>
    <div class="loginItem" @mouseenter="enter" @mousemove="mousemove" @mouseleave="leave">
      <div class="loginItem-img">
        <img class src="../picture/login.png" alt />
      </div>
      <div class="loginItem-login">
        <p class="loginItem-title">欢迎登录</p>
        <div class="loginItem-input" @click="inputClick($event, 0)" data-index=0>
          <span class="loginItem-input-title">用户名</span>
          <input class="input" type="text" placeholder="" />
        </div>
        <div class="loginItem-input" @click="inputClick($event, 1)" data-index=1>
          <span class="loginItem-input-title">密码</span>
          <input class="input" type="text" placeholder="" />
        </div>
        <div class="loginItem-input" @click="inputClick($event, 2)" data-index=2>
          <span class="loginItem-input-title">验证码</span>
          <input class="input" type="text" placeholder="" />
        </div>

        <button class="loginItem-button">登录</button>
        <span class="loginItem-reg">注册</span>
      </div>
    </div>
    <footer>
        <div class="icpContext">
            <span>粤ICP备20201031号</span>
        </div>
    </footer>
  </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      startx: "",
      starty: "",
      isMove: false,
    };
  },
  mounted() {
      // let mousex,mousey,changex,changey;
      // let mv = 200;
      // let body = document.querySelector(".body")
      // let main = document.querySelector(".loginItem")
      // let mainImg = document.querySelector(".loginItem-img")
      // console.log("body",body,main)
      // body.addEventListener("mousemove", function () {
      //     //相对图片中心为坐标轴，鼠标移动的位置
      //     console.log("event.clientX ",event.clientX )

      //     mousex = event.clientX - body.clientWidth / 2;
      //     mousey = event.clientY - body.clientHeight / 2;
          
      //     changex = mousey / mv;
      //     changey = mousex / mv;

      //     //根据鼠标移动的相对坐标进行背景图片翻转

      //     main.style.transform = 'perspective(400px) rotatex(' + changex + 'deg) rotateY(' + changey + 'deg)'
      //     mainImg.style.transform = 'matrix(1,0,0,1,' + mousex / -30 + ',' + mousey / -30 + ')'

      // })
   
  },
  methods: {
    bodyMousemove(e) {
      if(this.isMove) {
        return
      }
      let mousex,mousey,changex,changey;
      let mv = 200;
      let body = document.querySelector(".body")
      let main = document.querySelector(".loginItem")
      let mainImg = document.querySelector(".loginItem-img")
      //相对图片中心为坐标轴，鼠标移动的位置
      console.log("event.clientX ",event.clientX )

      mousex = e.clientX - body.clientWidth / 2;
      mousey = e.clientY - body.clientHeight / 2;
      
      changex = mousey / mv;
      changey = mousex / mv;

      //根据鼠标移动的相对坐标进行背景图片翻转

      main.style.transform = 'perspective(400px) rotatex(' + changex + 'deg) rotateY(' + changey + 'deg)'
      mainImg.style.transform = 'matrix(1,0,0,1,' + mousex / -30 + ',' + mousey / -30 + ')'
    },
    enter(e) {
      this.startx = e.clientX;
      this.starty = e.clientY;
      this.isMove = true
      let mainImg = document.querySelector(".loginItem-img")
      let main = document.querySelector(".loginItem")
      main.style.transform = 'perspective(400px) rotatex(' + 0 + 'deg) rotateY(' + 0 + 'deg)'
      mainImg.style.transform = 'matrix(1,0,0,1,' + 0 + ',' + 0 + ')'
      mainImg.style.left = `-25px`;
      mainImg.style.top = `25px`;
      mainImg.style.bottom = 0;
      mainImg.style.right = 0;
    },
    mousemove(e) {
      this.ScaleX = e.clientX;
      this.ScaleY = e.clientY;
      const banner = document.querySelectorAll(".loginItem-img img");
      // console.log(banner)
      const moveX = 20 + "px";
      const moveY = 20 + "px";

      // 模糊化
      if (this.ScaleX <= document.body.clientWidth / 2&&this.ScaleY <= document.body.clientWidth / 2) {
        banner[0].style.left = '-' + moveX;
        banner[0].style.top = '-' + moveY;

      } else if (
        this.ScaleX >= document.body.clientWidth / 2&&this.ScaleY <= document.body.clientWidth / 2
      ) {
        banner[0].style.left = moveX;
        banner[0].style.top = '-' + moveY;
      } else if (
        this.ScaleX <= document.body.clientWidth / 2&&this.ScaleY >= document.body.clientWidth / 2
      ) {
        banner[0].style.left = '-' + moveX;
        banner[0].style.top = moveY;
      } else if (
        this.ScaleX >= document.body.clientWidth / 2&&this.ScaleY >= document.body.clientWidth / 2
      ) {
        banner[0].style.left = moveX;
        banner[0].style.top = moveY;
      }
     
      
    },
    leave(e) {
      const banner = document.querySelectorAll(".loginItem-img img");
      banner[0].style.left = `-25px`;
      banner[0].style.top = `25px`;
      banner[0].style.bottom = 0;
      banner[0].style.right = 0;
      this.isMove = false
    },
    inputClick(e,index) {
      console.log(e)
      let inp = document.querySelectorAll(".loginItem-input .loginItem-input-title")
      inp[index].style.top = -10 + 'px'
    }
  }
};
</script>
<style lang="scss">
// $containerWidth: calc(100%*0.65 + 100px);
$fontColor: white;

.body {
  width: 100%;
  height: 100vh;
  padding: 4vh 10vw;
  color: $fontColor;
  -webkit-font-smoothing: subpixel-antialiased;
  font-family: "思源黑体";
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #f9957f, #d4b286, #5793e0, #6cc6cb);
  background-size: 400% 400%;
  transition: all 0.5s;
  animation: gradient 15s ease infinite;
  .logo {
      display: flex;
      justify-content: space-between;
      width: 1100px;
      margin-bottom: 80px;
      .logo-left{
          font-size: 46px;
          font-family: "汉仪菱心体简";
          font-weight: bold;
          color: #fff;
      }
      .logo-right{
          font-size: 46px;
          font-family: "汉仪菱心体简";
          font-weight: bold;
          color: #fff;
      }
  }
  .loginItem {
    width: 1100px;
    height: 550px;
    background-color: #fff;
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 0px 13px 1px rgba($color: #333, $alpha: 0.3);
    transition: all 0.2s;
    img {
      position: relative;
      left: -26px;
      top: 25px;
      z-index: 9;
      transition: all 0.6s;
    }
    .loginItem-login {
    flex: 1;
    padding: 28px 0;
    max-width: 400px;

    .loginItem-title {
      font-size: 32px;
      color: #84ace6;
    }
    .loginItem-input {
      margin: 20px 28px 16px;
      padding: 16px 0 0 0;
      border-bottom: 2px solid #000;
      position: relative;
      input {
        border: none;
        width: 100%;
        height: 60px;
      }
      .loginItem-input-title {
        display: inline-block;
        font-size: 32rpx;
        color: #84ace6;
        position: absolute;
        top: 30px;
        transition: all 0.5s;

      }
    }
    .loginItem-button {
      width: calc(100% - 48px);
      height: 52px;
      line-height: 48px;
      color: #84ace6;
      background-color: #ffffff;
      border: 2px solid #84ace6;
      border-radius: 32px;
      font-size: 26px;
      font-weight: 400;
    }
    .loginItem-reg {
      display: inline-block;
      font-size: 12px;
      color: #333333;
      font-weight: 400;
      float: right;
      padding-top: 22px;
      padding-right: 32px;
    }
  }
  }
  
  footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 80px;
  .icpContext {
      // width: ;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
  }
}
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
@media screen and (min-width: 900px) and (max-width: 1100px){
  body {
    .logo {
      width: 900px;
    }
    .loginItem {
      width: 900px;
    }
  }
}
</style>