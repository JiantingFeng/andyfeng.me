<script setup lang="ts">
import Pikachu from '../components/Icons/PikachuIcon.vue'
import InlineLink from '../components/InlineLink.vue'
</script>

<template>
  <Pikachu class="mx-auto w-[150px] z-[-10]" />
  <div
    class="text-xl flex content-center justify-center mx-auto lg:mt-50px lg:max-w-[60%]"
  >
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
        <InlineLink name="twitter" href="https://twitter.com/jianting_feng" />,
        where I frequently share my ideas about ML. If you happen to speak
        Chinese, my Chinese name is
        <span class="font-chinese font-100 text-2xl mx-1">冯建霆</span> (féng
        jiàn tíng). Sending me
        <InlineLink name="email" href="mailto:gianting01@gmail.com" /> is the
        simplest way to contact me.
      </p>
      <p>
        Outside of machine learning and open sourcing, I enjoy Japanese anime
        (like Pokémon <span class="i-ic:baseline-catching-pokemon" />), formula
        1 <span class="i-fluent-emoji-flat:racing-car text-2xl" /> and traveling
        <span class="i-noto:airplane-departure" />. I&apos;m also a part time
        barista<span class="i-openmoji:coffee-grinder" /> enchanted with
        different flavors of coffee.
      </p>
    </div>
    <div class="min-h-[30px]"></div>
  </div>
</template>
