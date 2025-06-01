import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        lib: {
            entry: 'lib/index.js',
            name: 'ReactToolkit',
            fileName: 'react-toolkit',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                assetFileNames: function (assetInfo) {
                    if (assetInfo.name === 'style.css')
                        return 'react-toolkit.css';
                    return assetInfo.name || 'unknown';
                }
            }
        }
    }
});
