// .vuepress/theme/Layout.vue
<template>
  <Layout>
    
    <footer slot="page-bottom">
      <div class="mb40"></div>
      <p class="size40 text-center mb20">SUBSCRIBE</p>
      <p class="size18 text-center mb40">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
      <div class="m-center"><div class="share-icon text-center"><img src="images/wecahat.png" class="img-fluid mb10"><p class="size22 strong mb20">Wechat</p></div><div class="share-icon text-center"><img src="images/weibo.png" class="img-fluid mb10"><p class="size22 strong mb20">Weibo</p></div></div>
      <p class="mb10">会社概要 | インプレスグループサイト | インプレスグループTop</p>
      <p>Copyright&copy;2002-2018 Yama-Kei Publishers co.,Ltd. All rights.</p>
    </footer>
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'

export default {
  components: {
    Layout,
  }
}
</script>

<style lang="stylus">
@import 'styles/config.styl'
@import 'styles/common.styl'
</style>
