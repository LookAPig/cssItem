<template>
  <div class="mainBody">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
        ball: {
            x: 0, // 当前x轴坐标
            y: 0, // 当前y轴坐标
            radius: 10, // 半径
            g: 0.1, // 重力加速度
            vx: 8, // x轴移动速度
            vy: 4, // y轴移动速度
            color: "tomato", // 颜色
        }
    }
  },
  methods: {
    renderBorder (ctx) {
        let width = ctx.canvas.width
        let height = ctx.canvas.height
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(width, 0)
        ctx.lineTo(width, height) // ...右下角
        ctx.lineTo(0, height) // ...左下角
        ctx.closePath() // 结束一个新的路径
        ctx.stroke()
    },
    renderBall (ctx, ball) {
        const x = ball.x + ball.radius // 圆弧中心（圆心）的 x 轴坐标。
        const y = ball.y + ball.radius // 圆弧中心（圆心）的 y 轴坐标。
        const radius = ball.radius // 半径
        const startAngle = 0 // 圆弧的起始点
        const endAngle = 2 * Math.PI // 圆弧的结束点
        ctx.beginPath() // 开始一个新的路径
        ctx.arc(x, y, radius, startAngle, endAngle)
        ctx.closePath() // 结束一个新的路径
        ctx.fillStyle = ball.color // 颜色
        ctx.fill() // 填充
    },
    uploadBall (ball) {
        ball.x += ball.vx
        ball.y += ball.vy
        ball.vy += ball.g
        return ball
    }
  },
  mounted () {
    const canvas = document.getElementById('canvas')
    canvas.width = 800
    canvas.height = 800
    const ctx = canvas.getContext('2d')
    setTimeout(() => {
        // 先将之前绘制的擦除
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        this.renderBorder(ctx)
        this.renderBall(ctx, this.ball)
        this.ball = this.uploadBall(this.ball)
        this.$forceUpdate()
    }, 20)
  },
  components: {}
}
</script>
<style scoped>
    .mainBody {
        display: flex;
        justify-content: center;
        align-items: center;
        color: tomato;
    }
</style>
