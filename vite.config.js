import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { createVuePlugin as vue } from "vite-plugin-vue2";
import { fileURLToPath, URL } from "url";

export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                compatConfig: {
                    MODE: 3
                }
            }
        }
    })],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            vue: '@vue/compat'
        },
    },
})