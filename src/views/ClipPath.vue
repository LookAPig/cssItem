<template>
    <div class="mainBody">
        <div class="title_context">
            <h3 class="title">This is Clip-path</h3>
        </div>
        <section>
            123
        </section>
        <div class="context">
            <p v-for="i in 100" :key="i">{{i}}</p>
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
    let section = document.querySelector('section')
    window.addEventListener('scroll', () => {
        let value = window.scrollY
        section.style.clipPath = `circle(${value}px at center)`
    })
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
    .mainBody {
        margin: 0;
        padding: 0;
        font-family: '思源黑体', sans-serif;
        box-sizing: border-box;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        position: relative;
    }
    .title_context {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title {
        font-size: 3em;
        text-align: center;
    }
    section {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: url('../picture/preview.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        clip-path: circle(0px at center);
    }
    .context {
        position: relative;
        margin-top: 200vh;
        background: #fff;
    }

</style>