<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
  <footer class="px-5">
    <div class="text-center text-zinc-800/30 font-sans">
      &copy; 2021-{{ year }}, Andy Feng all rights reversed.
    </div>
    <div class="text-center text-zinc-800/30 font-sans mt-2">
      <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank"
        >CC BY-ND 4.0</a
      >.
    </div>
  </footer>
</template>
<style scoped>
a {
  color: inherit;
}
footer {
  margin-top: 2em;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
}
</style>
