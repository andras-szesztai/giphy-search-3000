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
})
