# 🔤 RotatingWords

`RotatingWords` is a flexible Vue 3 component that displays a rotating word or phrase with animated transitions. It's perfect for adding dynamic flair to headlines, taglines, or intros.

---

## ✨ Features

- 🔁 Rotates through a list of words
- 🎞️ Supports `fade`, `slide-up`, `slide-down`, `slide-left`, and `slide-right` animations
- 🧩 Works with props or named slots
- 🎨 Fully customizable via class and style props
- ✅ Tailwind-friendly and framework-agnostic

---

## ⚙️ Props

| Prop               | Type               | Default      | Description |
|--------------------|--------------------|--------------|-------------|
| `words`            | `string[]`         | **Required** | List of rotating words or phrases |
| `staticTextBefore` | `string`           | `''`         | Static text before the animated word |
| `staticTextAfter`  | `string`           | `''`         | Static text after the animated word |
| `interval`         | `number`           | `2000`       | Time (in ms) between word changes |
| `animation`        | `string`           | `'slide-up'` | Animation type: `fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right` |
| `wrapperClass`     | `string`           | `''`         | Class applied to the outer wrapper |
| `wrapperStyle`     | `string \| object`| `''`         | Style applied to the wrapper |
| `beforeClass`      | `string`           | `''`         | Class for the before-text span |
| `afterClass`       | `string`           | `''`         | Class for the after-text span |
| `wordClass`        | `string`           | `''`         | Class applied to the animated word |
| `wordStyle`        | `string \| object`| `''`         | Style applied to the animated word |

---

## 🧩 Named Slots

| Slot   | Description                        |
|--------|------------------------------------|
| `before` | Replaces `staticTextBefore` prop |
| `after`  | Replaces `staticTextAfter` prop  |

---

## 🚀 Examples

```vue
<!-- ✅ Props-based usage (simple) -->
<RotatingWords
  staticTextBefore="I’m a"
  :words="['Wizard', 'Designer', 'Creator']"
  staticTextAfter="and I love Vue."
  animation="slide-left"
  interval="2500"
  wrapperClass="gap-1"
  wordClass="text-blue-600 font-bold"
/>

<!-- 🧩 Slot-based usage (custom layout) -->
<RotatingWords
  :words="['Vue Dev', 'Tinkerer', 'Cat Dad']"
  animation="fade"
  interval="3000"
  wrapperClass="gap-1"
  wordClass="text-emerald-500 font-semibold"
>
  <template #before>
    <span class="text-gray-600">Hello, I’m a</span>
  </template>
  <template #after>
    <span class="italic text-gray-400">– nice to meet you!</span>
  </template>
</RotatingWords>
```

💡 Use slots if you want to inject custom HTML, apply more complex layouts, or style different parts of the sentence independently.

---

## 🧠 Notes

- Animations use Vue’s `<transition>` component with scoped CSS classes.
- The animated word is wrapped in `inline-block` for proper transition behavior.
- If a slot is used (`#before`, `#after`), the corresponding `staticText` prop is ignored.
- Tailwind and utility classes can be passed in via class props.

---

## 🔮 Future Enhancements (Ideas)

- Typewriter-style animation
- `pauseOnHover` support
- `loop: false` to stop after one full cycle
- `startIndex` prop to control the initial word

---

## 🛠️ Maintainer Tips

- Props offer quick usage; slots enable full layout control
- Avoid making `staticTextBefore`/`After` required, since slots may replace them
- Use scoped transition class names to prevent global style bleed
