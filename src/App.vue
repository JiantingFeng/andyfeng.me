<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Pikachu from './components/PikachuIcon.vue'
import InlineLink from './components/InlineLink.vue'
import '@/assets/google-fonts.css'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <header>
    <div class=""></div>
  </header>

  <main class="font-sans text-xl flex content-center justify-center h-[95vh]">
    <div class="mx-auto lg:mt-50px lg:max-w-[60%]">
      <Pikachu class="mx-auto mb-[-50px] w-[150px] z-[-10]" />
      <div class="px-10">
        <h1 class="font-600 text-6xl">
          Hello.<span class="i-uil:bolt ml-2px" />
        </h1>
        <h3 class="font-400 text-4xl">My name is Andy Feng.</h3>
        <p>
          I am a Machine Learning advocate, mainly focus on
          <InlineLink
            name="interpretable ML"
            href="https://christophm.github.io/interpretable-ml-book/"
          />
          recently. Most of my work is publicly avaliable on
          <InlineLink name="GitHub" href="https://github.com/JiantingFeng" />.
        </p>
        <p>
          You can follow me on
          <InlineLink
            name="twitter"
            href="https://twitter.com/jianting_feng"
          />, where I frequently share my ideas about ML. If you happen to speak
          Chinese, my Chinese name is
          <span class="font-chinese font-100 text-2xl mx-1">冯建霆</span> (féng
          jiàn tíng). Sending me
          <InlineLink name="email" href="mailto:gianting01@gmail.com" /> is the
          simplest way to contact me.
        </p>
        <p>
          Outside of machine learning and open sourcing, I enjoy Japanese anime
          (like Pokémon <span class="i-ic:baseline-catching-pokemon" />),
          formula 1 <span class="i-fluent-emoji-flat:racing-car text-2xl" /> and
          traveling <span class="i-noto:airplane-departure" />. I&apos;m also a
          part time barista<span class="i-openmoji:coffee-grinder" /> enchanted
          with different flavors of coffee.
        </p>
      </div>
      <div class="min-h-[30px]"></div>
    </div>
  </main>
  <MainFooter />
  <!-- <RouterView /> -->
</template>

<style>
* {
  background: #ffd864;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
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
    color: #fcfbf795;
  }
}
</style>
