<template>
  <div class="page">
    <div class="slideshow">
      <div class="slides slides--images">
        <div class="slide slide--current">
          <div class="slide__img" style="background-image: url(/images/ski-tourism-kiroro-resort_kv.jpg)"></div>
        </div>
        <div class="slide">
          <div class="slide__img" style="background-image: url(/images/ski-tourism-lotte-arai-resort_kv.jpg)"></div>
        </div>
        <div class="slide">
          <div class="slide__img" style="background-image: url(/images/ski-tourism-nozawa-onsen_kv.jpg)"></div>
        </div>
      </div>
      <div class="slides slides--titles">
        <div class="slide slide--current">
          <p class="size40 pb20">长野县</p>
          <h2 class="slide__title mb40">白马八方尾根滑雪场</h2>
          <a href="" class="size24 blue-btn">FIND OUT MORE</a>
        </div>
        <div class="slide">
          <p class="size40">长野县</p>
          <h2 class="slide__title mb40">白马八方尾根滑雪场</h2>
          <a href="" class="size24 blue-btn">FIND OUT MORE</a>
        </div>
        <div class="slide">
          <p class="size40">长野县</p>
          <h2 class="slide__title mb40">白马八方尾根滑雪场</h2>
          <a href="" class="size24 blue-btn">FIND OUT MORE</a>
        </div>
      </div>
      <nav class="slidenav">
        <button class="slidenav__item slidenav__item--prev" v-on:click="hcontrol">Previous</button>
        <span>/</span>
        <button class="slidenav__item slidenav__item--next">Next</button>
      </nav>
    </div>
    <div class="top-info">
        <p class="size18 color-white">INFOMATION | 2019.01.20 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
    <div class="top-list">
    <div v-for="post in posts" class="top-box">
      <div class="box-img">
        <a v-bind:href="post.path"><img v-bind:src="'/images/' + post.frontmatter.topimg" /></a>
      </div>
      <div class="box-txt">      
        <h2>{{post.title}}</h2>
        <p>{{post.frontmatter.description}}</p>
      </div>
    </div>
  </div>
    <Content />
  </div>
</template>


<script>
//import kvs from "../public/js/demo4.js"

export default {
  computed: {
    posts() {
      return this.$site.pages
        //表示travel目录下的所有post
        //.filter(post => post.path.startsWith('/'))
        .filter(post => post.frontmatter['categories'].startsWith('travel'))
        //日期按照降序排列
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }

  },

  methods:{
    hcontrol: function(){
      //kvs()
    }
  },
  created: function(){
   //kvs
  }
}
</script>
<style lang="stylus">
@import '../theme/styles/base.css'
@import '../theme/styles/top.styl'
</style>