# 🪟 Modal

`Modal` is a headless, logic-only React component from `@geoffjamieson/react-toolkit` that handles open/close logic, `Escape` key handling, and backdrop clicks. It uses React's `createPortal` to render content into `<body>`, while giving you full control over structure and styling.

---

## ✨ Features

- 🧠 Logic-only: all layout and styles are user-defined
- 🧩 Renders children content in a portal-to-body wrapper
- 🎯 Calls `onClose` on backdrop click or `Escape` key (if enabled)
- 🧰 Configurable behavior via props (`closeOnEsc`, `closeOnBackdrop`)
- 🎨 `wrapperClass` lets you style the backdrop and layout freely
- ✅ Fully typed with TypeScript

---

## ⚙️ Props

| Prop              | Type                | Default | Description                                                 |
|-------------------|---------------------|---------|-------------------------------------------------------------|
| `open`            | `boolean`           | —       | Controls whether the modal is visible (required)            |
| `closeOnEsc`      | `boolean`           | `true`  | Call `onClose` when the `Escape` key is pressed             |
| `closeOnBackdrop` | `boolean`           | `true`  | Call `onClose` when the backdrop is clicked                 |
| `wrapperClass`    | `string`            | `''`    | Class applied to the modal wrapper (backdrop, layout, etc.) |
| `onClose`         | `() => void`        | —       | Callback function when modal should close                   |
| `children`        | `React.ReactNode`   | —       | Modal content — full control of layout                      |

---

## 🚀 Usage Example

```tsx
import { useState } from 'react';
import { Modal } from '@geoffjamieson/react-toolkit';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        wrapperClass="fixed inset-0 bg-black/50 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Custom Modal</h2>
          <p>You control all layout and styles.</p>
          <button 
            className="mt-4 text-blue-600" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
```

---

## 🎨 Required Styles

To enable built-in transitions and utility styles, add this to your main entry file:

```tsx
// main.tsx or App.tsx
import '@geoffjamieson/react-toolkit/dist/react-toolkit.css';
```

---

## 🧠 Notes

- The modal's outer wrapper is rendered by the component — style it using `wrapperClass`

- The wrapper listens for clicks to detect backdrop clicks

- The component uses `createPortal` to render to `document.body` to avoid layout or z-index conflicts

- This component does not include transitions by default — feel free to apply your own using React transition libraries. You can also use the utility classes from `react-toolkit.css` for styling.

- No scroll locking, focus trap, or baked-in styles are included — you're in full control

---

## 🔮 Future Enhancements (Ideas)

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
