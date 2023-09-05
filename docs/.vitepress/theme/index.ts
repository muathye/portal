// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Footer from '../components/Footer.vue'
import BlogLayout from '../layouts/Blog.vue'
import './custom.css'


export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: BlogLayout,
  enhanceApp({ app }) {
    // register your custom global components
    // todo: https://vitejs.dev/guide/features.html#glob-import
    app.component('footer', Footer)
  }
}