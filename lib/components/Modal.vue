<template>
  <teleport to="body">
    <div
      v-if="props.open"
      :class="props.wrapperClass"
      @click.self="props.closeOnBackdrop && emitClose()"
    >
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  open: boolean
  closeOnEsc?: boolean
  closeOnBackdrop?: boolean
  wrapperClass?: string
}>(), {
  closeOnEsc: true,
  closeOnBackdrop: true,
  wrapperClass: ''
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const emitClose = () => emit('close')

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnEsc) {
    emitClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>
