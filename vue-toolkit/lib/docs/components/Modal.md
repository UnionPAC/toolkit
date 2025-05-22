# 🪟 Modal

`Modal` is a headless, logic-only Vue 3 component from `@geoffjamieson/vue-toolkit` that handles open/close logic, `Escape` key handling, and backdrop clicks. It uses Vue’s `<teleport>` to render content into `<body>`, while giving you full control over structure and styling.

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

| Event   | Description                                        |
|---------|----------------------------------------------------|
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
import { Modal } from '@geoffjamieson/vue-toolkit'

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
---

## 🎨 Required Styles

To enable built-in transitions and utility styles, add this to your main entry file:

```
// main.js or main.ts
import '@geoffjamieson/vue-toolkit/dist/vue-toolkit.css'
```

---

## 🧠 Notes

- The modal's outer wrapper is rendered by the component — style it using `wrapperClass`

- The wrapper listens for `@click.self` to detect backdrop clicks

- The component uses `<teleport to="body">` to avoid layout or z-index conflicts

- This component does not include transitions by default — feel free to apply your own using `<transition>`. You can also use the utility classes from `vue-toolkit.css` for styling.

- No scroll locking, focus trap, or baked-in styles are included — you’re in full control

---

## 🔮 Future Enhancements (Ideas)

- `v-model:open` support for two-way binding

- Focus trap + return focus on close

- Scroll locking while modal is open

- ARIA roles and accessibility helpers

- Built-in transition support

---

## 🛠️ Maintainer Tips

- Keep the modal logic-driven and unstyled

- Leave styling, positioning, and accessibility to the user

- wrapperClass is the main way to control modal layout and behavior

- No transitions are included by design — use your own as needed

← [Back to Documentation Index](../index.md)
