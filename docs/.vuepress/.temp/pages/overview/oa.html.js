import comp from "D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/overview/oa.html.vue"
const data = JSON.parse("{\"path\":\"/overview/oa.html\",\"title\":\"业务审批\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1740710669000,\"contributors\":[{\"name\":\"Ethan Hunt\",\"username\":\"Ethan Hunt\",\"email\":\"1225106113@qq.com\",\"commits\":1,\"url\":\"https://github.com/Ethan Hunt\"}]},\"filePathRelative\":\"overview/oa.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
