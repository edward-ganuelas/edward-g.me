import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { fileURLToPath, URL } from "url";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})