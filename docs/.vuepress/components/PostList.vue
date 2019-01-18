// PostList.vue
<template>
<div>
  <div class="categories-top text-center col-md-12">
    <img src="/images/ski-tourism.png" class="m-center mb20" />
    <h2 class="size40 strong mb20">{{title}}</h2>
    <p class="text-center mb40">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
  </div>
  <div class="category-list">
    <div v-for="post in posts" class="content-box">
      <div class="box-img">
        <a v-bind:href="post.path"><img v-bind:src="'/images/' + post.frontmatter.topimg" /></a>
      </div>
      <div class="box-txt">  
        <div class="box-caption">    
          <h2 class="color-blue">{{post.title}}</h2>
          <p>{{post.frontmatter.description}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
//import '../public/js/category.js'
//import jsdom from 'jsdom';
//import $ from 'jquery';
//var jsdom = require("jsdom"); 
// import $ from 'jquery'
// window.$ = $
// window.jQuery = $

export default {
  computed: {
    posts() {
      return this.$site.pages
        //表示travel目录下的所有post
        //.filter(post => post.path.startsWith('/'))
        .filter(post => post.frontmatter['categories'].startsWith('travel'))
        //日期按照降序排列
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    },

    title(){
      var title = this.$page.title;
      return title;
    }
  },

  methods:{
    hControl: function(){
      setTimeout(function(){
        var height_l = parseInt($(".box-img").width());
        console.log(height_l);
        $('.box-img, .box-txt').height(height_l);

        $(window).resize(function(){
          var height_l = parseInt($('.box-img').width());
          $('.box-img, .box-txt').height(height_l);
        })
      },300);
    }
  },

  created: function(){
    this.hControl();
  }
}
</script>
