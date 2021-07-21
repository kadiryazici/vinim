import { defineConfig } from 'vite';
import VueJSX from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import ViteDTS from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      VueJSX(),
      ViteDTS({
         outputDir: './dist/types'
      })
   ],
   build: {
      target: 'es2015',
      lib: {
         entry: resolve(__dirname, 'src/index.ts'),
         name: 'vinim',
         formats: ['es', 'umd']
      },
      rollupOptions: {
         external: ['vue']
      }
   }
});
