// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

export default defineConfig({
  site: 'https://blog.humrich.us',
  integrations: [
    expressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ['github-light', 'github-dark'],
      themeCssSelector: (theme) => {
        return theme.name === 'github-dark' ? '.dark' : ':root:not(.dark)';
      },
      defaultProps: {
        showLineNumbers: true,
      },
      styleOverrides: {
        frames: {
          shadowColor: 'transparent',
        },
        codeBackground: ({ theme }) =>
          theme.name === 'github-dark' ? '#1a1a1a' : '#f5f5f5',
        borderColor: ({ theme }) =>
          theme.name === 'github-dark' ? '#333' : '#e0e0e0',
        borderRadius: '0.5rem',
      },
    }),
    tailwind(),
  ],
});
