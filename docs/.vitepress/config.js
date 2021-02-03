module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    [
      'style',
      {},
      'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }' + '.container { max-width: unset !important; padding: 0 12.5rem 4rem 3rem !important;}' + '.next-and-prev-link .container { padding: 1rem 0 0 0 !important;}'
    ]
  ],
  themeConfig: {
    repo: 'xinlei3166/vitepress-demo',
    docsDir: 'docs',
    docsBranch: 'master',

    // editLinks: true,
    // editLinkText: 'Suggest changes to this page',
    // lastUpdated: 'Last Updated',

    nav: [
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'API 参考', link: '/api/' },
      { text: '插件', link: '/plugins/' },
      {
        text: '更新日志',
        link:
          'https://github.com/xinlei3166/vitepress-demo'
      }
    ],

    sidebar: {
      '/api/': 'auto',
      '/plugins/': 'auto',
      '/components/': getComponentsSidebar(),
      '/guide/': getGuideSidebar()
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins
      // md.use(require('markdown-it-xxx'))
      const { demoBlock, demoCode } = require('./plugins/md-loader')
      demoBlock(md)
      demoCode(md) // 代码高亮的语言默认为vue，可传入第二个参数自定义语言 demoCode(md, 'html')
    }
  }
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: 'Git学习笔记1',
          link: '/guide/Git学习笔记1'
        },
        {
          text: 'Git学习笔记2',
          link: '/guide/Git学习笔记2'
        }
      ]
    },
    {
      text: '教程',
      children: [
        {
          text: 'Git学习笔记1',
          link: '/guide/Git学习笔记1'
        },
        {
          text: 'Git学习笔记2',
          link: '/guide/Git学习笔记2'
        }
      ]
    }
  ]
}