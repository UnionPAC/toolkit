<template>
  <main class="m-2">
    <p class="text-2xl font-bold mb-4">toolkit</p>
    <div>
      <RotatingWords
        static-text-before="I'm a"
        :words="['Wizard', 'Climber', 'Designer']"
        static-text-after="and I love Vue."
      />
    </div>
    <div>
      <button @click="isOpen = true">Open Modal</button>
      <Modal
        :open="isOpen"
        @close="isOpen = false"
        wrapper-class="fixed inset-0 bg-black/50 flex items-center justify-center"
      >
        <div class="bg-white p-6 rounded shadow">Modal content</div>
      </Modal>
    </div>
  </main>
</template>

<script setup>
import { RotatingWords, Modal } from '../lib'
import { ref } from 'vue';

const isOpen = ref(false)

</script>

<style scoped>
</style>
