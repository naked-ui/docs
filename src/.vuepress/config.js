const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Naked UI',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" }],
    ['meta', { name: 'theme-color', content: '##111111' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/img/naked-ui-logo.svg',
    repo: 'naked-ui/naked-ui',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started/introduction',
      },
      {
        text: 'Examples',
        link: '/examples/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting started',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/guide/getting-started/introduction',
            '/guide/getting-started/installation',
            '/guide/getting-started/styling',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            {
              title: 'Content',
              collapsable: false,
              children: [
                '/guide/components/content/accordion',
                '/guide/components/content/card',
                '/guide/components/content/carousel',
                '/guide/components/content/cover',
                '/guide/components/content/hyperlink',
                '/guide/components/content/icon',
                '/guide/components/content/progress',
                '/guide/components/content/skeleton',
                '/guide/components/content/table',
                '/guide/components/content/tabs'
              ]
            },
            {
              title: 'Form Elements',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '/guide/components/form/button',
                '/guide/components/form/input-checkbox',
                '/guide/components/form/input-color',
                '/guide/components/form/input-date',
                '/guide/components/form/input-email',
                '/guide/components/form/input-file',
                '/guide/components/form/input-number',
                '/guide/components/form/input-radio',
                '/guide/components/form/input-range',
                '/guide/components/form/input-search',
                '/guide/components/form/input-text',
                '/guide/components/form/input-time',
                '/guide/components/form/select',
                '/guide/components/form/textarea'
              ]
            },
            // {
            //   title: 'Navigation',
            //   collapsable: true,
            //   sidebarDepth: 2,
            //   children: [
            //     '/guide/components/navigation/dotnav',
            //     '/guide/components/navigation/pagination',
            //     '/guide/components/navigation/slidenav',
            //     '/guide/components/navigation/thumbnav'
            //   ]
            // },
            // {
            //   title: 'Surfaces',
            //   collapsable: true,
            //   sidebarDepth: 2,
            //   children: [
            //     '/guide/components/surfaces/modal',
            //     '/guide/components/surfaces/off-canvas',
            //     '/guide/components/surfaces/overlay',
            //     '/guide/components/surfaces/popover',
            //     '/guide/components/surfaces/tooltip'
            //   ]
            // }
          ],
        },
        {
          title: 'Validation',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/guide/validation/basics/',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
