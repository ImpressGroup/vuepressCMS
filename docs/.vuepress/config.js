const webpack = require('webpack');
module.exports = {
  title: '滑雪饭 Skier',
  description: '大人孩子同乐乐，奉上最热的滑雪信息、玩转各大滑雪胜地、实战装备全攻略！ 北海道、长野等日本滑雪之旅的人气路线一网打尽~顺便泡泡温泉也不错!',
  host: "0.0.0.0",
  port:　3000,
  head:[
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/cus.css' }],
    ['script', {src: '/js/jquery-3.1.1.min.js'}],
    ['script', {src: '/js/anime.min.js'}],
    ['script', {src: '/js/imagesloaded.pkgd.min.js'}],
    ['script', {src: '/js/demo4.js'}],
    ['script', {src: '/js/bootstrap.min.js'}]
  ],
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  themeConfig: {
    docsDir: 'docs',
    //repo: 'ImpressGroup/vuepressCMS',
    search: false,
    sidebar: false,
    nav: [
      {
        text: '首页',
        link: '/index.html',
        
      },
      {
        text: '滑雪旅游',
        link: 'ski-tourism.html',
      },
      {
        text: '滑雪教程',
        link: 'ski-tutorial.html',
      },
      {
        text: '滑雪用品',
        link: 'ski-supply.html',
      }
    ]
  }
}