export const themeData = JSON.parse("{\"logo\":\"/images/logo-long.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/README.md\"},{\"text\":\"服务入口\",\"link\":\"/guide/links.md\"},{\"text\":\"功能介绍\",\"children\":[{\"text\":\"免费使用\",\"children\":[\"/free/station.md\"]},{\"text\":\"生产力\",\"children\":[\"/productivity/plus.md\",\"/productivity/one-api.md\",\"/productivity/next.md\"]},{\"text\":\"小技巧\",\"children\":[\"/tips/cloudflare-speed.md\"]},{\"text\":\"停服归档\",\"children\":[\"/legacy/station-old.md\",\"/legacy/plus-old.md\",\"/legacy/lushuren.md\",\"/legacy/pandora.md\",\"/legacy/simple.md\"]},{\"text\":\"小作文\",\"children\":[\"/essay/Pandora-quit.md\"]}]},{\"text\":\"服务状态\",\"children\":[{\"text\":\"更新日志\",\"link\":\"/changelog/update.md\"},{\"text\":\"本站服务状态\",\"link\":\"https://status.hugai.top\"},{\"text\":\"OpenAI 服务状态\",\"link\":\"https://status.openai.com/\"},{\"text\":\"Claude 服务状态\",\"link\":\"https://status.anthropic.com/\"}]},{\"text\":\"友情链接\",\"link\":\"/guide/friends.md\"}],\"sidebar\":[{\"text\":\"免费使用\",\"children\":[\"/free/station.md\"]},{\"text\":\"生产力\",\"children\":[\"/productivity/plus.md\",\"/productivity/one-api.md\",\"/productivity/next.md\"]},{\"text\":\"小技巧\",\"children\":[\"/tips/cloudflare-speed.md\"]},{\"text\":\"停服归档\",\"children\":[\"/legacy/station-old.md\",\"/legacy/plus-old.md\",\"/legacy/lushuren.md\",\"/legacy/pandora.md\",\"/legacy/simple.md\"]},{\"text\":\"小作文\",\"children\":[\"/essay/Pandora-quit.md\"]},{\"text\":\"友情链接\",\"link\":\"/guide/friends.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
