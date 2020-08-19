<template>
<div class="post">
  <navigation />
  <div class="page" >

    <router-view></router-view>

    <div  class="contact-form-container">
      <v-container fluid class="content text-left col-md-8 pt-0">
        <v-row class="pa-4 pt-0" justify="center" >
        <v-col cols="12" lg="10" class="">
          <h1>Have a project like this?</h1>
          <p>I'd love to help work through your operations challenges, communication issues, or even just basic design dilemmas.</p>
          <contact-form></contact-form>
        </v-col>
      </v-row>
      </v-container>
    </div>
  </div>
  <footer-bar/>

</div>
</template>

<script>
// @ is an alias to /src
const navigation = () => import('@/components/navigation.vue')
const footerBar = () => import('@/components/footer-bar.vue')
const contactForm = () => import('@/components/contact-form.vue')
import { butter } from '@/buttercms';


export default {
  name: 'post',
  components: {
    navigation,
    footerBar,
    contactForm
  },
  computed:{
    headerStyle: function(){
      return this.post.fields.header
    }
  },
  methods:{
    getPost(id){
      //check for preview mode for ButterCMS
    let isPreview = ""
    if(this.$route.query.preview != undefined){
      isPreview = this.$route.query.preview == 1 ? 1 : 0;
    }
    else{
      isPreview = 0;
    }
    //get page from ButterCMS
     butter.page.retrieve('work', id, {'preview': isPreview}).then((res) => {
       this.post = res.data.data
     })
   },
  },
  data(){
    return {
      post: [],
    }
  },
  created(){
    this.getPost(this.$route.params.slug);
  }
}
</script>


<style lang="scss" >
.post{
  min-height: 100vh;
  // display: grid;
  // grid-template-rows: 60px 1fr;
  // grid-template-columns: 1fr;
  // grid-template-areas:
  // "nav"
  // "body";
  .navigation-container{
    grid-area: nav;
  }
  > .page{
    grid-area: body;
    background-color: rgba(255,255,255,1);
    height: 100%;
    overflow-x: hidden;
    z-index: 10;
  }
.header {
    color: white!important;
    text-shadow: 0 8px 20px rgba(0,0,0,.45)!important;
    min-height: 40vh;
    &.blank{
      position: relative;
      .col{

      }
      .header-image{
        height: 40vh;
        position: absolute;
        top: 0;
        width: 100%;
        .v-skeleton-loader__image{

          height: 40vh;
        }
      }
    }
    h1{
      font-size: 3rem;
      font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif!important;
    }
    .site-link{
      border-width: 3px;
      font-size: bold;
      background: rgba(0,0,0,.45)!important;
      color: #fff;
      text-shadow: 1px 1px 2px black;
    }
    .tags{
      ul{
        margin: 0 auto;
        padding: 0;
        li{
          margin: 0;
          list-style-type: none!important;
          display: inline-block;
          background: rgba(255,255,255,.95);
          padding: .25rem .5rem;
          border-radius: 25px;
          color: grey!important;
          box-shadow: 0 8px 20px rgba(0,0,0,.15)!important;
          // text-shadow: 0 8px 20px rgba(0,0,0,.45)!important;
        }
      }
    }
}
.content{
  color: #333;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
  p, ul{
    margin-bottom: 1.5rem;
    color: #777!important;
  }
  li{
    margin-bottom: .75rem;
  }
  h1{
    line-height: 2.5rem;
  }
  h1,h2,h3{
    margin-bottom: 1rem;
    padding-top: 2rem;
    color: #666;
    font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
    font-weight: lighter;
  }
  img{
    max-width: 100%;
  }
  hr{
    opacity: .5;
  }
  table{
    border:1px solid #eee;
    td{
      text-align:center;
    }
  }
  a > img{
    border: 1px solid var(--v-primary-base);
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
  .video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }
  .video-responsive iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
}
.contact-form-container{
  background-image: url("~@/assets/images/escheresque.png");
  background-repeat:repeat;
}
}

</style>
