<template>
  <main class="m-2">
    <p class="text-2xl font-bold mb-4">toolkit</p>
    <RotatingWords
      static-text-before="I'm a"
      :words="['Wizard', 'Climber', 'Designer']"
      static-text-after="and I love Vue."
    />
  </main>
</template>

<script setup>
import { RotatingWords } from '../lib';
</script>

<style scoped>
</style>
