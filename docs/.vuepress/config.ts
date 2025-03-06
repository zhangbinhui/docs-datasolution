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
        {
          text: '更新公告',
          link: '/update/update-log.md'
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
              link: '/overview/scrm.md',
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
          text: '使用手册',
          children: [
            {
              text: 'CRM',
              prefix: '/manual/crm/',
              children: [
                'return.md',
                'report.md',
                'bill-send.md',
                'auto-sms.md',
                'revisit.md',
              ],
            },
            {
              text: '反洗钱',
              prefix: '/manual/aml/',
              children: [],
            },
            {
              text: 'SCRM',
              prefix: '/manual/scrm/',
              children:[
                'mobile.md',
                'mobile-admin.md'
              ]
            },
            {
              text: '业务审批',
              prefix: '/manual/oa/',
              children: [],
            },
            {
              text: '统一数据服务平台',
              prefix: '/manual/udsp/',
              children: [],
            }  
          ],
        },

      ],

    // 侧边栏数组
    sidebar: {
      '/overview/':[
        {
          text: 'CRM',
          link: 'crm.md',
        },
        {
          text: '反洗钱',
          link: 'aml.md',
        },
        {
          text: '知客',
          link: 'scrm.md',
        },
        {
          text: '业务审批',
          link: 'oa.md',
        },
        {
          text: '统一数据服务平台',
          link: 'udsp.md',
        },
      ],
      '/manual/':[
        {
          text: 'CRM',
          children: [
            'crm/return.md',
            'crm/bill-send.md',
            'crm/report.md',
            'crm/auto-sms.md',
            'crm/revisit.md',
          ],
        },
        {
          text: '反洗钱',
          children: [
            
          ],
        },
        {
          text: 'SCRM',
          collapsible: true,
          children: [
            'scrm/mobile.md',
            'scrm/mobile-admin.md',
          ],
        },
        {
          text: '业务审批',
          children: [
            
          ],
        },
        {
          text: '统一数据服务平台',
          children: [
            
          ],
        },
      ],
      '/reference/': 'heading',
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