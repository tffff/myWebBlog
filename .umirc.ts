import { defineConfig } from 'dumi';
import navs from './nav';
import menus from './sidebar';

export default defineConfig({
  title: 'Tffff Blog',
  mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  dynamicImport: {},
  // ssr: {},
  // exportStatic: { htmlSuffix: true },
  menus,
  navs,
  theme: {
    // '@c-primary': '#ff652f',
    '@s-menu-width': ' 260px',
    '@s-site-menu-width': '280px',
  },
  // more config: https://d.umijs.org/config
});
