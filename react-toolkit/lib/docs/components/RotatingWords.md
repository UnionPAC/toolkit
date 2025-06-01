# 🔤 RotatingWords

`RotatingWords` is a flexible React component from `@geoffjamieson/react-toolkit` that displays a rotating word or phrase with animated transitions.

---

## ✨ Features

- 🔁 Rotates through a list of words
- 🎞️ Supports `fade`, `slide-up`, `slide-down`, `slide-left`, and `slide-right` animations
- 🧩 Works with props or children components
- 🎨 Fully customizable via class and style props
- ✅ Tailwind-friendly and framework-agnostic
- 📝 Fully typed with TypeScript

---

## ⚙️ Props

| Prop               | Type               | Default      | Description |
|--------------------|--------------------|--------------|-------------|
| `words`            | `string[]`         | **Required** | List of rotating words or phrases |
| `staticTextBefore` | `string`           | `''`         | Static text before the animated word (ignored if `beforeSlot` is used) |
| `staticTextAfter`  | `string`           | `''`         | Static text after the animated word (ignored if `afterSlot` is used) |
| `interval`         | `number`           | `2000`       | Time (in ms) between word changes |
| `animation`        | `'fade' \| 'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right'` | `'slide-up'` | Animation type |
| `wrapperClass`     | `string`           | `''`         | Class applied to the outer wrapper |
| `wrapperStyle`     | `React.CSSProperties` | `{}`     | Style applied to the wrapper |
| `beforeClass`      | `string`           | `''`         | Class for the before-text span |
| `afterClass`       | `string`           | `''`         | Class for the after-text span |
| `wordClass`        | `string`           | `''`         | Class applied to the animated word |
| `wordStyle`        | `React.CSSProperties` | `{}`     | Style applied to the animated word |
| `beforeSlot`       | `React.ReactNode`  | `undefined`  | Custom content before the animated word |
| `afterSlot`        | `React.ReactNode`  | `undefined`  | Custom content after the animated word |

---

## 🚀 Examples

```tsx
import { RotatingWords } from '@geoffjamieson/react-toolkit';

function App() {
  return (
    <>
      {/* ✅ Props-based usage (simple) */}
      <RotatingWords
        staticTextBefore="I'm a"
        words={['Wizard', 'Designer', 'Creator']}
        staticTextAfter="and I love React."
        animation="slide-left"
        interval={2500}
        wordClass="text-blue-600 font-bold"
      />

      {/* 🧩 Slot-based usage (custom layout) */}
      <RotatingWords
        words={['React Dev', 'Tinkerer', 'Cat Dad']}
        animation="fade"
        interval={3000}
        wordClass="text-emerald-500 font-semibold"
        beforeSlot={<span className="text-gray-600">Hello, I'm a</span>}
        afterSlot={<span className="italic text-gray-400">– nice to meet you!</span>}
      />
    </>
  );
}
```

💡 Use `beforeSlot` and `afterSlot` props if you want to inject custom HTML, apply more complex layouts, or style different parts of the sentence independently.

---

## 🎨 Required Styles

To enable built-in transitions and utility styles, add this to your main entry file:

```tsx
// main.tsx or App.tsx
import '@geoffjamieson/react-toolkit/dist/react-toolkit.css';
```

---

## 🧠 Notes

- Transitions use `react-transition-group`'s `CSSTransition` component with dynamic `classNames` bound to the `animation` prop

- The animated word uses a dynamic `key` prop to ensure transition triggers on change

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

- Use `classNames={animation}` in the `CSSTransition` to support multiple animation styles

- Avoid making `staticTextBefore` / `staticTextAfter` required — they can be replaced with slots

- Leave styling and animation flexibility to the user

- `wrapperClass` and `wordClass` are the main style hooks

← [Back to Documentation Index](../index.md)
