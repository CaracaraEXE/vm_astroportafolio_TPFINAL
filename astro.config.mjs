import node from '@astrojs/node'
import { webcore } from "webcoreui/integration";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Michroma",
    cssVariable: "--font-michroma",
  },
{
    provider: fontProviders.fontsource(),
    name: "Jura",
    cssVariable: "--font-jura",
  },
  {
    provider: fontProviders.fontsource(),
    name: "SUSE Mono",
    cssVariable: "--font-suse",
  }
],

  integrations: [webcore()]
});