import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const SITE = process.env.SITE_URL ?? 'https://kuzdariam.github.io';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'never',
  integrations: [tailwind({ applyBaseStyles: false })],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
