import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'views/*.html', dest: 'views' },
        { src: 'assets/*.css', dest: 'assets' }  // Copie de tous les CSS
      ]
    })
  ]
});