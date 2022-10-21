<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const Props = defineProps<{
  name: string
  link: string
  disabled: boolean
}>()
</script>
<template>
  <li>
    <router-link
      class="c-inherit case-upper decoration-none"
      :to="Props.link"
      focusable="true"
    >
      <p
        :class="Props.disabled ? 'font-500' : ''"
        class="hover:scale-110 easy-in-out duration-200"
      >
        {{ Props.name }}
      </p>
    </router-link>
  </li>
</template>
