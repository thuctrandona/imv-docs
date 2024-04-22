import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  // lang: 'en-US',
  title: 'Fahavi',
  description: 'Industrial Machine Vision',

  lastUpdated: true,
  cleanUrls: true,

  base: process.env.BASE || '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },

  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../')
      }
    },
    server: {
      host: true,
      fs: {
        allow: ['../..']
      }
    },
  },

  // vue: {},

  themeConfig: {
    outlineTitle: 'Danh mục trang',
    lastUpdatedText: 'Cập nhật lần cuối',
    logo: '/logo.svg',

    search: {
      provider: 'local',
    },

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern: 'https://github.com/thuctrandona/imv-docs/edit/master/docs/:path',
      text: 'Chỉnh sửa trang này trên Github'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thuctrandona/imv-docs' }
    ],

    footer: {
      message: 'Phát hành dựa trên giấy phép MIT.',
      copyright: 'Copyright © 2024 by FahaVi'
    }
  }
})
