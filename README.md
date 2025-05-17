# 🧰 @geoffjamieson/toolkit

Reusable Vue 3 components for building clean, flexible, and modern UIs.  
Built with Tailwind-friendly class support and focused on simplicity, flexibility, and scalability.

---

## 📦 Installation

```bash
npm install @geoffjamieson/toolkit
```

---

## 🚀 Quick Usage

Import and use any component:

```js
import { RotatingWords } from '@geoffjamieson/toolkit'
```

```vue
<RotatingWords
  staticTextBefore="I'm a"
  :words="['Developer', 'Designer', 'Creator']"
  staticTextAfter="and I love it."
  animation="slide-left"
/>
```

---

## 📚 Documentation

This package includes full documentation for each component.

- [Component Index](https://github.com/UnionPAC/toolkit/blob/main/lib/docs/index.md)
- [RotatingWords Component](https://github.com/UnionPAC/toolkit/blob/main/lib/docs/components/RotatingWords.md)

---

## 🧪 Local Development

This repo includes a `/src` playground to test and iterate on components locally.  
This is **not included** in the published npm package.

```bash
npm install
npm run dev
```

---

## 🛠️ License

MIT

---

## 🙌 Contributing

Feel free to submit issues or pull requests if you'd like to improve or add new components!
