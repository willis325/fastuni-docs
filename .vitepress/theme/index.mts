import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue';
import './index.css'



export default {
  extends: DefaultTheme,
  Layout: () => h(Layout)
} satisfies Theme;