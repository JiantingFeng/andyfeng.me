<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavbarLink from './NavbarLink.vue'
const navItems = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'blog',
    link: '/blog',
  },
]
const route = useRoute()
</script>
<template>
  <nav class="flex justify-end pr-5">
    <ul class="flex flex-row list-none space-x-5">
      <NavbarLink
        v-for="{ name, link } in navItems"
        :name="name"
        :link="link"
        :key="name"
        :disabled="route.name === name"
      />
    </ul>
  </nav>
</template>
