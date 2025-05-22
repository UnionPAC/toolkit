# 🔤 RotatingWords

`RotatingWords` is a flexible Vue 3 component from `@geoffjamieson/vue-toolkit` that displays a rotating word or phrase with animated transitions.

---

## ✨ Features

- 🔁 Rotates through a list of words
- 🎞️ Supports `fade`, `slide-up`, `slide-down`, `slide-left`, and `slide-right` animations
- 🧩 Works with props or named slots
- 🎨 Fully customizable via class and style props
- ✅ Tailwind-friendly and framework-agnostic
- 📝 Fully typed with TypeScript

---

## ⚙️ Props

| Prop               | Type               | Default      | Description |
|--------------------|--------------------|--------------|-------------|
| `words`            | `string[]`         | **Required** | List of rotating words or phrases |
| `staticTextBefore` | `string`           | `''`         | Static text before the animated word (ignored if `#before` slot is used) |
| `staticTextAfter`  | `string`           | `''`         | Static text after the animated word (ignored if `#after` slot is used) |
| `interval`         | `number`           | `2000`       | Time (in ms) between word changes |
| `animation`        | `'fade' \| 'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right'` | `'slide-up'` | Animation type |
| `wrapperClass`     | `string`           | `''`         | Class applied to the outer wrapper |
| `wrapperStyle`     | `string \| Record<string, string>` | `''` | Style applied to the wrapper |
| `beforeClass`      | `string`           | `''`         | Class for the before-text span |
| `afterClass`       | `string`           | `''`         | Class for the after-text span |
| `wordClass`        | `string`           | `''`         | Class applied to the animated word |
| `wordStyle`        | `string \| Record<string, string>` | `''` | Style applied to the animated word |

---

## 🧩 Named Slots

| Slot   | Description                        |
|--------|------------------------------------|
| `before` | Replaces `staticTextBefore` prop |
| `after`  | Replaces `staticTextAfter` prop  |

If a named slot (`#before` or `#after`) is provided, the corresponding `staticTextBefore` or `staticTextAfter` prop will not be shown.

---

## 🚀 Examples

```vue
<script setup>
import { RotatingWords } from '@geoffjamieson/vue-toolkit'
</script>

<template>
  <!-- ✅ Props-based usage (simple) -->
  <RotatingWords
    staticTextBefore="I'm a"
    :words="['Wizard', 'Designer', 'Creator']"
    staticTextAfter="and I love Vue."
    animation="slide-left"
    :interval="2500"
    word-class="text-blue-600 font-bold"
  />

  <!-- 🧩 Slot-based usage (custom layout) -->
  <RotatingWords
    :words="['Vue Dev', 'Tinkerer', 'Cat Dad']"
    animation="fade"
    :interval="3000"
    word-class="text-emerald-500 font-semibold"
  >
    <template #before>
      <span class="text-gray-600">Hello, I'm a</span>
    </template>
    <template #after>
      <span class="italic text-gray-400">– nice to meet you!</span>
    </template>
  </RotatingWords>
</template>
```

💡 Use slots if you want to inject custom HTML, apply more complex layouts, or style different parts of the sentence independently.

---

## 🎨 Required Styles

To enable built-in transitions and utility styles, add this to your main entry file:

```
// main.js or main.ts
import '@geoffjamieson/vue-toolkit/dist/vue-toolkit.css'
```

---

## 🧠 Notes

- Transitions use Vue's `<transition>` component with dynamic `:name` bound to the `animation` prop

- The animated word uses a dynamic `:key="currentWord"` to ensure transition triggers on change

- The animated word is wrapped in `inline-block` to ensure transition effects apply correctly

- Transition duration is fixed at `0.3s` — customization can be added later if needed

- All styles are scoped to prevent conflicts with other components

- Tailwind and other utility classes are supported via props

- Fully typed with TypeScript for great DX

---

## 🔮 Future Enhancements (Ideas)

- Typewriter-style animation
- `pauseOnHover` support
- `loop: false` to stop after one full cycle
- `startIndex` prop to control the initial word
- Custom transition duration (e.g. via a duration prop instead of hardcoded 0.3s)

---

## 🛠️ Maintainer Tips

- Props offer quick usage; slots enable full layout control

- Use `:name="animation"` in the `<transition>` to support multiple animation styles

- Avoid making `staticTextBefore` / `staticTextAfter` required — they can be replaced with slots

- Leave styling and animation flexibility to the user

- `wrapperClass` and `wordClass` are the main style hooks

← [Back to Documentation Index](../index.md)
