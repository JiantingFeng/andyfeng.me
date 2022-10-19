<script setup lang="ts">
const Props = defineProps<{
  name: string
  href: string
}>()
</script>
<template>
  <span class="cursor-pointer">
    <a :href="Props.href" target="_blank">
      {{ Props.name }}
    </a>
  </span>
</template>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  position: relative;
}

a::before {
  content: '';
  background-color: hsla(196, 61%, 58%, 0.35);
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 8px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
}

a:hover::before {
  bottom: 0;
  height: 100%;
}
</style>
