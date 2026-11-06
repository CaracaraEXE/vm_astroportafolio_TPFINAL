import node from '@astrojs/node'
import { webcore } from "webcoreui/integration";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    css:{
      preprocessorOptions:{
        scss:{
          api:'modern-compiler'
        }
      }
    }
  },
  adapter: node({
    mode: 'standalone',
  }),
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Michroma",
    cssVariable: "--font-michroma",
  }],

  integrations: [webcore()]
});