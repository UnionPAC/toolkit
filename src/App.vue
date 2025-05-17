<template>
  <main>
    <RotatingWords
      static-text-before="I'm a"
      :words="['Wizard', 'Climber', 'Designer']"
      static-text-after="and I love Vue."
      animation="slide-up"
    />
  </main>
</template>

<script setup>
import { RotatingWords } from '../lib';
</script>

<style scoped>
</style>
