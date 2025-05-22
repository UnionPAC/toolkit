# 🧰 toolkit

![Monorepo](https://img.shields.io/badge/toolkit-monorepo-blue)

A growing collection of frontend tools — including UI components, utilities, animations, and more.  
This monorepo contains framework-specific packages like `vue-toolkit` and `react-toolkit`.

---

## 📦 Packages

| Package | Description | Links |
|---------|-------------|--------|
| [`@geoffjamieson/vue-toolkit`](https://www.npmjs.com/package/@geoffjamieson/vue-toolkit) | Reusable, unstyled Vue 3 UI components | [📦 npm](https://www.npmjs.com/package/@geoffjamieson/vue-toolkit) · [🔗 GitHub](https://github.com/UnionPAC/toolkit/tree/main/vue-toolkit) |
| [`@geoffjamieson/react-toolkit`](https://www.npmjs.com/package/@geoffjamieson/react-toolkit) | Reusable React components and hooks | [📦 npm](https://www.npmjs.com/package/@geoffjamieson/react-toolkit) · [🔗 GitHub](https://github.com/UnionPAC/toolkit/tree/main/react-toolkit) |

---

## 📚 Local Development

This repo uses [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

```bash
# Install all dependencies
npm install

# Run dev server for Vue toolkit
npm run dev:vue

# Build all packages
npm run build:all
```

---

## 📦 Publishing

To publish a specific package:

1. `cd vue-toolkit` (or another workspace)
2. Update the version in `package.json` (follow SemVer)
3. Build the package: ```npm run build```
4. Publish the package: ```npm publish --access public```

## 🙌 Contributing

Got an idea or improvement?
Feel free to open an issue or submit a pull request to help grow the toolkit.