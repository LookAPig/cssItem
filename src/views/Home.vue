<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-nav tabs fill>
      <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/404">404</router-link></b-nav-item>
      <b-nav-item><router-link to="/snow">Snow</router-link></b-nav-item>
      <b-nav-item><router-link to="/pic">Pic</router-link></b-nav-item>
      <b-nav-item><router-link to="/weather">Weather</router-link></b-nav-item>
    </b-nav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/404">404</router-link> |
      <router-link to="/snow">Snow</router-link> |
      <router-link to="/dna">DNALoding</router-link> |
      <router-link to="/show">Show</router-link> |
      <router-link to="/pic">Pic</router-link> |
      <router-link to="/message">Message</router-link> |
      <router-link to="/canvas">Canvas</router-link> |
      <router-link to="/weather">Weather</router-link>
    </div>
    <div id="container"></div>
    <br>
    <div id="picContainer">
      <img src="../picture/wallhaven-oxkjgm.jpg" class="gl-img" alt='' style="max-width: 100%;position: absolute;">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as Three from 'three'
export default {
  name: 'home',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init () {
      let container = document.getElementById('container')
 
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
      
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    }

  },
  mounted () {
    this.init()
    this.animate()
  },
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
  #container {
    height: 400px;
  }
  #picContainer {
    width: 50vw;
    position: relative;
  }
  canvas { 
    display: block; 
    position: fixed;
    z-index: -1;
    left: 0; 
    top: 0; 
  }
</style>
