import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { watermarkPlugin } from '@vuepress/plugin-watermark'

export default {
  bundler: viteBundler({
    viteOptions: {
      assetsInclude: ['**/*.PNG', '**/*.pdf', '**/*.PDF'] // 添加这一行来包含大写PNG文件
    }
  }),
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['script', {}, `window.difyChatbotConfig = { token: 'xLerFGASLr0C2AeL', baseUrl: 'https://dify.aiporters.com' }`],
    ['script', { src: 'https://dify.aiporters.com/embed.min.js', id: 'xLerFGASLr0C2AeL', defer: true }],
    ['style', {}, `
      #dify-chatbot-bubble-button { background-color: #1C64F2 !important; }
      #dify-chatbot-bubble-window { width: 24rem !important; height: 40rem !important; }
    `]
  ],
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
              prefix: '/overview/crm/',
              children: [
                'crm.md',
                'return.md',
                'contract.md',
              ],
            },
            {
              text: '反洗钱',
              prefix: '/overview/aml/',
              children: [
                'aml.md',
              ],
            },
            {
              text: '知客',
              prefix: '/overview/scrm/',
              children: [
                'scrm.md',
              ],
            },
            {
              text: '业务审批',
              prefix: '/overview/oa/',
              children: [
                'oa.md',
              ],
            },
            // {
            //   text: '统一数据服务平台',
            //   link: '/overview/udsp.md',
            // },
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
                'dsi.md',
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
              text: '业务管理',
              prefix: '/manual/oa/',
              children: ['oa.md'],
            },
            // {
            //   text: '统一数据服务平台',
            //   prefix: '/manual/udsp/',
            //   children: [],
            // }  
          ],
        },

      ],

    // 侧边栏数组
    sidebar: {
      '/overview/':[
        {
          text: 'CRM',
          children: [
            'crm/crm.md',
            'crm/return.md',
            'crm/contract.md',
          ],
        },
        {
          text: '反洗钱',
          children: [
            'aml/aml.md',
          ],
        },
        {
          text: '知客',
          children: [
            'scrm/scrm.md',
          ],
        },
        {
          text: '业务审批',
          children: [
            'oa/oa.md',
          ],
        },
        // {
        //   text: '统一数据服务平台',
        //   link: 'udsp.md',
        // },
      ],
      '/manual/':[
        {
          text: 'CRM',
          children: [
            'crm/return.md',
            'crm/report.md',
            'crm/dsi.md',
            'crm/bill-send.md',
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
          collapsible: true,
          children: [
            'oa/oa.md',
            'oa/oa-pro-compare.md',
            'oa/oa-up-20241229.md',
            'oa/oa-up-20231220.md',
            'oa/oa-up-20230515.md',
            'oa/oa-up-20230331.md',
            'oa/oa-up-20221230.md',
            'oa/oa-up-20221024.md',
            'oa/oa-up-20220617.md',
            'oa/oa-up-20220112.md',
            'oa/oa-up-20210806.md',
          ],
        },
        // {
        //   text: '统一数据服务平台',
        //   children: [
            
        //   ],
        // },
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
    watermarkPlugin({
      enabled: true,
      watermarkOptions: {
        content: '德索信息',
      },
    }),
  ],
}