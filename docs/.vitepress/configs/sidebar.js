export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),
  '/camera/': cameraSlidebar(),
}

function getApiSidebar() {
  return [
    {
      text: 'Camera',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/api/',
        },
      ],
    },
  ]
}

function cameraSlidebar() {
  return [
    {
      text: 'Tổng quan',
      items: [
        {
          text: 'Cơ bản về camera',
          link: '/camera/selction-of-perfect-camera',
        },
      ],
    },
    {
      text: 'Kiến thức nền tảng về camera',
      items: [
        {
          text: 'Độ phân giải của cảm biến (Resolution of sensors)',
          link: '/camera/basic/resolution-of-sensors',
        },
        
      ],
    },
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button',
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs',
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal',
        },
        {
          text: 'Tag 标签',
          link: '/components/tag',
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue',
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '文档1',
          link: '/guide/',
        },
        {
          text: '文档2',
          link: '/guide/button',
        },
        {
          text: '文档3',
          link: '/guide/modal',
        },
      ],
    },
  ]
}
