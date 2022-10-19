<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Pikachu from './components/PikachuIcon.vue'
import InlineLink from './components/InlineLink.vue'
</script>

<template>
  <header>
    <div class="">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <main class="font-sans text-xl flex content-center justify-center h-[90vh]">
    <div class="m-auto max-w-[60%] max-h-[80%]">
      <Pikachu class="mx-auto mb-[-50px] w-[150px] z-[-10]" />
      <div class="p-5">
        <h1 class="font-500">Hello.<span class="i-uil:bolt ml-2px" /></h1>
        <h3 class="font-300">My name is Andy Feng.</h3>
        <p>
          I am a Machine Learning advocate, and mainly focus on
          <InlineLink
            name="learning theory"
            href="https://en.wikipedia.org/wiki/Statistical_learning_theory"
          />
          and
          <InlineLink
            name="interpretable ML"
            href="https://christophm.github.io/interpretable-ml-book/"
          />
          recently. Most of my work is publicly avaliable on
          <InlineLink name="GitHub" href="https://github.com/JiantingFeng" />,
          feel free to contact me if you have any issue.
        </p>
        <p></p>
      </div>
    </div>
  </main>
  <!-- <RouterView /> -->
</template>

<style>
* {
  background: #ffd864;
}
p {
  line-height: 1.5;
}
</style>
