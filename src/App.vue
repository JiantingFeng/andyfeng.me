<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import '@/assets/google-fonts.css'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <!-- <Footer /> -->
  <!-- <RouterView /> -->
</template>

<style>
* {
  background: #ffd864;
  font-family: sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
p {
  line-height: 1.5;
  font-weight: 300;
}
.font-chinese {
  font-family: 'Noto Sans SC', cursive;
}
@media (prefers-color-scheme: dark) {
  * {
    background: #191919;
  }
  h1,
  h2,
  h3,
  p {
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
