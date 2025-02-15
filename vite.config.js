import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'portal_root',
      remotes: {
        portal_auth: {
          type: 'module',
          name: 'portal_auth',
          entry: 'http://localhost:3001/remoteEntry.js',
          entryGlobalName: 'portal_auth',
          shareScope: 'default',
        },
        portal_menu: {
          type: 'module',
          name: 'portal_menu',
          entry: 'http://localhost:3002/remoteEntry.js',
          entryGlobalName: 'portal_menu',
          shareScope: 'default',
        },
      },
      filename: 'remoteEntry.js',
      shared: {
        svelte: {
          singleton: true,
        },
        'svelte/store': {
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
