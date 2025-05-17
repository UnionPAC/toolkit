<template>
  <main>
    <RotatingWords
      staticTextBefore="I'm a"
      :words="['Wizard', 'Climber', 'Designer']"
      staticTextAfter="and I love Vue."
      animation="slide-left"
      interval=2000
      wrapperClass="gap-1"
      wordClass="text-blue-500 font-bold"
    />
  </main>
</template>

<script setup>
import { RotatingWords } from '../lib';
</script>

<style scoped>
</style>
