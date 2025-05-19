# 🪟 Modal

`Modal` is a headless, logic-only Vue 3 component that handles open/close logic, Escape key handling, and backdrop clicks. It uses Vue’s `<teleport>` to render its content into `<body>`, while giving you full control over structure and styles.

---

## ✨ Features

- 🧠 Logic-only: all layout and styles are user-defined
- 🧩 Renders slot content in a teleport-to-body wrapper
- 🎯 Emits `@close` on backdrop click or `Escape` key (if enabled)
- 🧰 Configurable behavior via props (`closeOnEsc`, `closeOnBackdrop`)
- 🎨 `wrapperClass` lets you style the backdrop and layout freely
- ✅ Fully typed with TypeScript

---

## ⚙️ Props

| Prop              | Type      | Default | Description                                                 |
|-------------------|-----------|---------|-------------------------------------------------------------|
| `open`            | `boolean` | —       | Controls whether the modal is visible (required)            |
| `closeOnEsc`      | `boolean` | `true`  | Emit `@close` when the `Escape` key is pressed              |
| `closeOnBackdrop` | `boolean` | `true`  | Emit `@close` when the backdrop is clicked (`@click.self`)  |
| `wrapperClass`    | `string`  | `''`    | Class applied to the modal wrapper (backdrop, layout, etc.) |

---

## 🎤 Events

| Event   | Description                                   |
|---------|-----------------------------------------------|
| `close` | Emitted when user clicks backdrop or presses Escape |

---

## 🧩 Slots

| Slot    | Description                                 |
|---------|---------------------------------------------|
| default | Your modal content — full control of layout |

---

## 🚀 Usage Example

```vue
<script setup>
import { ref } from 'vue'
import { Modal } from '@geoffjamieson/toolkit'

const isOpen = ref(false)
</script>

<template>
  <button @click="isOpen = true">Open Modal</button>

  <Modal
    :open="isOpen"
    @close="isOpen = false"
    wrapper-class="fixed inset-0 bg-black/50 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Custom Modal</h2>
      <p>You control all layout and styles.</p>
      <button class="mt-4 text-blue-600" @click="isOpen = false">Close</button>
    </div>
  </Modal>
</template>
```

## 🧠 Notes

- The modal's outer wrapper is rendered by the component — style it using wrapperClass

- The wrapper listens for @click.self to detect backdrop clicks

- The component uses <teleport to="body"> to avoid layout or z-index conflicts

- No transitions, scroll locking, focus trap, or styling are included — you’re in full control

---

## 🔮 Future Enhancements (Ideas)

- v-model:open support for two-way binding

- Focus trap + return focus on close

- Scroll locking while modal is open

- ARIA roles and accessibility helpers

- Built-in transition support

---

## 🛠️ Maintainer Tips

- Keep the modal behavior-driven and unstyled

- Let the user define backdrop color, padding, layout, etc.

- `wrapperClass` is the main way to control visual behavior

- Avoid baked-in styles to stay framework-agnostic