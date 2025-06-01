<template>
  <main class="m-2 flex flex-col gap-6">
    <h1 class="text-4xl font-bold">vue toolkit</h1>
    <div>
      <h2 className="text-xl font-bold mb-2">Rotating Words</h2>
      <div>
        <RotatingWords
          static-text-before="I'm a"
          :words="['Wizard', 'Climber', 'Designer']"
          static-text-after="and I love Vue."
        />
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold mb-2">Modal</h2>
      <button class=" bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded cursor-pointer active:scale-95" @click="isOpen = true">Open Modal</button>
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
