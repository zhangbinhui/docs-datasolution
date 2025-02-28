import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default {
  bundler: viteBundler(),
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme(
    {
      logo: '/images/logo-long.png',
      navbar: [
        // NavbarItem
        {
          text: '首页',
          link: '/README.md', 
        },  
        // NavbarGroup
        {
          text: '产品介绍',
          children: [
            {
              text: 'CRM',
              link: '/overview/crm.md',
            },
            {
              text: '反洗钱',
              link: '/overview/aml.md',
            },
            {
              text: '知客',
              link: '/overview/mobile.md',
            },
            {
              text: '业务审批',
              link: '/overview/oa.md',
            },
            {
              text: '统一数据服务平台',
              link: '/overview/udsp.md',
            },
          ],
        },

        // NavbarGroup
        {
          text: '操作手册',
          children: [
            {
              text: '德索CRM',
              prefix: '/manual/crm/',
              children: [
                'commission.md',
                'report.md',
                '特法账单发送.md',
                '自动业务短信.md',
                '投资者回访.md',
              ],
            },
            {
              text: '生产力',
              children: ['/productivity/plus.md','/productivity/one-api.md','/productivity/next.md', ],
            },
            {
              text: '小技巧',
              children:[
                '/tips/cloudflare-speed.md'
              ]
            },
            {
              text: '停服归档',
              children: ['/legacy/station-old.md','/legacy/plus-old.md','/legacy/lushuren.md','/legacy/pandora.md', '/legacy/simple.md'],
            },
            {
              text: '小作文',
              children: ['/essay/Pandora-quit.md' ],
            }  
          ],
        },


        {
          text: '友情链接',
          link: '/guide/friends.md'
        }

      ],

    // 侧边栏数组
    sidebar: {
        '/crm/':[
          {
            text: 'CRM',
            children: [
              '佣金提成管理.md',
              '特法账单发送.md',
              '报表中心.md',
              '自动短信.md',
              '投资回访.md',
            ],
          },
        ],
        '/mobile/':[
          {
            text: '知客',
            children: [
              '知客.md',
            ],
          },
        ],
        
    },
    
  }),
  plugins: [
    backToTopPlugin(),
    searchPlugin({
      // 配置项
    }),
    copyCodePlugin({
      // options
    }),
    mediumZoomPlugin({
      // 配置项
    }),
    nprogressPlugin(),
  ],
}