export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "反洗钱系统",
    "headers": [],
    "path": "/overview/aml.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "德索CRM",
    "headers": [],
    "path": "/overview/crm.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "知客",
    "headers": [],
    "path": "/overview/mobile.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "业务审批",
    "headers": [],
    "path": "/overview/oa.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "统一数据服务平台",
    "headers": [],
    "path": "/overview/udsp.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "新佣金提成管理",
    "headers": [
      {
        "level": 2,
        "title": "客户管理",
        "slug": "客户管理",
        "link": "#客户管理",
        "children": []
      },
      {
        "level": 2,
        "title": "居间人管理",
        "slug": "居间人管理",
        "link": "#居间人管理",
        "children": []
      },
      {
        "level": 2,
        "title": "员工管理",
        "slug": "员工管理",
        "link": "#员工管理",
        "children": []
      },
      {
        "level": 2,
        "title": "软件费用计算",
        "slug": "软件费用计算",
        "link": "#软件费用计算",
        "children": []
      },
      {
        "level": 2,
        "title": "交易所返还管理",
        "slug": "交易所返还管理",
        "link": "#交易所返还管理",
        "children": []
      },
      {
        "level": 2,
        "title": "利息返还管理",
        "slug": "利息返还管理",
        "link": "#利息返还管理",
        "children": []
      },
      {
        "level": 2,
        "title": "提成计算管理",
        "slug": "提成计算管理",
        "link": "#提成计算管理",
        "children": []
      }
    ],
    "path": "/manual/crm/commission.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/manual/crm/report.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/manual/crm/%E6%8A%95%E8%B5%84%E8%80%85%E5%9B%9E%E8%AE%BF.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/manual/crm/%E7%89%B9%E6%B3%95%E8%B4%A6%E5%8D%95%E5%8F%91%E9%80%81.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "自动业务短信",
    "headers": [],
    "path": "/manual/crm/%E8%87%AA%E5%8A%A8%E4%B8%9A%E5%8A%A1%E7%9F%AD%E4%BF%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/manual/mobile/%E7%9F%A5%E5%AE%A2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
