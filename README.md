# 🧰 @geoffjamieson/toolkit

Reusable Vue 3 components for building clean, flexible, and modern UIs.  
Tailwind-friendly and built with simplicity, scalability, and customization in mind.

---

## 📦 Installation

```bash
npm install @geoffjamieson/toolkit
```

---

## 🎨 Import Styles

To use built-in project styles like transitions and utility classes, you need to manually import the toolkit’s CSS file in your app entry point:

```
// main.js or main.ts
import '@geoffjamieson/toolkit/dist/toolkit.css'
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

Full documentation is available for each component.

- [All Components](https://github.com/UnionPAC/toolkit/blob/main/lib/docs/index.md)
- [RotatingWords Component](https://github.com/UnionPAC/toolkit/blob/main/lib/docs/components/RotatingWords.md)

---

## 🧪 Local Development

This repo includes a `/src` playground to test and iterate on components locally.  

⚠️ The /src playground is for local development only and is not included in the published npm package.

```bash
npm install
npm run dev
```

---

## 🙌 Contributing

Feel free to submit issues or pull requests if you'd like to improve or add new components!