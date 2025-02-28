export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/overview/aml.html", { loader: () => import(/* webpackChunkName: "overview_aml.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/aml.html.js"), meta: {"title":"反洗钱系统"} }],
  ["/overview/crm.html", { loader: () => import(/* webpackChunkName: "overview_crm.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/crm.html.js"), meta: {"title":"德索CRM"} }],
  ["/overview/mobile.html", { loader: () => import(/* webpackChunkName: "overview_mobile.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/mobile.html.js"), meta: {"title":"知客"} }],
  ["/overview/oa.html", { loader: () => import(/* webpackChunkName: "overview_oa.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/oa.html.js"), meta: {"title":"业务审批"} }],
  ["/overview/udsp.html", { loader: () => import(/* webpackChunkName: "overview_udsp.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/udsp.html.js"), meta: {"title":"统一数据服务平台"} }],
  ["/manual/crm/commission.html", { loader: () => import(/* webpackChunkName: "manual_crm_commission.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/crm/commission.html.js"), meta: {"title":"新佣金提成管理"} }],
  ["/manual/crm/report.html", { loader: () => import(/* webpackChunkName: "manual_crm_report.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/crm/report.html.js"), meta: {"title":""} }],
  ["/manual/crm/%E6%8A%95%E8%B5%84%E8%80%85%E5%9B%9E%E8%AE%BF.html", { loader: () => import(/* webpackChunkName: "manual_crm_投资者回访.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/crm/投资者回访.html.js"), meta: {"title":""} }],
  ["/manual/crm/%E7%89%B9%E6%B3%95%E8%B4%A6%E5%8D%95%E5%8F%91%E9%80%81.html", { loader: () => import(/* webpackChunkName: "manual_crm_特法账单发送.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/crm/特法账单发送.html.js"), meta: {"title":""} }],
  ["/manual/crm/%E8%87%AA%E5%8A%A8%E4%B8%9A%E5%8A%A1%E7%9F%AD%E4%BF%A1.html", { loader: () => import(/* webpackChunkName: "manual_crm_自动业务短信.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/crm/自动业务短信.html.js"), meta: {"title":"自动业务短信"} }],
  ["/manual/mobile/%E7%9F%A5%E5%AE%A2.html", { loader: () => import(/* webpackChunkName: "manual_mobile_知客.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/manual/mobile/知客.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
