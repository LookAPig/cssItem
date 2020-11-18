<template>
<div class="mainBody" >
  <ul class="shinchou-menu">
    <li><a href="#">ニュース</a></li>
    <li><a href="#">ストーリー</a></li>
    <li><a href="#">スターフ＆キャスト</a></li>
    <li><a href="#">キャラクター</a></li>
    <li><a href="#">放送·配信情報</a></li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
import * as Three from 'three'
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    let shinchouMenuLinks = document.querySelectorAll(".shinchou-menu li a");
    shinchouMenuLinks.forEach(link => {
        let letters = link.textContent.split("");
        link.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            if (i < 2) {
                span.className = "highlight";
            }
            span.style.transitionDelay = `${i / 10}s`;
            link.append(span);
        });
    });
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
  height: 100vh;
  background: #fafafa;
}

.shinchou-menu {
  color: #00ACF0;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    margin: 6px;

    a {
      position: relative;
      display: inline-flex;
      padding: 6px 2px 6px 2px;
      color: black;
      font-size: 1.6em;
      font-weight: 700;
      line-height: 1; // ensure span is a square
      text-decoration: none;
      overflow: hidden;

      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
        background: black;
      }

      &:hover {
        span {
          color: white !important;
          text-shadow: 0 0 10px #00ACF0;
        }
      }

      span {
        position: relative;
        margin: 0 5px 0 4px;
        transition: 0.3s;

        &.highlight::before {
          position: absolute;
          content: '';
          top: -3px;
          left: -3px;
          bottom: -3px;
          right: -3px;
          z-index: -1;
          background: #00ACF0;
        }

        &:not(.highlight) {
          color: #00ACF0;
        }
      }
    }
  }
}
</style>
