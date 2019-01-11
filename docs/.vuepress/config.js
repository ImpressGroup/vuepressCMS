module.exports = {
  title: '滑雪饭 Skier',
  description: '大人孩子同乐乐，奉上最热的滑雪信息、玩转各大滑雪胜地、实战装备全攻略！ 北海道、长野等日本滑雪之旅的人气路线一网打尽~顺便泡泡温泉也不错!',
  themeConfig: {
    docsDir: 'docs',
    //repo: 'ImpressGroup/vuepressCMS',
    search: false,
    sidebar: false,
    head:[
      ['script', {src: '/js/jquery-3.1.1.min.js'}],
      ['script', {src: '/js/demo4.js'}]
    ],
    nav: [
      {
        text: '首页',
        link: '/index.html',
        
      },
      {
        text: '滑雪旅游',
        link: '/categories/travel',
      },
      {
        text: '滑雪教程',
        link: '#',
      },
      {
        text: '滑雪用品',
        link: '#',
      }
    ]
  }
}