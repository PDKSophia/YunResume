/**
 * @desc 扩展 webpack
 * @author pengdaokuan
 * @createDate  2020-04-05
 * @lastModify  2020-04-05
 */

// 注意: 新的react-app-rewired@2.x版本的关系。react-app-rewired删除所有方法的injectBabelPlugin
// 解决方案，可以采用降级方案: npm install react-app-rewired@2.0.2-next.0
// 这里不降级的话，可以网上找些文章，就知道如何配置拉

const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
  // addWebpackPlugin
  // addLessLoader
} = require("customize-cra");
const path = require("path");
// const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),

  addWebpackAlias({
    "@src": path.resolve(__dirname, "src/")
  }),

  addDecoratorsLegacy()
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' }
  // })

  // addWebpackPlugin(
  // new WebpackBuildNotifierPlugin({
  //     title: 'My Project Webpack Build',
  //     suppressSuccess: true
  //   })
  // )
);
