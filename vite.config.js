import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

/**
 * This configuration ensures that all webp images in the components directory
 * are copied to the final build with their original paths preserved.
 * 
 * It uses a custom plugin that:
 * 1. Finds all webp files in the components directory
 * 2. Adds them to the bundle as assets with their original paths
 * 
 * The assetFileNames option in rollupOptions ensures that webp files
 * keep their original paths in the output.
 */

export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: false,
    port: 3000,
    cors: true,
    allowedHosts: 'all', // Allow any host to access the dev server
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
    assetsInclude: ['**/*.webp'], // Ensure webp files are recognized as assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep the original path for webp files
          if (assetInfo.name.endsWith('.webp')) {
            return assetInfo.name;
          }
          // Default handling for other assets
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    react(),
    {
      name: 'copy-webp-images',
      generateBundle(options, bundle) {
        // Function to recursively find all webp files in a directory
        function findWebpFiles(dir, baseDir = dir) {
          const files = fs.readdirSync(dir);
          let webpFiles = [];

          files.forEach(file => {
            const filePath = resolve(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              webpFiles = webpFiles.concat(findWebpFiles(filePath, baseDir));
            } else if (file.endsWith('.webp')) {
              // Get path relative to baseDir
              const relativePath = filePath.substring(baseDir.length + 1);
              webpFiles.push({ filePath, relativePath });
            }
          });

          return webpFiles;
        }

        // Find all webp files in the components directory
        const componentsDir = resolve(__dirname, 'src/components');
        const webpFiles = findWebpFiles(componentsDir, resolve(__dirname, 'src'));

        // Add each webp file to the bundle
        webpFiles.forEach(({ filePath, relativePath }) => {
          const content = fs.readFileSync(filePath);
          this.emitFile({
            type: 'asset',
            fileName: relativePath,
            source: content
          });
          console.log(`Added ${relativePath} to the bundle`);
        });
      }
    }
  ],
});
