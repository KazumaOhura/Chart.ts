import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        sourcemap: true,
        minify: false
    },
    esbuild: {
        tsconfigRaw:{
            compilerOptions:{
                importsNotUsedAsValues: 'preserve',
            }
        }
    }
})
