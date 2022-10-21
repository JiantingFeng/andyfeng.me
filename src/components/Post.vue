<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()
</script>
<template>
  <div></div>
</template>
<style scoped></style>
