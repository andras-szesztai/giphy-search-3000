/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    test: {
        environment: 'jsdom',
        setupFiles: ['./setupTests.ts'],
        globals: true,
        include: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
        css: false,
    },
    preview: {
        port: 3000,
        strictPort: true,
    },
    server: {
        port: 3000,
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:3000',
    },
})
