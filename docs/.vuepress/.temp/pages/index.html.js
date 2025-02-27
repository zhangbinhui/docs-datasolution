import comp from "D:/projects/vuepress2/docs-datasolution/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo-big.png\",\"heroImageDark\":\"/images/logo-big.png\",\"heroText\":\"欢迎使用德索 CRM\",\"tagline\":\"我们不生产大模型，我们只是AI服务的搬运工\",\"actions\":[{\"text\":\"服务入口\",\"link\":\"/guide/links\",\"type\":\"primary\"},{\"text\":\"功能介绍\",\"link\":\"/free/station\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"极致白嫖\",\"details\":\"无需注册，无需魔法，免费使用ChatGPT 和 Claude。\"},{\"title\":\"生产力\",\"details\":\"稳定可靠的主流大模型 API中转服务，即买即用，不会过期。\"},{\"title\":\"简单优雅\",\"details\":\"ChatGPT Plus & Claude Pro 拼车服务，国内直连，优雅上车。\"},{\"title\":\"持续优化\",\"details\":\"及时跟进业内动态，搬运最新最top的AI服务。\"}],\"footer\":\"Copyright © 2024-2025 AI自强少年\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
